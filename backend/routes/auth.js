const express = require('express');
const router = express.Router();
const db = require('../db');

// Ruta vulnerable a SQL Injection
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;
    db.get(query, (err, row) => {
        if (err) {
            res.status(500).send("Error en el servidor.");
        } else if (row) {
            res.send({ message: "Login exitoso" });
        } else {
            res.status(401).send("Credenciales incorrectas.");
        }
    });
});

module.exports = router;
