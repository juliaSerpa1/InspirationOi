const express =require('express');

const OiPlayController = require('../controllers/OiPlayController');

const router = express.Router();

router.get('/oiplay', OiPlayController.index);