const { User } = jest.genMockFromModule('../User.js');

function create(body) {
    // Debe retornar una promesa, que si es exitosa
    // devuelve un objeto "user", si no es exitosa
    // devuelve un error y truena la promesa
    const newUser = {
        ...body,
        _id: '5asdjasd51kads51123',
        is_active: true,
        role: 'GUEST',
    }

    return new Promise((resolve, reject) => {
        if (body.email === 'krystel@gmail.com') {
            resolve(newUser);
        } else if(body.email === 'maui@devf.mx') {
            throw new Error('Duplication error');
        }
        throw new Error('Database error');
    });
}

User.create = create;

module.exports = { User };
