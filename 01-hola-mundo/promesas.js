const empleados = [
    {
        nombre: 'Cristian',
        id: 1,
    },
    {
        nombre: 'Fernando',
        id: 2,
    },
    {
        nombre: 'Anderson',
        id: 3,
    }
];

const salarios = [
    {
        salario: 1000,
        id: 1,
    },
    {
        salario: 1500,
        id: 2,
    }
];

const getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        const empleado = empleados.find(element => element.id === id);
        empleado ? resolve(empleado.nombre) : reject(`No existe el empleado con id ${id}`)
    })
}

const getSalario = (id) => {
    return new Promise((resolve, reject) => {
        const salarioEmpleado = salarios.find(element => element.id === id)
        salarioEmpleado ? resolve(salarioEmpleado.salario) : reject(`No se ha encontrado el salario del id ${id}`);
    })
}

const id = 3;

// getEmpleado(id)
//     .then(empleado => {
//         getSalario(id)
//             .then(salario => {
//                 console.log(`El empleado ${empleado}, tiene un salario de ${salario}`);
//             })
//             .catch(err => console.log(err))
//     })
//     .catch(err => console.log(err))

let nombre;

getEmpleado(id)
    .then(empleado => {
        nombre = empleado;
        return getSalario(id)
    })
    .then(salario => console.log(`El salario de ${nombre} es de ${salario}`))
    .catch(error => {
        console.log(error);
    });

const getInfoUsuario = async () => {
    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        return `El salario del empleado ${empleado} es de ${salario}`;

    } catch (error) {
        return error;
    }
}

getInfoUsuario()
    .then(msg => console.log(msg))
    .catch(error => console.log(error))