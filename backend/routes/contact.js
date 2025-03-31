const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

// ⚠️ Configuración insegura a propósito
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'frontend/uploads'); // Carpeta pública
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // Conserva el nombre original
    }
});

const upload = multer({ storage: storage });

router.post('/contacto', upload.single('archivo'), (req, res) => {
    const { nombre, email, mensaje } = req.body;

    console.log("Nuevo mensaje recibido:");
    console.log("Nombre:", nombre);
    console.log("Email:", email);
    console.log("Mensaje:", mensaje);

    if (req.file) {
        console.log("Archivo subido:", req.file.originalname);
        res.send(`Mensaje recibido. Archivo subido a: <a href="/uploads/${req.file.originalname}">/uploads/${req.file.originalname}</a>`);
    } else {
        res.send("Mensaje recibido sin archivo adjunto.");
    }
});

module.exports = router;
