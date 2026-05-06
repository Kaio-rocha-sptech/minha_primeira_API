
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


module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deletarUsuario
}