console.log('Inicio de programa');//1

setTimeout(() => {
    console.log('Primer TimeOut');//4
}, 3000);


setTimeout(() => {
    console.log('Segundo TimeOut');//2 
}, 0);


setTimeout(() => {
    console.log('Tercero TimeOut');//3
}, 0);

console.log('Fin de programa');//2