const express = require("express");
const { v4: uuidv4 } = require('uuid');

const pool = require("./db");

const app = express();
const PORT = 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
});


// GET   /books   --> obtener todos los libros
app.get("/books", async (req, res) => {
    try {
        res.status(200).json({ message: "books are returned" });
    } catch (error) {
        res.json({ error: error.message });
    }
});


// GET   /books/:id   --> obtener un libro en especifíco
app.get("/books/:id", async (req, res) => {
    try {
        const {id} = req.params;
        res.status(200).json({ message: `specific book is returned with id: ${id}`});
    } catch (error) {
        res.json({ error: error.message });
    }
});


// POST   /books   --> crear un libro
app.post("/books", async (req, res) => {
    try {
        const {name, description} = req.body;

        const id = uuidv4(); // crear id aleatorio ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

        // insertando datos del libro a la BdeD
        const newBook = await pool.query("INSERT INTO book (id, name, description) VALUES ($1, $2, $3) RETURNING *",
        [id, name, description]);//         $1   $2       $3

        res.status(201).json({ message: `book was created: `, data: newBook.rows });
    } catch (error) {
        res.json({ error: error.message });
    }
});


// PUT   /books/:id   --> actualizar un libro
app.put("/books/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const {name, description} = req.body;
        res.status(200).json({ message: `book was updated: ${name}, ${description}` });
    } catch (error) {
        res.json({ error: error.message });
    }
});


// DELETE   /books/:id   --> eliminar un libro
app.delete("/books/:id", async (req, res) => {
    try {
        const {id} = req.params;
        res.status(200).json({ message: `specific book is deleted with id: ${id}`});
    } catch (error) {
        res.json({ error: error.message });
    }
});
