


const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./db");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public")); // Serves your HTML/CSS/JS files

// 1. CREATE: Post a new ticket
app.post("/create-ticket", (req, res) => {
    const { title, description, category, priority } = req.body;

    // Validation to prevent null inserts
    if (!title || !category || !priority) {
        return res.status(400).send("Missing required fields");
    }

    const sql = `
        INSERT INTO tickets(title, description, category, priority, status)
        VALUES(?, ?, ?, ?, 'Open')
    `;

    db.query(sql, [title, description, category, priority], (err, result) => {
        if (err) {
            console.error("Database Error:", err);
            res.status(500).send("Error creating ticket");
        } else {
            res.status(201).send("Ticket created successfully");
        }
    });
});

// 2. READ: Get all tickets 
app.get("/tickets", (req, res) => {
    const sql = "SELECT * FROM tickets ORDER BY id DESC";
    
    db.query(sql, (err, results) => {
        if (err) {
            console.error("Database Error:", err);
            res.status(500).send("Error fetching tickets");
        } else {
            res.json(results);
        }
    });
});

// 3. UPDATE: Change ticket status
app.put("/update-status/:id", (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    const sql = "UPDATE tickets SET status = ? WHERE id = ?";
    
    db.query(sql, [status, id], (err, result) => {
        if (err) {
            console.error("Database Error:", err);
            res.status(500).send("Error updating ticket");
        } else {
            res.send("Ticket status updated");
        }
    });
});

// 4. DELETE: Remove a ticket 
app.post("/delete-ticket/:id", (req, res) => {
    const { id } = req.params;

    const sql = "DELETE FROM tickets WHERE id = ?";
    
    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error("Database Error:", err);
            res.status(500).send("Error deleting ticket");
        } else {
            res.send("Ticket deleted successfully");
        }
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});