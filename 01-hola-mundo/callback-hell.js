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

const id = 5;

const getEmpleado = (id, callback) => {
    const empleado = empleados.find(element => element.id === id);
    const res = empleado ? empleado.nombre : `Empleado con id ${id} no existe`;
    callback(false, res);
    return res;
}

const getSalario = (id, callback) => {
    const salarioEmpleado = salarios.find(element => element.id == id)?.salario;
    if (salarioEmpleado) {
        callback(null, salarioEmpleado);
    } else {
        callback(`No se encontro el salario para el id ${id}`);
    }

}

getEmpleado(id, (err, empleado) => {
    if (err) {
        console.log('ERROR');
        return console.log(err);
    }

    getSalario(id, (err, salarioEmpleado) => {
        if (err) {
            console.log('El empleado no tiene salario');
            return console.log(err);
        }

        console.log(`El empleado: ${empleado} tiene un salario de ${salarioEmpleado}`);
    });
});

