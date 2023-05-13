const express = require('express');
const router = express.Router();

const userController = require('../controllers/UserController');

// Sempre que alguem bater no endpoint / vai direcionar pro arquivo UserController na função getUsers()
router.get("/", userController.lerUsuarios);
router.get('/:id', userController.lerUmUsuario);
router.post("/", userController.inserirUsuario);
router.put("/:id", userController.atualizarUsuario);
router.delete("/:id", userController.removerUsuario);


module.exports = router;




