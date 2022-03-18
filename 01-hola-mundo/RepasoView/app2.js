const usuarios = [
    {
        id: 1,
        nombre: 'Cristian',
        apellido: 'Grisales',
        edad: 19,
        pais: 1
    },
    {
        id: 2,
        nombre: 'Fernando',
        apellido: 'Venitez',
        edad: 19,
        pais: 2
    },
    {
        id: 3,
        nombre: 'Anderson',
        apellido: 'Gomez',
        edad: 19
    }
];

const paises = [
    {
        id: 1,
        nombre: 'Colombia'
    },
    {
        id: 2,
        nombre: 'Chile'
    },
    {
        id: 3,
        nombre: 'Argentina'
    }
];

const getUsuario = (idUsuario) => {
    return new Promise((resolve, reject) => {
        const usuario = usuarios.find(element => element.id == idUsuario);
        if (usuario) {
            resolve(usuario);
        }
        reject(`No se encontro el usuario con id ${idUsuario}`);
    })
}

const getPais = (idPais = 0) => {
    return new Promise((resolve, reject) => {
        const pais = paises.find(element => element.id == idPais);
        if (pais) {
            resolve(pais);
        }
        reject(`No se encontro el pais del usuario`);
    })
}

const getInfoUsuario = async (idUsuario) => {
    try {
        const usuario = await getUsuario(idUsuario);
        const pais = await getPais(usuario.pais);
        return `El usuario ${usuario.nombre} ${usuario.apellido} vive en el pais de ${pais.nombre}`;

    } catch (error) {
        return error;
    }
}

getInfoUsuario(3)
    .then(response => console.log(response))
    .catch(error => console.log(error));