const express = require('express');

const OiPlaceController = require('../controllers/OiPlaceController');

const router = express.Router();

router.get('/oiplace', OiPlaceController.index);
router.post('/oiplace/comprar', OiPlaceController.comprar);

module.exports = router;