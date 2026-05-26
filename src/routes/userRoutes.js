const express = require('express')

const router = express.Router()

const userController = require("../controllers/userController")

router.get('/', userController.getUsers)

router.get('/buscarUsuarios', userController.buscarUsuarios)

router.post('/create', userController.createUser)

router.delete('/delete', userController.deletarUsuario)

router.put('/update', userController.updateUser)

router.get('/TesteRotaUsuario', (req, res) => {
    res.json({
        message: 'Rota de usuários funcionando'
    })
})

router.get('/id', userController.getUserById)

module.exports = router