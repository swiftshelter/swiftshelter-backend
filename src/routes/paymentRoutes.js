const express = require('express');
const paymentController = require('../controllers/paymentController');

const router = express.Router();

router.post('/', paymentController.makePayment);
router.put('/plan/:id', paymentController.updatePaymentPlan);

module.exports = router;
