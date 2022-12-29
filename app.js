//Campos del formulario
const usuarioInput = document.querySelector('#usuario');
const actividadInput = document.querySelector('#actividad');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const descripcionInput = document.querySelector('#descripcion');

//Interfaz de usuario
const formulario = document.querySelector ('#nueva-actividad');
const contenedorActividad = document.querySelector ('#actividad');

class Actividad {
    constructor (){
        this.actividad = []
    }

}

class UI {

}

const administrarActivdad = new Actividad ();
const ui = new UI ();

//Registrar eventos
eventListeners();
function eventListeners (){
    usuarioInput.addEventListener('input', datosActividad);
    actividadInput.addEventListener('input', datosActividad);
    fechaInput.addEventListener('input', datosActividad);
    horaInput.addEventListener('input', datosActividad);
    descripcionInput.addEventListener('input', datosActividad);

    formulario.addEventListener('submit', nuevaActividad)

}

//Informacion de la cita
const actividadObj = {
    usuario: '',
    actividad: '',
    fecha: '',
    hora: '',
    descripcion: '',
}

//Agrega datos al obj 
function datosActividad (e){
    actividadObj [e.target.name] = e.target.value;
}

//Valida y agrega una nueva cita a la clase de citas
function nuevaActividad(e){
    e.preventDefault();

    //Extrae la informacion del obj de cita
    const {usuario, actividad, fecha, hora, descripcion} = actividadObj;

    //Validacion de datos
    if (usuario === '' || actividad === '' || fecha === '' || hora === '' || descripcion === ''){
        console.log ('Todos los campos son obligatorios');
        return;
    }

}
