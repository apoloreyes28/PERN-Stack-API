const express = require("express");

const app = express();
const PORT = 3001;

app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
});

// GET   /books     --> obtener todos los libros
app.get("/books", async (req, res) => {
    try {
        res.status(200).json({ message: "books are returned" });
    } catch (error) {
        res.json({ error: error.message });
    }
});


// GET   /books/:id  --> obtener un libro en especifíco
app.get("/books/:id", async (req, res) => {
    try {
        const {id} = req.params;
        res.status(200).json({ message: `specific book is returned with id: ${id}`});
    } catch (error) {
        res.json({ error: error.message });
    }
});


