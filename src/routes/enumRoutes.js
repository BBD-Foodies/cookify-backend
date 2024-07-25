const express = require('express');
const { getMealTypes, getDietaryRequirements, getMeasurements } = require('../Controllers/enumController');
const router = express.Router();

router.get('/MealTypes', getMealTypes);
router.get('/Measurements', getMeasurements);
router.get('/DietaryRequirements', getDietaryRequirements);

module.exports = router;
