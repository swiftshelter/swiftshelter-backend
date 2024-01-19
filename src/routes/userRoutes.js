const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/register', userController.register);
router.post('/login', userController.login);
router.put('/profile', userController.updateProfile);
router.post('/rate', userController.rateUser);

module.exports = router;
