let listaPersonas = [
    { nombre: "Marta", sexo: "femenino", edad: 36 },
    { nombre: "Federico", sexo: "masculino", edad: 28 },
    { nombre: "Valentina", sexo: "femenino", edad: 45 },
    { nombre: "Mauricio", sexo: "masculino", edad: 38 },
  ];

let edadeSuma = 0;
    for (let i = 0; i < listaPersonas.length; i++) {
        edadeSuma += listaPersonas[i].edad;
    }

let edadpromedio = edadeSuma / listaPersonas.length;

let mujeres = listaPersonas.filter(persona => persona.sexo === "femenino");
mujeres.sort((a, b) => b.edad - a.edad);

let noMujeresEdadMayor = mujeres[0].nombre;

let hombres = listaPersonas.filter(persona => persona.sexo === "masculino");
hombres.sort((a, b) => a.edad - b.edad);

let hombremenoredad = hombres[0].nombre;

let edadesM = mujeres.map(mujer => mujer.edad);
let sumaEdadeM = edadesM.reduce((a, b) => a + b, 0);

let promMujeres = sumaEdadeM / edadesM.length;

console.log("promedio de las edades:", edadpromedio)
console.log("mujer de mayor edad:", noMujeresEdadMayor)
console.log("hombre de menor edad:", hombremenoredad)
console.log("promedio de las edades de las mujeres:", promMujeres)