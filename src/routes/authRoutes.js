const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const userController = require('../controllers/userController.js');
const authController = require('../controllers/authController.js');

router.post(
  '/login',
  [
    body('username').notEmpty().withMessage('O nome de usuário é obrigatório'),
    body('password').notEmpty().withMessage('A senha é obrigatória')
  ],
  authController.login
);

module.exports = router;
