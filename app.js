//Campos del formulario
const usuarioInput = document.querySelector('#usuario');
const actividadInput = document.querySelector('#actividad');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const descripcionInput = document.querySelector('#descripcion');

//Interfaz de usuario
const formulario = document.querySelector ('#nueva-actividad');
const contenedorActividad = document.querySelector ('#actividad');

//Registrar eventos
eventListeners();
function eventListeners (){
    usuarioInput.addEventListener('input', datosActividad);
    actividadInput.addEventListener('input', datosActividad);
    fechaInput.addEventListener('input', datosActividad);
    horaInput.addEventListener('input', datosActividad);
    descripcionInput.addEventListener('input', datosActividad);

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