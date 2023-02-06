//variables

const marca = document.querySelector('#marca');
const year = document.querySelector('#year');

const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');


// contenedor de resultados
const resultado = document.querySelector('#resultado');



//crear año
const max = new Date().getFullYear();
const min = max - 10;









// generar datos de la busqueda
const datosBusqueda = {
    marca: "",
    year: "",
    minimo: "",
    maximo: "",
    puertas: "",
    transmision: "",
    color: "",
}


//eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos);// muestra los autos al cargar
    

    //llenar las opciones del año
    llenarSelect()
})
// eventos de busqueda

marca.addEventListener('change', e =>{
    console.log(datosBusqueda)

    datosBusqueda.marca = e.target.value

    filtrarAuto();
    
});


year.addEventListener('change', e =>{

    datosBusqueda.year = parseInt(e.target.value)
    console.log(datosBusqueda)

    filtrarAuto();

});
minimo.addEventListener('change', e =>{

    datosBusqueda.minimo = e.target.value
    console.log(datosBusqueda)
    filtrarAuto();



});
maximo.addEventListener('change', e =>{

    datosBusqueda.maximo = e.target.value
    console.log(datosBusqueda)
    filtrarAuto();



});
puertas.addEventListener('change', e =>{

    datosBusqueda.puertas = parseInt(e.target.value)
    console.log(datosBusqueda)
    filtrarAuto();



});
transmision.addEventListener('change', e =>{

    datosBusqueda.transmision = e.target.value
    //console.log(datosBusqueda)
    filtrarAuto();



});
color.addEventListener('change', e =>{

    datosBusqueda.color = e.target.value
    //console.log(datosBusqueda)
    filtrarAuto();



});


//funciones
function mostrarAutos(autos) {
    limpiarHTML(); //elimiar html previo



    autos.forEach (auto => {
        const {marca, modelo, year, puertas, transmision, precio, color} = auto;
        const autoHTML = document.createElement('p');
        

        autoHTML.textContent = `
          ${marca}   ${modelo} ${year} - ${puertas} puertas - transmision: ${transmision} - precio: ${precio} - color: ${color}
        
        `;

        //insetar en html
        resultado.appendChild(autoHTML)
    });
}

//funtion limpiar html

function limpiarHTML(){
    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }

}
//generar los años del select
function llenarSelect() {

    for (let i = max; i >= min; i--){

        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);


    }


   
}

//funcion para filtrar auto
function filtrarAuto(){
    //console.log('filtrando')

    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas) 
    .filter(filtrarTransmision).filter(filtrarcolor)



    console.log(resultado)




    if(resultado.length) {
        mostrarAutos(resultado);

        
    }else{
        noResultado()
        
    }


}

function noResultado(){

    limpiarHTML()

    const  noResultado = document.createElement('p')
    noResultado.classList.add('alert', 'error');
    noResultado.textContent = 'No hay resultados de esta busqueda filtrada'
    resultado.appendChild(noResultado)

}

function filtrarMarca(auto) {
    const {marca} = datosBusqueda;
    if (marca){
        return auto.marca === marca;
    }
    return auto;
}

function filtrarYear(auto) {
    const {year} = datosBusqueda;
    
    if (year){
        return auto.year === year;
    }
    return auto;

}
function filtrarMinimo(auto) {
    const {minimo} = datosBusqueda;
    
    if (minimo){
        return auto.precio >= minimo;
    }
    return auto;

}
function filtrarMaximo(auto) {
    const {maximo} = datosBusqueda;
    
    if (maximo){
        return auto.precio <= maximo;
    }
    return auto;

}

function filtrarPuertas(auto) {
    const {puertas} = datosBusqueda;
    
    if (puertas){
        return auto.puertas === puertas;
    }
    return auto;

}

function filtrarTransmision(auto) {
    const {transmision} = datosBusqueda;
    
    if (transmision){
        return auto.transmision === transmision;
    }
    return auto;

}

function filtrarcolor(auto) {
    const {color} = datosBusqueda;
    
    if (color){
        return auto.color === color;
    }
    return auto;

}


