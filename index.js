const express = require('express');
const app = express();
const bookRoutes = require('./routes/bookRoutes');
const errorHandler = require('./middleware/errorHandler');

app.use(express.json());

// API routes
app.use('/api/books', bookRoutes);

// Custom error handling middleware
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(📘 Book API running at http://localhost:${PORT});
});