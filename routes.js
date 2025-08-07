const express = require('express');
const router = express.Router();
const {
    getAllBooks,
    addBook,
    updateBook,
    deleteBook
} = require('../controllers/bookController');

// GET all books
router.get('/', getAllBooks);

// POST new book
router.post('/', addBook);

// PUT update book
router.put('/:id', updateBook);

// DELETE book
router.delete('/:id', deleteBook);

module.exports = router;