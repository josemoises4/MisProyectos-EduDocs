// Obtener parámetros de la URL
function obtenerParametro(parametro) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(parametro);
}

// Obtener el curso seleccionado de la URL
const cursoSeleccionado = obtenerParametro("nombre") || "Curso no disponible";

// Llenar el combobox con el curso seleccionado
document.addEventListener("DOMContentLoaded", function() {
    let selectCurso = document.getElementById("curso");
    let option = document.createElement("option");
    option.text = cursoSeleccionado;
    option.value = cursoSeleccionado;
    selectCurso.appendChild(option);
});

// Manejo del envío del formulario
document.getElementById("form-compra").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Compra realizada con éxito");
});


//metodo de pagos
document.getElementById('form-compra').addEventListener('submit', function(e) {
    e.preventDefault();

    // Obtener datos del formulario
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const metodoPago = document.getElementById('metodoPago').value;
    
    // Definir el monto (en este caso, ejemplo de un monto de curso)
    const monto = 100; // Esto sería el monto a pagar por el curso

    // Dependiendo del método de pago
    if (metodoPago === 'paypal') {
        // Redirigir a PayPal (puedes usar la API o un enlace simple)
        window.location.href = `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=tu-email-paypal@example.com&item_name=Curso%20de%20Programacion&amount=${monto}&currency_code=USD`;
    } 
    else if (metodoPago === 'yape') {
        // Redirigir a un enlace de Yape con la cantidad
        window.location.href = `yape://send?amount=${monto}&phone=tu-numero-yape`;
    }else {
        alert("Método de pago no válido.");
    }
});
