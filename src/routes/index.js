const { Router } = require('express');
const router = Router();

const { getCars, getCarsById, createCars, updateCars, deleteCars } = require('../controllers/index.controller');

router.get('/empleados', getCars);
router.get('/empleados/:id', getCarsById);
router.post('/empleados', createCars);
router.put('/empleados/:id', updateCars)
router.delete('/empleados/:id', deleteCars);

module.exports = router;