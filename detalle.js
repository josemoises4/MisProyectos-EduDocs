// Función para obtener parámetros de la URL
function obtenerParametro(parametro) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(parametro);
}

// Obtener datos y mostrarlos en la página
document.getElementById("detalle-nombre").innerText = obtenerParametro("nombre") || "Nombre no disponible";
document.getElementById("detalle-precio").innerText = "" + (obtenerParametro("precio") || "No disponible");
document.getElementById("detalle-imagen").src = obtenerParametro("imagen") || "img/Word.png";
document.getElementById("detalle-info").innerText = obtenerParametro("info") || "Información no disponible";

function toggleSubtemas(id) {
    let subtemas = document.getElementById(id);
    let arrow = document.getElementById(`arrow-${id}`);

    if (subtemas.classList.contains("show")) {
        subtemas.classList.remove("show");
        arrow.style.transform = "rotate(0deg)";
    } else {
        subtemas.classList.add("show");
        arrow.style.transform = "rotate(90deg)";
    }
}
