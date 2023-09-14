const { Router } = require("express");
const getAllDrivers= require('../controllers/getAllDrivers');
const getDriverById = require("../controllers/getDriverById");

const router = Router();

router.get('/', getAllDrivers);
router.get('/:id', getDriverById);


module.exports = router;


