const express = require('express');
const UsersController = require('../controllers/Users.Controller');
const router = express.Router();

//Criar Usuário
router.post('/', UsersController.createUser);
//Listar Todos os usuários
router.get('/',UsersController.getAllUsers);
//Buscar um usuário
router.get('/:id',UsersController.getUserById);
//Atualizar um usuário
router.put('/:id',UsersController.updateUser);
//Deletar um usuário
router.delete('/:id',UsersController.deleteUser);


module.exports = router;