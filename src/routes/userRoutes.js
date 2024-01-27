const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');
const authMiddleware = require('../middleware/authMiddleware.js');

router.get('/user/:userId', authMiddleware, userController.getUserById);
router.get('/users', authMiddleware, userController.getAllUsers);
router.post('/register', userController.register);

module.exports = router;