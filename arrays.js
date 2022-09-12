

class Entrega {
    constructor(id, zona, al, an, la) {
        this.id = id;
        this.zona = zona;
        this.al = al;
        this.an = an;
        this.la = la;
        this.volumen = (this.al * this.la * this.an) / 1000000
        this.pendiente = true;
    }
}
class Vehiculo {
    constructor(marca, modelo, al, an, la) {
        this.marca = marca;
        this.modelo = modelo;
        this.al = al;
        this.an = an;
        this.la = la;
    }
    calculoVolumen() {
        alert((this.al * this.la * this.an) / 1000000);
    }
}

let entregas = [
    new Entrega(1, 4, 100, 100, 100),
    new Entrega(2, 2, 10, 5, 100),
    new Entrega(3, 1, 100, 10, 20),
    new Entrega(4, 3, 10, 200, 100),
    new Entrega(5, 4, 150, 100, 10)
]

let vehiculo1 = new Vehiculo(`Renault`, `Kangoo`, 100, 105, 180)
let vehiculo2 = new Vehiculo(`Mercedes`, `Sprinter`, 170, 165, 330)

function eleccionZona() {
    zona = Number(
        prompt(`Ingrese una zona de entrega:
    1: CABA
    2: NORTE
    3: SUR
    4: OESTE
    `));
    if (zona != 1 && zona != 2 && zona != 3 && zona != 4) {
        do {
            zona = Number(prompt(`Ingrese una zona de entrega:
    1: CABA
    2: NORTE
    3: SUR
    4: OESTE
    `))
        }
        while (zona != 1 && zona != 2 && zona != 3 && zona != 4)
        return zona
    }
    else {
        return zona
    }
}

function eleccionFuncion() {
    eleccion = confirm(`¿Desea crear una nueva entrega?`);

    if (eleccion == true) {
        entregas.push(new Entrega(this.id = (entregas.length + 1), this.zona = eleccionZona(), this.al = Number(prompt(`Ingrese la Altura en centímetros`)), this.an = Number(prompt(`Ingrese el Ancho en centímetros`)), this.la = Number(prompt(`Ingrese el Largo en centímetros`)),));
        eleccionFuncion()
    } else {
        const volumenTotal = entregas.reduce((acc,el) => acc + el.volumen, 0)
alert(`El volumen total de las entregas pendientes es de ${volumenTotal.toFixed(2)} M3`)

    }
}

function main() {
    eleccionFuncion();
}

main()



