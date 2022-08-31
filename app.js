//Declaro las funciones como globales
let zona;
let an_ent;
let al_ent;
let la_ent;
let volumen_ent;
let an_veh;
let al_veh;
let la_veh;
let vehiculo;
let volumen_veh;

//Pide los datos de la entrega

function datosEntrega() {
    //La zona es irrelevante pero lo puse pensando en un futuro
    zona = Number(
        prompt(`Ingrese una zona de entrega:
    1: CABA
    2: NORTE
    3: SUR
    4: OESTE
    `)
    );

    if (zona != 1 && zona != 2 && zona != 3 && zona != 4) {
        let seleccionZona = confirm(
            "La zona no es válida, ¿desea elegir una nueva zona?"
        );
        if (seleccionZona == true) {
            datosEntrega();
        } else {
            alert("fin del proceso");
        }
    }
}

function medidasEntrega() {
    an_ent = Number(prompt("Ingrese el ancho en cm."));
    al_ent = Number(prompt("Ingrese el alto en cm."));
    la_ent = Number(prompt("Ingrese el largo en cm."));
}

function calculoVolumen() {
    volumen_ent = an_ent * al_ent * la_ent;
    alert(`El volumen es de ${volumen_ent / 1000000} Mt.3`);
}

//Permite elegir el vehículo a cargar
function eleccionVehiculo() {
    vehiculo = Number(
        prompt(`Seleccione el vehículo:
    1: RN KANGOO
    2: MZ SPRINTER
    `)
    );
    if (vehiculo == 1) {
        an_veh = 105;
        al_veh = 100;
        la_veh = 180;
    } else if (vehiculo == 2) {
        an_veh = 165;
        al_veh = 170;
        la_veh = 330;
    } else {
        alert("Ingrese un vehículo válido");
        eleccionVehiculo();
    }
}

//Compara el volumen de la entrega con el volumen del vehículo seleccionado, si es menor, llama a la función medidas, si no avisa y da la posibilidad de elegir otro vehículo

function carga() {
    volumen_veh = an_veh * al_veh * la_veh;
    if (volumen_ent <= volumen_veh) {
        medidas();
    } else {
        let otroVehiculo = confirm(
            "El volumen es insuficiente, ¿desea elegir otro vehículo?"
        );
        if (otroVehiculo == true) {
            eleccionVehiculo();
            carga();
        }
    }
}

//Compara medida por medida para asegurarse de que entre la carga, si no advierte y da la posibilidad de elegir otro vehículo
function medidas() {
    if (la_ent <= la_veh && al_ent <= al_veh && an_ent <= an_veh) {
        alert("La carga entra en el vehículo elegido");
    } else {
        let otroVehiculo = confirm(
            "El volumen es insuficiente, ¿desea elegir otro vehículo?"
        );
        if (otroVehiculo == true) {
            eleccionVehiculo();
            carga();
        }
    }
}

//Compilé en una solo función a todas las funciones y la llamé al final
function total() {
    datosEntrega();

    medidasEntrega();

    calculoVolumen();

    eleccionVehiculo();

    carga();
}

total();