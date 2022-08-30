//Declaro las funciones como globales
let zona
let an_ent
let al_ent
let la_ent
let volumen_ent
let an_veh
let al_veh
let la_veh
let vehiculo
let volumen_veh

//1° función - pide los datos de la entrega 

function datosEntrega () {
    zona = Number(prompt(`Ingrese una zona de entrega:
    1: CABA
    2: NORTE
    3: SUR
    4: OESTE
    `));

//Ver como definir el if para que no permita salir hasta que no se ingrese un valor válido
    if (zona != 1 && zona != 2 && zona != 3 && zona && 4) {
    alert("Ingrese una zona válida");
    zona = Number(prompt(`Ingrese una zona de entrega:
    1: CABA
    2: NORTE
    3: SUR
    4: OESTE
    `));
    }
    an_ent = Number(prompt("Ingrese una medida en cm."));
    al_ent = Number(prompt("Ingrese una medida en cm."));
    la_ent = Number(prompt("Ingrese una medida en cm."));
    }

//2° función - calcula el volumen de la entrega cargada
function calculoVolumen () {
    volumen_ent = an_ent * al_ent * la_ent
    alert(`El volumen es de ${volumen_ent/1000000} Mt.3`)
}

//3° funcion - permite elegir el vehículo a cargar
function eleccionVehiculo () {
    vehiculo = Number(prompt(`Seleccione el vehículo:
    1: RN KANGOO
    2: MZ SPRINTER
    `));
//Ver como me aseguro de que ingrese un valor válido
    if (vehiculo == 1) {
        an_veh = 105
        al_veh = 100
        la_veh = 180
    } else if (vehiculo ==2) {
        an_veh = 165
        al_veh = 170
        la_veh = 330
    } else {
        alert("Ingrese un vehículo válido");
    };
};

//4° función - compara el volumen de la entrega con el volumen del vehículo seleccionado, si es menor, llama a la función medidas, si no avisa y da la posibilidad de elegir otro vehículo

function carga () {
    volumen_veh = an_veh * al_veh * la_veh;
    if(volumen_ent <= volumen_veh) {
        medidas ()
    } else {
    let otroVehiculo = confirm("El volumen es insuficiente, ¿desea elegir otro vehículo?")

    if (otroVehiculo == true) {
        eleccionVehiculo ();
        carga ();
    }
    }
}

//5° función - compara medida por medida para asegurarse de que entre la carga
function medidas (){
    if(la_ent<=la_veh && al_ent<=al_veh && an_ent<=an_veh){
    alert("La carga entra en el vehículo elegido")
    } else {
        let otroVehiculo = confirm("El volumen es insuficiente, ¿desea elegir otro vehículo?")
        if (otroVehiculo == true) {
            eleccionVehiculo ();
            carga ();
        }
}
}



function total () {

    datosEntrega ()

    calculoVolumen ()

    eleccionVehiculo ()

    carga ()
}

total ()



