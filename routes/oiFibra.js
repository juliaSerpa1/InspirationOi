const express = require('express');

const OiFibraController = require('../controllers/OiFibraController');

const router = express.Router();

router.get('/oifibra', OiFibraController.index);
router.post('/oifibra/contratar', OiFibraController.contratar);

module.exports = router;