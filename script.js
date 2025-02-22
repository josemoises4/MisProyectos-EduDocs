document.addEventListener("DOMContentLoaded", function() {
    mostrarDocs(3); // Cargar documentos del primer ciclo al entrar
    showCycle('docs-container'); // Asegurar que se muestre el primer ciclo
});

function mostrarDocs(ciclo) {
    const docsContainer = document.getElementById("docs-container");
    docsContainer.innerHTML = ""; // Limpiar documentos previos

    const documentos = {
        1: [
            { nombre: "MATEMÁTICA APLICADA A LAS TECNOLOGÍAS", precio: "----", imagen: "img/Word.png", enCurso: true},
            { nombre: "MODELADO Y DISEÑO DE BASE DE DATOS", precio: "----", imagen: "img/Word.png", enCurso: true }
        ],
        2: [
            { nombre: "CABLEADO ESTRUCTURADO", precio: "----", imagen: "img/Word.png", enCurso: true },
            { nombre: "IT ESSENTIALS - CONECTIVIDAD", precio: "----", imagen: "img/Word.png", enCurso: true },
            { nombre: "TÉCNICAS DE PROGRAMACIÓN ORIENTADA A OBJETOS", precio: "150", imagen: "img/Word.png"},
            { nombre: "BASE DE DATOS", precio: "----", imagen: "img/Word.png", enCurso: true},
            { nombre: "ESTRUCTURA DE DATOS", precio: "150", imagen: "img/Word.png"}
            
        ],
        3: [
            { nombre: "ANALISIS Y DISEÑO DE SISTEMAS", precio: "----", imagen: "img/Word.png", enCurso: true },
            { nombre: "BASE DE DATOS AVANZADO", precio: "----", imagen: "img/Word.png" },
            { nombre: "LENGUAJE DE PROGRAMACIÓN JAVA", precio: "----", imagen: "img/Word.png" },
            { nombre: "DESARROLLO DE SOLUCIONES EMPRESARIALES", precio: "----", imagen: "img/Word.png" },
            { nombre: "SISTEMAS OPERATIVOS LINUX", precio: "----", imagen: "img/Word.png" }
        ],
        4: [
            { nombre: "APLICACIONES WEB", precio: "----", imagen: "img/Word.png", enCurso: true },
            { nombre: "GESTIÓN DE PROYECTOS DE TECNOLOGÍA DE LA INFORMACIÓN", precio: "----", imagen: "img/Word.png", enCurso: true },
            { nombre: "ADMINISTRACIÓN DE BASE DE DATOS", precio: "----", imagen: "img/Word.png", enCurso: true, enCurso: true},
            { nombre: "LENGUAJE DE PROGRAMACIÓN - JAVA WEB", precio: "----", imagen: "img/Word.png", enCurso: true, enCurso: true},
            { nombre: "EXPERIENCIAS FORMATIVAS INTERMEDIAS (MARKETING PERSONAL)", precio: "----", imagen: "img/Word.png", enCurso: true, enCurso: true}
        ]
    };

    documentos[ciclo].forEach(doc => {
        const docItem = document.createElement("div");
        docItem.classList.add("doc-item");

        let buttonHTML = doc.enCurso
            ? `<button class="in-progress-button">En curso</button>`
            : `<button class="buy-button" onclick="comprar('${doc.nombre}', '${doc.precio}')">Ver mas</button>`;

        docItem.innerHTML = `
            <img src="${doc.imagen}" alt="${doc.nombre}">
            <p class="doc-title">${doc.nombre}</p>
            <p class="doc-price">S/ <b>${doc.precio}</b></p>
            ${buttonHTML}
        `;

        docsContainer.appendChild(docItem);
    });
}

function comprar(nombre, precio) {
    window.location.href = `detalle.html?nombre=${encodeURIComponent(nombre)}&precio=${encodeURIComponent(precio)}`;
}

function generarBoton(doc) {
    return `<button class="buy-button" onclick="verDetalle('${doc.nombre}', '${doc.precio}', '${doc.imagen}')">Ver más</button>`;
}

function verDetalle(nombre, precio, imagen) {
    window.location.href = `detalle.html?nombre=${encodeURIComponent(nombre)}&precio=${encodeURIComponent(precio)}&imagen=${encodeURIComponent(imagen)}`;
}

document.getElementById("documentos").innerHTML = documentos.map(doc => `
    <div class="documento">
        <img src="${doc.imagen}" alt="${doc.nombre}">
        <p class="doc-title">${doc.nombre}</p>
        <p class="doc-price">s/ <b>${doc.precio}</b></p>
        ${generarBoton(doc)}
    </div>
`).join("");