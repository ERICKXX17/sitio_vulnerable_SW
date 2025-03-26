// backend/routes/contact.js
const express = require('express');
const router = express.Router();

router.post('/contacto', (req, res) => {
    const { nombre, email, mensaje } = req.body;

    // Vulnerabilidad: sin validación ni sanitización de campos
    console.log("Nuevo mensaje recibido:");
    console.log("Nombre:", nombre);
    console.log("Email:", email);
    console.log("Mensaje:", mensaje);

    res.send("Mensaje recibido. Gracias por contactar con SanarPlus.");
});

module.exports = router;
