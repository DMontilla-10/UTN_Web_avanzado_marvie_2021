/**Console */

// console.log('Mi nombre es Daniel')

// console.warn('Error', ['Falta una variable'])

// console.table({nombre: 'Daniel', apellido: 'Montilla'})

/**VARIABLES */
//let, const, var

//Variable de uso global
// var nombre = 'Daniel'

//Variable dentro un scoope
// let nombre = 'Daniel'

//Variable donde el valor no cambia
// const nombre = 'Daniel'


/**FUNCIONES */

// function miPrimeraFuncion() {
//     console.log('Función con palabra reservada function')
//     return 2
// }

// let unNumero = miPrimeraFuncion()
// console.log(unNumero)
// miPrimeraFuncion()

// const miSegundaFuncion = () => {
//     console.log('Función de tipo flecha')
// }

// miSegundaFuncion()

/**CONDICIONALES */

/**if */
// const menorDeEdad = (numero) => {
//     if(numero < 18) {
//         console.log('Es adolescente')
//     } else if(numero => 18 && numero < 65){
//         console.log('Es adulto')
//     } else {
//         console.log('Es un adulto mayor')
//     }
// }

// menorDeEdad(18)

/**switch */

// function dondeVive(domicilio) {
//     switch (domicilio) {
//         case 'Nuñez':
//             console.log('Vive en capital')
//             break;
//         case 'Palermo':
//             console.log('Vive en capital')
//             break;
//         case 'Malvinas':
//             console.log('Vive en provincia')
//             break;
//         default:
//             console.log('No vive en Bs As')
//             break;
//     }
// }

// dondeVive('Nuñez')

/**ternary */
// const esMayor = (numero) => {
//     console.log(numero > 18 ? true : false)
// }

// esMayor(11)

/**BUCLES */
/**for */

// function contarHasta10() {
//     for (let index = 1; index < 11; index++) {
//         console.log(index)
//     }
// }

// contarHasta10()

/**ARRAY */
//Se escriben entre corchetes []
// const numeros = [2,5,8,3,9]

// console.log(miPrimerArray.length)

/**Bucle con arrays */
/**for each */
// numeros.forEach(numero => {
//     console.log(numero)
// });

/**Agregar elementos al final de un array */
// console.log('Antes del push(): ', numeros)
// numeros.push(7)
// console.log('Después del push(): ', numeros)

/**Eliminar elementos de un array */
// console.log('Antes del pop(): ', numeros)
// numeros.pop()
// console.log('Después del pop(): ', numeros)

/**MAP */
// numeros.map(numero => {
//     console.log(numero + 1)
// })

/**REDUCE */
const numeros = [2,5,8,3,9]

// console.log(numeros.reduce((acumulador, valorActual) => {
//     return acumulador + valorActual
// }))

/**FILTER */
// const unArrayFiltrado = numeros.filter(numero => numero > 5)
// console.log(unArrayFiltrado)

/**INCLUDE */
// console.log(numeros.includes(3))

/**OBJETOS */
//Se escriben entre llaves {}
// const miAuto = new Object()

// miAuto.color = 'Rojo'

const miAuto = {
    color: 'Rojo',
    marca: 'Chevrolet',
    modelo: 'Onix',
    año: '2015'
}

// console.log(miAuto.año)
// console.log(miAuto['año'])

/**for...in */
for (const key in miAuto) {
    console.log(`${key}: ${miAuto[key]}`)    
}

// const edad = 28
// const mensaje = ('Daniel tiene ' + edad + ' años')

// console.log('Daniel tiene ' + edad + ' años')  
// console.log('Daniel tiene ' , edad , ' años')   

/**String literal */
// console.log(`Daniel tiene ${edad} años`)