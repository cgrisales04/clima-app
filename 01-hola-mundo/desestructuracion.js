const deadpool = {
    apellido: 'Winston',
    nombre: 'Wade',
    poder: 'Regeneracion',
    getNombre() {
        return `${nombre} ${apellido}`
    }
}

function imprimirHeroe({nombre, apellido}) {
    return {
        nombre,
        apellido
    }
}

const heroe = imprimirHeroe(deadpool);
// console.log(heroe);

const { nombre, apellido, getNombre } = deadpool;
// console.log(nombre, apellido, getNombre());

const heroes = ['Deadpool', 'IronMan', 'Spider-man'];
const [,,h3] = heroes;
console.log(h3);