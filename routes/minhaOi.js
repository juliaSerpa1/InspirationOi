const express = require('express');

const MinhaOiController = require('../controllers/MinhaOiController');

const router = express.Router();

router.get('/minhaoi', MinhaOiController.index);
router.post('/minhaoi/pagar', MinhaOiController.pagar);

module.exports = router;