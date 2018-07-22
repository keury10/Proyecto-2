//Declaracion de variables locales.

var estudiantes = [];
var storage = window.localStorage;


window.onload = function aLaCarga() 
{
    //Aqui chequecamos si el localStorage es soportado por el navegador.
    if (typeof (storage) !== "undefined") 
    {
        //Aqui preguntamos si el localStorage tiene algun registro si no tiene no se hace nada.
        if (storage.length > 0) 
        {
            //Aqui se insertan los datos del storage a una lista de estudiantes.
            estudiantes = JSON.parse(storage.getItem("estudiantes"));

            //La lista se envia al metodo cargarTabla que se encargara de mostrar la data en una tabla.
            cargarTabla(estudiantes);

        }

    }
    else 
    {
        alert("NO SOPORTADO");
        // Sorry! No Web Worker support..
    }

}


function limpiarFormulario(inputs){
    inputs.forEach(function(v,i){
        document.getElementById(v).value = "";
    });
}







/**
 *  Este metodo lee la informacion de los inputs en el formulario 
 *  y luego la guarda en una clase local de Estudiante(est).
 *  
 * invoca:
 * 
 *-function agregarEstudiante(est).
 *-function limpiarFormulario().
 * 
 */
function leerEstudiante(){
    
    var nombre = document.getElementById("nombre").value;
    var matricula = document.getElementById("matricula").value;
    var identificacion = document.getElementById("identificacion").value;

    var est = new Estudiante();
    est.nombre = nombre;
    est.matricula = matricula;
    est.identificacion = identificacion;

    limpiarFormulario(["nombre", "matricula", "identificacion"]);

    console.log(est);
    agregarEstudiante(est);
}


/**
 * @param {Estudiante} estudiante 
 *  
 * Este metodo agrega una clase Estudiante(con el nombre estudiante) a la tabla.
 *
 * Es invocado desde:
 * 
 * -function leerEstudiante().
 * 
 * Glosario:
 * 
 * -<tbody>
 * Esta etiqueda: en ingles table body(tbody) o en español cuerpo de la tabla.
 * Es en la que se encapsulan las filas o table rows(vease <tr>) esta ubicada 
 * dentro de la etiqueta <table>.
 * 
 * -<tr>
 * Esta etiqueta: en ingles table row(tr) o en español fila de la tabla.
 * Es en la que se encapsulan las informaciones, contenido y/o la data(vease<td>)
 * de la tabla. Esta ubicada dentro de la etiqueta <tbody>
 * 
 * -<td>
 * Esta etiqueta: en ingles table data o en español informacion/contenido de la tabla.
 * Es en la que residen el contenido de cada fila o row de la tabla dividido por cada una
 * de las columnas de la tabla o table. Estan ubicadas dentro de la etiqueta <tr>.
 * 
 */
function agregarEstudiante(estudiante){
    estudiantes.push(estudiante);
    storage.setItem("estudiantes", JSON.stringify(estudiantes));

    var tablaEstudiante = document.getElementById("tabla_estudiante");
    var tdNombre = document.createElement("td");
    var tdMatricula = document.createElement("td");
    var tdIdentificacion = document.createElement("td");

    var tr = document.createElement("tr");
    tdNombre.textContent = estudiante.nombre;
    tdMatricula.textContent = estudiante.matricula;
    tdIdentificacion.textContent = estudiante.identificacion;

    tr.appendChild(tdNombre);
    tr.appendChild(tdMatricula);
    tr.appendChild(tdIdentificacion);

    tablaEstudiante.appendChild(tr);
}

/**
 * 
 * @param {*} inputs 
 * 
 * Este metodo toma como parametros los inputs de un formulario 
 * para luego limpiarlos del texto que tenian. 
 * 
 * Es invocado desde:
 * 
 * - function leerEstudiante().
 * 
 */


/**
 * 
 * @param {Array} estudiantes 
 * 
 * Este metodo toma como parametro un array/list que contiene objetos Estudiante
 * que seran recorridos usando un forEach y cada objeto de forma individual se 
 * enviara al metodo agregarEstudiante.
 * 
 * Invocado por:
 * 
 * -function aLaCarga().
 * 
 * Invoca:
 * 
 * -function agregarEstudiante().
 */
function cargarTabla(estudiantes) 
{
    //Aqui le asigno un arreglo vacio a mi variable global(la variable estudiantes que declare al principio de esta clase)
    //la razon: simplemente si no hago esto se van a repetir los datos.
    this.estudiantes = [];

    //Aqui recorremos cada unos de los items que contiene el array estudiantes
    estudiantes.forEach(
        function(v,i)
        {
            //Y a cada objeto Estudiante dentro de estudiantes(array) lo mandamos a el metodo agregarEstudiante.
            agregarEstudiante(v);
        }
    )  

}