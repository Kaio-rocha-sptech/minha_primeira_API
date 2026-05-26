

const users = [
    {
        id: 1,
        nome: 'Kaio'
    },
    {
        id: 2,
        nome: 'teste'
    }
]

function getAllUsers() {
    return users
}

function getUserById(id){
    return users.find(user => user.id == Number(id))
}

function createUser(id, nome){
    var newUser = {
        id: id,
        nome: nome
    };
    users.push(newUser);
}

function updateUser(id, nome){
    for(let i = 0; i < users.length; i++){
        if(users[i].id == id){
            users[i].nome = nome;
            return users[i];
        }
    }
    return null;
}

function deletarUsuario(id){
    for(let i = 0; i < users.length; i++){
        if(users[i].id == id){
            let user = users[i];
            users.splice(i);
            return user;
        }
    }
    return null;
}

async function buscarUsuarios(id1, id2) {

    var user1 = getUserById(id1);
    var user2 = getUserById(id2);

    console.log(user1);
    console.log(user2);

    return await Promise.all([user1, user2]);
}


module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deletarUsuario,
    buscarUsuarios
}