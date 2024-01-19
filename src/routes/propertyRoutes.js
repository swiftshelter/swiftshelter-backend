const express = require('express');
const propertyController = require('../controllers/propertyController');

const router = express.Router();

router.get('/', propertyController.listProperty);
router.put('/:id', propertyController.updateProperty);
router.post('/rate/:id', propertyController.rateProperty);

module.exports = router;


