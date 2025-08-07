let books = [
    { id: 1, title: "Atomic Habits", author: "James Clear" },
    { id: 2, title: "The Alchemist", author: "Paulo Coelho" }
];

exports.getAllBooks = (req, res) => {
    res.status(200).json(books);
};

exports.addBook = (req, res) => {
    const { title, author } = req.body;
    if (!title || !author) {
        return res.status(400).json({ error: "Title and author are required." });
    }
    const newBook = {
        id: books.length + 1,
        title,
        author
    };
    books.push(newBook);
    res.status(201).json(newBook);
};

exports.updateBook = (req, res) => {
    const { id } = req.params;
    const { title, author } = req.body;
    const book = books.find(b => b.id === parseInt(id));
    if (!book) {
        return res.status(404).json({ error: "Book not found." });
    }
    book.title = title || book.title;
    book.author = author || book.author;
    res.status(200).json(book);
};

exports.deleteBook = (req, res) => {
    const { id } = req.params;
    const index = books.findIndex(b => b.id === parseInt(id));
    if (index === -1) {
        return res.status(404).json({ error: "Book not found." });
    }
    books.splice(index, 1);
    res.status(204).send();
};