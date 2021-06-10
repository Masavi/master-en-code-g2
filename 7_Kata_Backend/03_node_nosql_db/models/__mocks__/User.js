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

function findByIdAndUpdate(id, body, options) {
    const fakeUser = {
        "_id": "60bed2fc7361601a4c78f6ff",
        "role":"GUEST",
        "profile_pic":"http://localhost/uploads\\1623118588139_clouds.jpeg",
        "is_active":true,
        "first_name":"Pepito",
        "last_name":"Jimenez",
        "email":"pepito@gmail.com",
        "posts":[],
        "created_at":{"$date":"2021-06-08T02:16:28.158Z"},
        "updated_at":{"$date":"2021-06-08T02:16:28.158Z"},
        "__v":0
    }

    return new Promise((resolve, reject) => {
        if (id === fakeUser._id) {
            fakeUser.first_name = body.first_name;
            resolve(fakeUser);
        }
        throw new Error('User not found');
    });
}

User.create = create;
User.findByIdAndUpdate = findByIdAndUpdate;

module.exports = { User };
