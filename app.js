/* =====================================================
   PORTAL CALIDAD
   VERSIÓN 1.0
   ===================================================== */


/* ================= DATOS DEMO ================= */

const proyectos = [

    {
        nombre: "ELECTROIMAN",
        ubicacion: "Alto Norte",
        calidad: 78,
        dossier: 65,
        estado: "En ejecución"
    },

    {
        nombre: "CEMS",
        ubicacion: "Alto Norte",
        calidad: 52,
        dossier: 45,
        estado: "En ejecución"
    },

    {
        nombre: "PAC 1",
        ubicacion: "Alto Norte",
        calidad: 40,
        dossier: 38,
        estado: "En ejecución"
    },

    {
        nombre: "PAC 2",
        ubicacion: "Alto Norte",
        calidad: 25,
        dossier: 20,
        estado: "En ejecución"
    }

];


const tareas = [

    {
        titulo: "Revisar protocolo de montaje PAC 1",
        responsable: "Felipe Gajardo",
        proyecto: "PAC 1",
        fecha: "29-09-2026",
        estado: "Pendiente"
    },

    {
        titulo: "Actualizar estado de registros ELECTROIMAN",
        responsable: "Rodrigo",
        proyecto: "ELECTROIMAN",
        fecha: "29-09-2026",
        estado: "Pendiente"
    },

    {
        titulo: "Revisar planos As-Built",
        responsable: "Dibujante",
        proyecto: "CEMS",
        fecha: "30-09-2026",
        estado: "En proceso"
    },

    {
        titulo: "Revisión Dossier ELECTROIMAN",
        responsable: "Felipe Gajardo",
        proyecto: "ELECTROIMAN",
        fecha: "01-10-2026",
        estado: "Pendiente"
    }

];


const dossier = [

    {
        proyecto: "ELECTROIMAN",
        avance: 65
    },

    {
        proyecto: "CEMS",
        avance: 45
    },

    {
        proyecto: "PAC 1",
        avance: 38
    },

    {
        proyecto: "PAC 2",
        avance: 20
    }

];


/* ================= NAVEGACIÓN ================= */

