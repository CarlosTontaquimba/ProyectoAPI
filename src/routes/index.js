const { Router } = require('express');
const router = Router();

const { getCars, getCarsById, createCars, updateCars, deleteCars } = require('../controllers/index.controller');

router.get('/autos', getCars);
router.get('/autos/:id', getCarsById);
router.post('/autos', createCars);
router.put('/autos/:id', updateCars)
router.delete('/autos/:id', deleteCars);

module.exports = router;