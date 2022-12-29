//Campos del formulario
const usuarioInput = document.querySelector('#usuario');
const actividadInput = document.querySelector('#actividad');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const descripcionInput = document.querySelector('#descripcion');

//Interfaz de usuario
const formulario = document.querySelector ('#nueva-actividad');
const contenedorActividad = document.querySelector ('#administra');

class Actividad {
    constructor (){
        this.actividad = []
    }

    agregarActividad (actividad) {
        this.actividad = [...this.actividad, actividad];

        console.log(this.actividad);
    }

    eliminarActividad(id){
        this.actividad = this.actividad.filter ( actividad => actividad.id !== id)
    }

}

class UI {
    imprimirAlerta(mensaje, tipo) {
        //Crear el div
        const divMensaje = document.createElement ('div');
        divMensaje.classList.add ('text-center', 'alert', 'd-block', 'col-12');       

        //Agrega clase en base al tipo de error
        if(tipo === 'error'){
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alert-success');
        }

        //Mensaje error

        divMensaje.textContent = mensaje;

        //Agregar al DOM
        document.querySelector('#contenido').insertBefore(divMensaje, document.querySelector('.agregar-actividad'));

        //Quitar alerta despues de 5s

        setTimeout ( () => {
            divMensaje.remove();
        }, 5000);
    }

        imprimirActividad({actividad}) {

            this.limpiarHTML();

            actividad.forEach( function (actividades) {
                    const { usuario, actividad, fecha, hora, descripcion, id } = actividades;

                    const divActividades = document.createElement('div');
                    divActividades.classList.add('actividad', 'p-3');
                    divActividades.dataset.id = id;

                    const usuarioParrafo = document.createElement('h2');
                    usuarioParrafo.classList.add('card-title', 'font-weight-bolder');
                    usuarioParrafo.textContent = usuario;

                    const actividadParrafo = document.createElement ('p');
                    actividadParrafo.innerHTML = `
                        <span class="font-weight-bolder">Actividad: </span> ${actividad}
                    `;

                    const fechaParrafo = document.createElement ('p');
                    fechaParrafo.innerHTML = `
                        <span class="font-weight-bolder">Fecha: </span> ${fecha}
                    `;

                    
                    const horaParrafo = document.createElement ('p');
                    horaParrafo.innerHTML = `
                        <span class="font-weight-bolder">Hora: </span> ${hora}
                    `;

                    const descripcionParrafo = document.createElement ('p');
                    descripcionParrafo.innerHTML = `
                        <span class="font-weight-bolder">Descripcion: </span> ${descripcion}
                    `;

                    //Boton para eliminar cita
                    const btnEliminar = document.createElement('button');
                    btnEliminar.classList.add('btn', 'btn-danger', 'mr-2');
                    btnEliminar.innerHTML = 'Eliminar <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';

                    btnEliminar.onclick = () => eliminarCita(id);
                    
                    divActividades.appendChild(usuarioParrafo);
                    divActividades.appendChild(actividadParrafo);
                    divActividades.appendChild(fechaParrafo);
                    divActividades.appendChild(horaParrafo);
                    divActividades.appendChild(descripcionParrafo);
                    divActividades.appendChild(btnEliminar);

                    //Agrega las actividades al HTML
                    contenedorActividad.appendChild(divActividades);

                })
            
        }

        limpiarHTML (){
            while(contenedorActividad.firstChild) {
                contenedorActividad.removeChild(contenedorActividad.firstChild)
            }
        }

}

const administrarActividad = new Actividad ();
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
        ui.imprimirAlerta ('Todos los campos son obligatorios', 'error');
        return;
    }

    //Genera ID
    actividadObj.id = Date.now();

    //Crear actividad
    administrarActividad.agregarActividad({...actividadObj});
    reiniciarObjeto();
    formulario.reset();

    ui.imprimirActividad(administrarActividad);

}

function reiniciarObjeto (){
    actividadObj.usuario = "";
    actividadObj.actividad = "";
    actividadObj.fecha = "";
    actividadObj.hora = "";
    actividadObj.descripcion = "";
}

function eliminarCita(id){
    administrarActividad.eliminarActividad(id);

    ui.imprimirAlerta ('La actividad se eliminó correctamente');

    ui.imprimirActividad(administrarActividad);


}