function mostrarPagina(pagina) {

    const paginas =
        document.querySelectorAll(".pagina");

    paginas.forEach(function(elemento) {

        elemento.classList.add("oculto");

    });


    const seleccion =
        document.getElementById(
            "pagina-" + pagina
        );


    if (seleccion) {

        seleccion.classList.remove("oculto");

    }


    /* MENU ACTIVO */

    const menus =
        document.querySelectorAll(".menu");

    menus.forEach(function(menu) {

        menu.classList.remove("active");

    });


    menus.forEach(function(menu) {

        const texto =
            menu.innerText.toLowerCase();

        if (
            texto.includes(
                obtenerNombreMenu(pagina)
            )
        ) {

            menu.classList.add("active");

        }

    });


    cambiarTitulo(pagina);


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* ================= TÍTULOS ================= */

function cambiarTitulo(pagina) {

    const titulo =
        document.getElementById(
            "tituloPagina"
        );

    const subtitulo =
        document.getElementById(
            "subtituloPagina"
        );


    const titulos = {

        inicio: [
            "Panel de Calidad",
            "Control general de proyectos QA/QC"
        ],

        tareas: [
            "Mis tareas",
            "Actividades asignadas"
        ],

        proyectos: [
            "Todos los proyectos",
            "Estado general de proyectos"
        ],

        nuevo: [
            "Nuevo proyecto",
            "Crear proyecto y documentación"
        ],

        dossier: [
            "Dossier de Calidad",
            "Control documental"
        ],

        terreno: [
            "Visitas a terreno",
            "Registro de actividades"
        ],

        reuniones: [
            "Reuniones",
            "Coordinación QA/QC"
        ],

        organigrama: [
            "Organigrama",
            "Estructura del área Calidad"
        ],

        usuarios: [
            "Usuarios",
            "Administración del sistema"
        ]

    };


    if (titulos[pagina]) {

        titulo.innerText =
            titulos[pagina][0];

        subtitulo.innerText =
            titulos[pagina][1];

    }

}


function obtenerNombreMenu(pagina) {

    const nombres = {

        inicio: "inicio",

        tareas: "tareas",

        proyectos: "todos los proyectos",

        nuevo: "nuevo proyecto",

        dossier: "dossier",

        terreno: "visitas a terreno",

        reuniones: "reuniones",

        organigrama: "organigrama",

        usuarios: "usuarios"

    };


    return nombres[pagina] || pagina;

}


/* ================= PROYECTOS ================= */

function cargarProyectos() {

    const contenedor =
        document.getElementById(
            "proyectosInicio"
        );


    if (!contenedor) return;


    contenedor.innerHTML = "";


    proyectos.forEach(function(proyecto) {

        const card =
            document.createElement("div");

        card.className =
            "project-card";


        card.innerHTML = `

            <h3>${proyecto.nombre}</h3>

            <div class="location">
                📍 ${proyecto.ubicacion}
            </div>


            <div class="progress-label">

                <span>Calidad</span>

                <strong>
                    ${proyecto.calidad}%
                </strong>

            </div>


            <div class="progress">

                <div
                    style="width:${proyecto.calidad}%">
                </div>

            </div>


            <div class="progress-label">

                <span>Dossier</span>

                <strong>
                    ${proyecto.dossier}%
                </strong>

            </div>


            <div class="progress">

                <div
                    style="width:${proyecto.dossier}%">
                </div>

            </div>

        `;


        contenedor.appendChild(card);

    });

}


/* ================= TABLA PROYECTOS ================= */

function cargarTablaProyectos() {

    const tabla =
        document.getElementById(
            "tablaProyectos"
        );


    if (!tabla) return;


    tabla.innerHTML = "";


    proyectos.forEach(function(proyecto) {

        const fila =
            document.createElement("tr");


        fila.innerHTML = `

            <td>
                <strong>
                    ${proyecto.nombre}
                </strong>
            </td>

            <td>
                ${proyecto.ubicacion}
            </td>

            <td>

                <div class="progress"
                     style="width:150px">

                    <div
                        style="width:${proyecto.calidad}%">
                    </div>

                </div>

                <small>
                    ${proyecto.calidad}%
                </small>

            </td>

            <td>

                <div class="progress"
                     style="width:150px">

                    <div
                        style="width:${proyecto.dossier}%">
                    </div>

                </div>

                <small>
                    ${proyecto.dossier}%
                </small>

            </td>

            <td>

                <span class="status active">
                    ${proyecto.estado}
                </span>

            </td>

        `;


        tabla.appendChild(fila);

    });

}


/* ================= TAREAS ================= */

function cargarTareas() {

    const lista =
        document.getElementById(
            "listaTareas"
        );


    if (!lista) return;


    lista.innerHTML = "";


    tareas.forEach(function(tarea, index) {

        const elemento =
            document.createElement("div");


        elemento.className =
            "task";


        elemento.innerHTML = `

            <div class="task-left">

                <div
                    class="task-check"
                    onclick="completarTarea(this)">
                </div>

                <div>

                    <strong>
                        ${tarea.titulo}
                    </strong>

                    <small>
                        ${tarea.proyecto}
                        · Responsable:
                        ${tarea.responsable}
                        · ${tarea.fecha}
                    </small>

                </div>

            </div>


            <span class="status">
                ${tarea.estado}
            </span>

        `;


        lista.appendChild(elemento);

    });

}


/* ================= COMPLETAR TAREA ================= */

function completarTarea(elemento) {

    const tarea =
        elemento.closest(".task");


    tarea.classList.toggle("done");


    const estado =
        tarea.querySelector(".status");


    if (tarea.classList.contains("done")) {

        estado.innerText =
            "Completada";

        estado.style.background =
            "#e8f7ef";

        estado.style.color =
            "#188650";

    }

    else {

        estado.innerText =
            "Pendiente";

        estado.style.background =
            "";

        estado.style.color =
            "";

    }

}


/* ================= DOSSIER ================= */

function cargarDossier() {

    const contenedor =
        document.getElementById(
            "listaDossier"
        );


    if (!contenedor) return;


    contenedor.innerHTML = "";


    dossier.forEach(function(item) {

        const card =
            document.createElement("div");


        card.className =
            "dossier-card";


        card.innerHTML = `

            <div class="dossier-card-header">

                <div>

                    <h3>
                        ${item.proyecto}
                    </h3>

                    <p>
                        Dossier de Calidad
                    </p>

                </div>

                <div class="dossier-percent">
                    ${item.avance}%
                </div>

            </div>


            <div class="progress">

                <div
                    style="width:${item.avance}%">
                </div>

            </div>


            <div class="dossier-items">

                <div class="dossier-item">
                    ✓ Índice / Checklist
                </div>

                <div class="dossier-item">
                    ✓ Carta de término
                </div>

                <div class="dossier-item">
                    ✓ Planos As-Built
                </div>

                <div class="dossier-item">
                    ✓ Protocolos
                </div>

                <div class="dossier-item">
                    ✓ Certificaciones
                </div>

                <div class="dossier-item">
                    ✓ Registros de calidad
                </div>

                <div class="dossier-item">
                    ✓ NCR cerradas
                </div>

                <div class="dossier-item">
                    ✓ SDI
                </div>

            </div>

        `;


        contenedor.appendChild(card);

    });

}


/* ================= NUEVO PROTOCOLO ================= */

function agregarProtocolo() {

    const contenedor =
        document.getElementById(
            "protocolosNuevo"
        );


    const fila =
        document.createElement("div");


    fila.className =
        "protocol-row";


    fila.innerHTML = `

        <input
            placeholder="Nombre del protocolo"
        >

        <input
            placeholder="Código"
        >

        <input
            type="number"
            placeholder="N° registros"
        >

    `;


    contenedor.appendChild(fila);

}


/* ================= CREAR PROYECTO ================= */

function crearProyecto() {

    const nombre =
        document.getElementById(
            "nombreProyecto"
        ).value.trim();


    const ubicacion =
        document.getElementById(
            "ubicacionProyecto"
        ).value.trim();


    const cliente =
        document.getElementById(
            "clienteProyecto"
        ).value.trim();


    if (!nombre || !ubicacion) {

        alert(
            "Debes ingresar al menos el nombre y ubicación del proyecto."
        );

        return;

    }


    proyectos.push({

        nombre: nombre,

        ubicacion: ubicacion,

        calidad: 0,

        dossier: 0,

        estado: "En ejecución"

    });


    cargarProyectos();

    cargarTablaProyectos();


    alert(
        "Proyecto creado correctamente."
    );


    document.getElementById(
        "nombreProyecto"
    ).value = "";

    document.getElementById(
        "ubicacionProyecto"
    ).value = "";

    document.getElementById(
        "clienteProyecto"
    ).value = "";


    mostrarPagina("proyectos");

}


/* ================= FILTRO ================= */

function filtrarProyecto() {

    const filtro =
        document.getElementById(
            "filtroProyecto"
        ).value;


    const cards =
        document.querySelectorAll(
            ".project-card"
        );


    cards.forEach(function(card) {

        if (
            filtro === "todos" ||
            card.innerText
                .toUpperCase()
                .includes(
                    filtro.toUpperCase()
                )
        ) {

            card.style.display = "";

        }

        else {

            card.style.display = "none";

        }

    });

}


/* ================= INICIO ================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        cargarProyectos();

        cargarTablaProyectos();

        cargarTareas();

        cargarDossier();

    }
);
