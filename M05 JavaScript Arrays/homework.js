/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[array.length - 1];
   
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length

}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var masUno = array.map( (num) => 
   { return num + 1 
   } );
   return masUno
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:

   array.unshift(elemento);
   return array;
   
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   var concatenadas = palabras.join(" ");
   return concatenadas;
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:

   var incluyeElemento = array.includes(elemento); 
   return incluyeElemento;
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:

   let total = 0;
   arrayOfNums.forEach (num =>  { 
      total += num 
      }) ;
   return (total);   
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   
   let total = 0;
   for (let i = 0; i < resultadosTest.length; i++) {
   total = total + resultadosTest[i];
}
return total / resultadosTest.length

}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   let max = Math.max(...arrayOfNums);  // (...arrayOfNums), significa que el parámetro arrayOfNums es un array, y los elementos del array se expandirán o propagarán como argumentos individuales dentro de la función, necesario porque Math.max() se usa es con valores separdos por comas y un arreglo son solo valores, los "..." lo transforma a valores separados por ,
   return max;
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:

   var arreglo = Array.from(arguments)  // convierta argumentos en array y asignelo a la la variable arreglo

    if(arreglo.length > 0) {
        let total = 1;
        arreglo.forEach (num =>  {       // al array si le puedo aplicar forEach 
           total *= num                // a cada numero multipliquelo por total y guardelo en num 
           }) ;
        return (total);   

    } else {
        return 0;
    }
 }


function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:

   
      let conteo = 0;
      for (let i = 0; i < array.length; i++) {     // recorra todo el arreglo
        if (array[i] > 18) {                       // si el elemento es mayor a 18
          conteo++;                                 // incremente conteo
        }
      }
      return conteo;
    }
 


function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
  if (numeroDeDia === 6 || numeroDeDia === 2 || numeroDeDia === 3 || numeroDeDia === 4 || numeroDeDia === 5 ) {
   return "Es dia laboral"
  } else if (numeroDeDia === 7 || numeroDeDia === 1) {
   return "Es fin de semana"
  } 
  } 
  


function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:

   var numString = num.toString().split("");
   var nueve = numString.filter(iterator => iterator[0] === '9');
   if (nueve[0] === '9') {
      return true;
    } else {
      return false;
}
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
      
      
   const primerElemento = array[0];
   return array.every(element => 
      element === primerElemento);

 }


function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:

   var tresMes = [];
   for(let i=0; i<array.length; i++){
      if(array[i]==='Enero' || array[i]==='Marzo' || array[i]==='Noviembre'){
      tresMes.push(array[i]);
      }
   }if(tresMes.length===3){
      return tresMes;
   }else{
      return "No se encontraron los meses pedidos";
   }
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
  
   let unoAlDies= [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let tablaDeMultiplicar = unoAlDies.map((num) => num * 6);
    return tablaDeMultiplicar;
  }


function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:

   var newArray = [];
   for (let i = 0; i < array.length; i++) {     // recorra todo el arreglo
     if (array[i] > 100) {                       // si el elemento es mayor a 100
       newArray.push(array[i]);                             
     }
   }
   return newArray;

}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:

   let sumaDos = [];
   for (let i = 0; i < 10; i++) {
     num += 2;
     sumaDos.push(num);
     if (num === i) {
       return "Se interrumpió la ejecución";
       break;
     }
   }
   return sumaDos;
 }



function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:

var array = [];
var suma = num;
for (var i = 0; i < 10 ; i++){
if ( i+1 === 5 ){
continue;
} else {
suma = suma + 2;
array.push(suma);
} }
return array;

 }
 



/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
