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

// Función para generar el QR
function generarQR() {
    const qrContainer = document.getElementById("qrContainer");
    const formContainer = document.querySelector(".container");
    const metodoPago = document.getElementById("metodoPago").value;

    if (metodoPago === "yape") {
        qrContainer.classList.add("active");  // Muestra el QR con animación
        formContainer.classList.add("qr-visible"); // Mueve el formulario a la izquierda
    } else {
        qrContainer.classList.remove("active");  // Oculta el QR
        formContainer.classList.remove("qr-visible"); // Restaura la posición del formulario
    }
}

// Manejo del envío del formulario
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form-compra");
    const metodoPago = document.getElementById("metodoPago");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita el envío del formulario
        const metodo = metodoPago.value;

        if (metodo === "yape") {
            generarQR(); // Ahora la función está correctamente definida
        } else if (metodo === "paypal") {
            procesarPagoPayPal();
        } else {
            alert("Método de pago no válido.");
        }
    });
});


/*2 BOTONES | SE REDIRIGE AL WHASTAPP */
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form-compra");
    const metodoPago = document.getElementById("metodoPago");
    const qrContainer = document.getElementById("qrContainer");
    const btnComprado = document.getElementById("btnComprado");
    const btnNoComprado = document.getElementById("btnNoComprado");

    // Asegurar que el QR y botones estén ocultos al cargar la página
    qrContainer.classList.remove("active");
    qrContainer.style.display = "none";

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita el envío del formulario

        const nombre = document.getElementById("nombre").value;
        const correo = document.getElementById("correo").value;
        const curso = document.getElementById("curso").value;
        const metodo = metodoPago.value;

        if (metodo === "yape") {
            generarQR();
        } else if (metodo === "paypal") {
            procesarPagoPayPal();
        } else {
            alert("Método de pago no válido.");
        }
    });

    metodoPago.addEventListener("change", function() {
        generarQR();
    });

    btnComprado.addEventListener("click", function () {
        enviarDatosWhatsApp();
    });

    btnNoComprado.addEventListener("click", function () {
        alert("Serás redirigido a la página principal.");
        window.location.href = "index.html";
    });
});

function generarQR() {
    const qrContainer = document.getElementById("qrContainer");
    const formContainer = document.querySelector(".container");
    const metodoPago = document.getElementById("metodoPago").value;

    if (metodoPago === "yape") {
        qrContainer.style.display = "block";
        setTimeout(() => qrContainer.classList.add("active"), 10);
        formContainer.classList.add("qr-visible");
    } else {
        qrContainer.classList.remove("active");
        setTimeout(() => qrContainer.style.display = "none", 300);
        formContainer.classList.remove("qr-visible");
    }
}

function enviarDatosWhatsApp() {
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const curso = document.getElementById("curso").value;

    const mensaje = `Hola, he realizado la compra de un curso.\n\n` +
                    `📌 *Nombre:* ${nombre}\n` +
                    `📌 *Correo:* ${correo}\n` +
                    `📌 *Curso:* ${curso}\n` +
                    `📌 *Método de Pago:* Yape ✅`;

    const numeroWhatsApp = "931208459"; // Reemplaza con tu número de WhatsApp
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank"); // Abre WhatsApp en una nueva pestaña
}
