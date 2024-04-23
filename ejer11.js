var palabra=['r','u','f','u','s']
let contadorletr = {};
    for (var i = 0; i < palabra.length; i++) {
      var letra = palabra[i];
  
      if (contadorletr[letra]) {

        contadorletr[letra]++;
      } else {

        contadorletr[letra] = 1;
      }
    }
    console.log("Letras distintas y sus repeticiones:");
    for (var letra in contadorletr) {
      console.log(letra + " = " + contadorletr[letra]);
    }