// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  var r;
  r = array[0];
  return r;
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  var r;
  var len;
  len = array.length;
  r = array[len-1];
  return r;
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  var r;
  r = array.length;
  return r;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var len;
  len = array.length;
  for(var i=0;i<len;i++)
  {
    array[i]++;
  }
  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var r;
  var len;
  len = palabras.length;
  r = palabras[0];
  for(var i = 1;i<len;i++)
  {
     r += " " + palabras[i];
  }
  return r;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  var r;
  var len;
  r = false;
  len = array.length;
  for(var i = 0;i<len;i++)
  {
    if(array[i]==elemento)
    {
      r = true;
      break;
    }
  }
  return r;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var r;
  var len;
  r = 0;
  len = numeros.length;
  for(var i = 0;i<len;i++)
  {
    r += numeros[i];
  }
  return r;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var r;
  var len;
  var promedio;
  r = 0;
  len = resultadosTest.length;
  for(var i = 0;i<len;i++)
  {
    r+=resultadosTest[i];
  }
  promedio = r/(len);
  return promedio;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var r;
  var flag;
  var len;
  flag = 0;
  len = numeros.length;
  for(var i = 0;i<len;i++)
  {
    if(flag==0)
    {
      r = numeros[i];
      flag = 1;
    }
    else
    {
      if(numeros[i]>r)
      {
        r = numeros[i];
      }
    }
  }
  return r;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var r;
  var len;
  var producto;
  len = arguments.length;
  producto = 1;
  if(len == 0)
  {
    r = 0;
  }
  else
  {
    if(len==1)
    {
      r = arguments[0];
    }
    else
    {
      for(var i = 0;i<len;i++)
      {
        producto *=arguments[i];
      } 
      r = producto;
    }
  }
  
  return r;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var r;
  var len;
  r = 0;
  len = arreglo.length;
  for(var i = 0;i<len;i++)
  {
    if(arreglo[i]>18)
    {
      r++;
    }
  }
  return r;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  var r;
  r = "Es dia Laboral";
  if(numeroDeDia==7 || numeroDeDia==1)
  {
    r = "Es fin de semana";
  }
  return r;
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var r;
  var cadena;
  cadena = String(n);
  r = false;
  if(cadena[0]=="9")
  {
    r = true;
  }
  return r;
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var r;
  var len;
  len = arreglo.length;
  for(var i = 0;i<len;i++)
  {
    for(var j = 0;j<len-1;j++)
    {
      if(arreglo[i]==arreglo[j])
      {
        r = true;
      }
      else
      {
        r = false; 
        break;
      }
    }
  }
  return r;
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var r = [];
  var len;
  len = array.length;
  for(var i = 0;i<len;i++)
  {
    if(array[i]=="Enero" || array[i]=="Marzo" || array[i]=="Noviembre")
    {
      r.push(array[i]);
    }
  }
  if(r.length!=3)
  {
    r = "No se encontraron los meses pedidos";
  }
  return r;
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var r = [];
  var len;
  len = array.length;
  for(var i = 0;i<len;i++)
  {
    if(array[i]>100)
    {
      r.push(array[i]);
    }
  }
  return r;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var r = [];
  var i;
  i=0;
  while(i<10)
  {   
    r.push(numero+=2);
    if((numero+2)==i)
    {
      r = "Se interrumpió la ejecución";
      break;
    }
    i++;
  }
  return r;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var r = [];
  var i;
  for(var i = 0;i<10;i++)
  {      
    if(i==5)
    {
    	continue;    
    }
    r.push(numero+=2);
  }
  return r;
}


// No modificar nada debajo de esta línea
// --------------------------------

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
  mayorACien,
  breakStatement,
  continueStatement
};
