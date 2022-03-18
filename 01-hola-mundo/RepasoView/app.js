let usuarios = [
    {
        id: 1,
        nombre: 'Cristian'
    },
    {
        id: 2,
        nombre: 'Anderson'
    },
    {
        id: 3,
        nombre: 'Estefania'
    }
];

let paises = [
    {
        id: 1,
        nombre: 'Colombia'
    },
    {
        id: 2,
        nombre: 'Venezuela'
    }
];

const getUsuario = (id) => {
    return new Promise((resolve, reject) => {
        const usuario = usuarios.find(element => element.id === id);

        if (usuario) {
            resolve(usuario.nombre);
        } else {
            reject(`No se encontro el usuario con el id ${id}`);
        }
    })
}

const getCiudad = (id) => {
    return new Promise((resolve, reject) => {
        const pais = paises.find(element => element.id === id);
        if (pais) {
            resolve(pais.nombre);
        } else {
            reject(`No se encontro el pais del id ${id}`);
        }
    })
}

const getInfoUsuario = async (id) => {
    try {
        const usuario = await getUsuario(id);
        const pais = await getCiudad(id);
        return `El usuario ${usuario} vive en el país de ${pais}`;

    } catch (error) {
        return error;
    }
}

getInfoUsuario(1)
    .then(infoUsuario => console.log(infoUsuario))
    .catch(err => console.log(err));