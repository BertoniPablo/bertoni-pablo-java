let personas = [
    { nombre: "Marta", sexo: "femenino", edad: 36 },
    { nombre: "Federico", sexo: "masculino", edad: 28 },
    { nombre: "Valentina", sexo: "femenino", edad: 45 },
    { nombre: "Mauricio", sexo: "masculino", edad: 38 },
];

function calcularPromedio(listaPersonas) {
    let totalEdad = 0;
    listaPersonas.forEach(persona => {
        totalEdad += persona.edad;
    });
    return totalEdad / listaPersonas.length;
}

function nombreMujerMayor(listaPersonas) {
    let mayorEdad = 0;
    let nombreMujerMayor = "";
    listaPersonas.forEach(persona => {
        if (persona.sexo === "femenino" && persona.edad > mayorEdad) {
            mayorEdad = persona.edad;
            nombreMujerMayor = persona.nombre;
        }
    });
    return nombreMujerMayor;
}

function nombreHombreMenor(listaPersonas) {
    let menorEdad = Infinity;
    let nombreHombreMenor = "";
    listaPersonas.forEach(persona => {
        if (persona.sexo === "masculino" && persona.edad < menorEdad) {
            menorEdad = persona.edad;
            nombreHombreMenor = persona.nombre;
        }
    });
    return nombreHombreMenor;
}

function promedioEdadM(listaPersonas) {
    let totalEdadM = 0;
    let cantidadM = 0;
    listaPersonas.forEach(persona => {
        if (persona.sexo === "femenino") {
            totalEdadM += persona.edad;
            cantidadM++;
        }
    });
    return totalEdadM / cantidadM;
}

let edadtotal = calcularPromedio(personas);

let mayormujer = nombreMujerMayor(personas);

let menorhombre = nombreHombreMenor(personas);

let promedadesmujeres = promedioEdadM(personas);

console.log("Promedio de las edades:", edadtotal);
console.log("mujer con menor edad:", mayormujer);
console.log("hombre con menor edad:", menorhombre);
console.log("promedio de las edades de las mujeres:", promedadesmujeres);