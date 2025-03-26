document.getElementById("buscar-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const input = document.getElementById("search").value;
    
    // ⚠️ VULNERABILIDAD XSS (deliberada)
    document.getElementById("resultados").innerHTML = `<p>Resultados para: <strong>${input}</strong></p>`;
});
