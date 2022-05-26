const express = require('express');

const MinhaOiController = require('../controllers/MinhaOiController');
const OiFibraController = require('../controllers/OiFibraController');
const OiPlaceController = require('../controllers/OiPlaceController');
const OiPlayController = require('../controllers/OiPlayController');

const router = express.Router();

router.get('/', (req,res) =>{
    return res.render('index',{title:'Página Inicial'})
});

//Oi Fibra
router.get('/oifibra', OiFibraController.index);
router.post('/oifibra/contratar', OiFibraController.contratar);

//Oi Play
router.get('/oifibra', OiFibraController.index);
router.post('/oifibra/contratar', OiFibraController.contratar);

//Oi Place
router.get('/oiplace', OiPlaceController.index);
router.post('/oiplace/comprar', OiPlaceController.comprar);

//Minha Oi
router.get('/minhaoi', MinhaOiController.index);
router.post('/minhaoi/pagar', MinhaOiController.pagar);

module.exports = router;