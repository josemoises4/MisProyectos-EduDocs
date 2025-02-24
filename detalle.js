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
    { 
        "titulo": "CONFIGURACIÓN Y CONEXIÓN A BASE DE DATOS", 
        "subtemas": [
            "Instalación de MySQL y MySQL Workbench",
            "Instalación de SQL Server y SQL Server Management Studio",
            "Configuración de autenticación y credenciales del usuario SA",
            "Creación y configuración de bases de datos en MySQL",
            "Creación y administración de bases de datos en SQL Server",
            "Gestión de usuarios y permisos",
            "Conexión de MySQL con Java mediante JDBC",
            "Conexión de SQL Server con Java",
            "Prueba de conexión exitosa"
        ] 
    },
    { 
        "titulo": "PROGRAMACIÓN CRUD EN JAVA CON MYSQL Y SQL SERVER", 
        "subtemas": [
            "Inserción de datos (INSERT)",
            "Consulta de registros con filtros y condiciones (SELECT + WHERE)",
            "Actualización de datos (UPDATE)",
            "Eliminación de registros (DELETE)",
            "Ordenamiento de resultados con ORDER BY",
            "Manejo de fechas de SQL a Java"
        ] 
    },
    { 
        "titulo": "PROGRAMACIÓN ORIENTADA A OBJETOS APLICADA A BASES DE DATOS", 
        "subtemas": [
            "Introducción a POO aplicada a bases de datos",
            "Creación de la capa de entidades (Entity)",
            "Creación de la capa de utilidades (Util)",
            "Implementación de la capa de acceso a datos (DAO - Data Access Object)",
            "Relacionamiento de tablas en Java mediante llaves foráneas"
        ] 
    },
    { 
        "titulo": "DESARROLLO DE INTERFACES GRÁFICAS Y FORMULARIOS", 
        "subtemas": [
            "Creación y Personalización de Formularios",
            "Diseño y estructuración de formularios internos",
            "Captura y validación de datos en formularios",
            "Implementación de eventos y manejo de excepciones"
        ] 
    },
    { 
        "titulo": "GENERACIÓN DE REPORTES CON JASPERSOFT", 
        "subtemas": [
            "Instalación y configuración de Jaspersoft Studio",
            "Creación y Configuración de Reportes",
            "Generación de reportes dinámicos en Java",
            "Conexión de reportes con bases de datos",
            "Implementación de reportes parametrizados"
        ] 
    },
    { 
        "titulo": "OPTIMIZACIÓN Y PROCEDIMIENTOS ALMACENADOS", 
        "subtemas": [
            "Introducción a los procedimientos almacenados en MySQL y SQL Server",
            "Creación y ejecución de procedimientos almacenados sin parámetros",
            "Uso de parámetros de entrada y salida en procedimientos almacenados",
            "Integración de procedimientos almacenados en Java"
        ] 
    }
]
,
    "SISTEMAS OPERATIVOS LINUX": [
        { titulo: "INSTALACIÓN Y CONFIGURACIÓN DEL SISTEMA OPERATIVO UBUNTU", subtemas: ["Introducción a linux y su ecosistema", "Configuración inicial del sistema operativo ubuntu"] },
        { titulo: "PERSONALIZACIÓN Y USO DEL ENTORNO DE UBUNTU", subtemas: ["Personalización del escritorio y la interfaz grafica", "Introducción a la terminal de linux", "Navegación en el sistema de archivos (pwd, ls, cd y cd /, Rutas relativas y Absolutas)"] },
        { titulo: "GESTIÓN DE ARCHIVOS Y DIRECTORIOS", subtemas: ["Exploración avanzada con ls -R (-l, -a, -R)", "Uso del manual de comandos con man", "Creación y manipulación de archivos (nano, cat, head y tail, touch y rm)", "Gestión de directorios (mkdir, rmdir, cp y cp -r, mv)", "Busqueda y gestión de contenidos (grep)"] },
        { titulo: "ADMINISTRACIÓN Y MANTENIMIENTO DEL SISTEMA", subtemas: ["Actualización del sistema operativo y gestión de paquetes", "Administración de usuarios y permisos", "Gestión de permisos en archivos y directorios", "Archivos especiales y enlacces simbolicos"] },
        { titulo: "CONFIGURACIÓN Y ADMINISTRACIÓN DE REDES", subtemas: ["Configuración básica de red en Linux"] },
        { titulo: "ESTRUCTURA DE ARRANQUE Y GESTIÓN DEL SISTEMA", subtemas: ["Estructura y fases del proceso de arranque"] },
    ],
    "BASE DE DATOS AVANZADO": [
        { titulo: "INTRODUCCIÓN A SQL SERVER Y SU ENTORNO", subtemas: ["Interfaz gráfica de SQL Server Management Studio (SSMS)", "Configuración Inicial", "Base de datos del sistema y su proposito"] },
        { titulo: "CREACIÓN DE Y PERSONALIZACIÓN DE BASE DE DATOS", subtemas: ["Creación y configuración de una base de datos", "Creación de tablas y definición de atributos", "Modificación de estructuras", "Tipos de datos en SQL", "Integridad Referencial y claves foráneas (FOREIGNK KEY)"] },
        { titulo: "MANIPULACIÓN DE DATOS EN SQL", subtemas: ["Inserción de datos en una tabla (INSERT)", "Diferentes formas de estructurar datos en SQL", "Actualización de registros (UPDATE)"] },
        { titulo: "CONSULTAS SQL Y USO DE OPERACIONES", subtemas: ["Introducción a consultas SQL", "¿Qué es SELECT y como usarlo?", "Clausulas y operadores básicos (AND, OR, BETWEEN, IN, LIKE '%')", "Consultas combinadas y expresión CASE", "Uso de ORDER BY ASC/DESC"] },
        { titulo: "FUNCIONES Y CONSULTAS AVANZADAS", subtemas: ["Funciones de agregación en SQL (SUM, AVG, COUNT, etc.)", "Consultas con predicados"] },
        { titulo: "ADMINISTRACIÓN DE BASES DE DATOS Y PROCEDIMIENTOS ALMACENADOS", subtemas: ["Base de datos NorthWind y su aplicación en consultas", "Creación y gestión de vistas en SQL", "Creación de procedimientos almacenados con y sin parametros", "Autogeneración de codigo secuencial (números y letras)", "Estructuras condicionales IF - ELSE dentro de un procedure"] },
    { titulo: "OPTIMIZACIÓN Y SEGURIDAD EN SQL", subtemas: ["Búsqueda sensitiva dentro de un SP"] }
    ],
    "TÉCNICAS DE PROGRAMACIÓN ORIENTADA A OBJETOS": [
        { titulo: "INTRODUCCIÓN A LA PROGRAMACIÓN ORIENTADA A OBJETOS", subtemas: ["¿Qué es la POO?"] },
        { titulo: "GESTIÓN Y MANIPULACIÓN DE ARREGLOS", subtemas: ["Concepto y uso de arreglos en Java"] },
        { titulo: "PRINCIPIOS DE HERENCIA", subtemas: ["Fundamentos y beneficios de la herencia", "Implementación de la herencia"] },
        { titulo: "MANEJO DE FECHAS Y TIEMPOS", subtemas: ["Métodos y clases para la gestión de fechas"] },
        { titulo: "DESARROLLO DE INTERFACES CON FORMULARIOS INTERNOS", subtemas: ["Definición y aplicación de formularios internos"] },
        { titulo: "GESTIÓN DE ARCHIVOS (Bloc de notas)", subtemas: ["Introducción al manejo de archivos", "Aplicación POO en la gestión de archivos", "Integración del manejo de archivos con fechas"] },
        { titulo: "ARQUITECTURA EN 3 CAPAS CON POO", subtemas: ["Diseño y estructura: Entity, DAO y Controller", "Organización por capas: Datos, Lógica y Presentación"] },
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
