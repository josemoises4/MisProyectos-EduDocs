// Función para obtener parámetros de la URL
function obtenerParametro(parametro) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(parametro);
}

// Obtener el nombre del curso desde la URL y normalizarlo
const cursoSeleccionado = obtenerParametro("nombre") || "Curso no disponible";
const cursoNormalizado = cursoSeleccionado.trim().toUpperCase(); // Normalizar para coincidir en el diccionario

// Diccionario de contenidos por curso
const contenidos = {
    "LENGUAJE DE PROGRAMACIÓN JAVA": [
        { titulo: "INTRODUCCIÓN A JAVA", subtemas: ["Conceptos básicos", "Historia de Java"] },
        { titulo: "SINTAXIS BÁSICA", subtemas: ["Variables y tipos de datos", "Estructuras de control"] },
        { titulo: "PROGRAMACIÓN ORIENTADA A OBJETOS", subtemas: ["Clases y Objetos", "Encapsulación", "Herencia", "Polimorfismo"] }
    ],
    "SISTEMAS OPERATIVOS LINUX": [
        { titulo: "INTRODUCCIÓN A LINUX", subtemas: ["Historia de Linux", "Distribuciones populares"] },
        { titulo: "COMANDOS BÁSICOS", subtemas: ["Navegación en la terminal", "Gestión de archivos"] },
        { titulo: "ADMINISTRACIÓN DEL SISTEMA", subtemas: ["Gestión de usuarios", "Permisos y seguridad"] }
    ],
    "JAVASCRIPT AVANZADO": [
        { titulo: "PROGRAMACIÓN ASÍNCRONA", subtemas: ["Callbacks", "Promises", "Async/Await"] },
        { titulo: "MANEJO DEL DOM", subtemas: ["Eventos", "Manipulación de elementos HTML"] },
        { titulo: "FRAMEWORKS POPULARES", subtemas: ["React.js", "Vue.js", "Angular"] }
    ],
    "TÉCNICAS DE PROGRAMACIÓN ORIENTADA A OBJETOS": [
        { titulo: "PRINCIPIOS BÁSICOS", subtemas: ["Abstracción", "Encapsulación", "Modularidad"] },
        { titulo: "PATRONES DE DISEÑO", subtemas: ["Singleton", "Factory", "Observer"] },
        { titulo: "BUENAS PRÁCTICAS", subtemas: ["Código limpio", "Reutilización", "SOLID"] }
    ]
};

// Seleccionar el contenedor de contenido
const contenidoDiv = document.querySelector(".course-content");

if (contenidoDiv) {
    contenidoDiv.innerHTML = `<h2>CONTENIDO BREVE</h2>`;

    // Verificar si el curso tiene contenido definido
    if (contenidos[cursoNormalizado]) {
        contenidos[cursoNormalizado].forEach((seccion, index) => {
            let idSeccion = `seccion-${index}`;
            let idArrow = `arrow-${index}`;

            let sectionHTML = `
                <div class="section" onclick="toggleSubtemas('${idSeccion}', '${idArrow}')">
                    <div class="tema">
                        ${seccion.titulo} 
                        <span class="arrow" id="${idArrow}">▶</span>
                    </div>
                    <ul class="subtemas" id="${idSeccion}">
                        ${seccion.subtemas.map(subtema => `<li>${subtema}</li>`).join("")}
                    </ul>
                </div>
            `;

            contenidoDiv.innerHTML += sectionHTML;
        });
    } else {
        contenidoDiv.innerHTML += `<p>No hay contenido disponible para este curso.</p>`;
    }
}

// Función para mostrar/ocultar subtemas
function toggleSubtemas(id, arrowId) {
    let subtemas = document.getElementById(id);
    let arrow = document.getElementById(arrowId);

    if (subtemas && arrow) {
        if (subtemas.classList.contains("show")) {
            subtemas.classList.remove("show");
            arrow.style.transform = "rotate(0deg)";
        } else {
            subtemas.classList.add("show");
            arrow.style.transform = "rotate(90deg)";
        }
    }
}

// Obtener elementos del DOM y verificar si existen antes de modificarlos
const detalleNombre = document.getElementById("detalle-nombre");
const detallePrecio = document.getElementById("detalle-precio");
const detalleImagen = document.getElementById("detalle-imagen");

if (detalleNombre) detalleNombre.innerText = cursoSeleccionado || "Nombre no disponible";
if (detallePrecio) detallePrecio.innerText = obtenerParametro("precio") || "No disponible";
if (detalleImagen) detalleImagen.src = obtenerParametro("imagen") || "img/Word.png";

// Diccionario de colores para cada curso
const coloresCursos = {
    "SISTEMAS OPERATIVOS LINUX": "#00ff00", // Verde brillante
    "LENGUAJE DE PROGRAMACIÓN JAVA": "#ff0000", // Rojo
    "BASE DE DATOS": "#1E90FF", // Azul
    "DESARROLLO DE SOLUCIONES EMPRESARIALES": "#FFD700", // Amarillo dorado
    "TÉCNICAS DE PROGRAMACIÓN ORIENTADA A OBJETOS": "#8A2BE2" // Púrpura
};

// Si el curso está en la lista, cambia los colores
if (coloresCursos[cursoNormalizado] && contenidoDiv) {
    let colorCurso = coloresCursos[cursoNormalizado];

    // Cambiar borde y color de los temas
    contenidoDiv.style.borderColor = colorCurso;
    contenidoDiv.style.color = colorCurso;

    // Cambiar color de los títulos de las secciones
    document.documentElement.style.setProperty("--color-tema", colorCurso);
}

// Obtener el nombre del curso de la URL
const nombreCurso = obtenerParametro("nombre");

// Actualizar el botón "Comprar" con la URL que llevará al formulario
document.getElementById("boton-comprar").href = `formulario.html?nombre=${encodeURIComponent(nombreCurso)}`;
