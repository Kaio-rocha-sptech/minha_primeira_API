const userModel = require("../models/userModel");

function getUsers(erq, res) {
  const users = userModel.getAllUsers();
  res.json(users);
}

function getUserById(req, res) {
  const id = req.query.id;
  const user = userModel.getUserById(id);
  res.json(user);
}

function createUser(req, res) {
  id = req.body.id;
  nome = req.body.nome;
  userModel.createUser(id, nome);
  res.json({
    message: "Usuario criado com sucesso!",
  });
}

function updateUser(req, res) {
  var id = req.body.id;
  var nome = req.body.nome;

  var usuarioAtualizado = userModel.updateUser(id, nome);

  if (!usuarioAtualizado) {
    return res.status(404).json({
      message: "Usuario não encontrado",
    });
  }

  res.json({
    message: "Usuario editado com sucesso!",
    user: usuarioAtualizado,
  });
}

function deletarUsuario(req, res) {
  var id = req.body.id;
  usuarioDeletado = userModel.deletarUsuario(id);

  if (!usuarioDeletado) {
    return res.json({
      message: "Usuario nao encontado!",
    });
  }

  res.json({
    message: `Usuario ${usuarioDeletado.nome} deletado com sucesso!`,
  });
}

async function buscarUsuarios(req, res) {
  var id1 = req.query.id1;
  var id2 = req.query.id2;
  console.log(`${id1}, ${id2}`);
  var usuarios = await userModel.buscarUsuarios(id1, id2);
  res.json({
    message: "Os dois usuarios selecionados são:",
    users: usuarios,
  });
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deletarUsuario,
  buscarUsuarios,
};
