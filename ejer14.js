const minimo = 1;
const maximo = 50;
const divisor = 2;
const resultado = obtenerD(minimo, maximo, divisor);
console.log("Divisores de ", divisor, "en rango de", minimo, "al", maximo, ":", resultado);
function obtenerD(minimo, maximo, divisor) {
    let divisores = [];
    for (let i = minimo; i <= maximo; i++) {
      if (i % divisor === 0) {
        divisores[divisores.length]=i;
      }
    }
   return divisores; 
  }