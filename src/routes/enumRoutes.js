const express = require('express');
const { getMealTypes, getDietaryRequirements, getMeasurements, getEnumTypes } = require('../Controllers/enumController');
const router = express.Router();

router.get('/MealTypes', getMealTypes);
router.get('/Measurements', getMeasurements);
router.get('/DietaryRequirements', getDietaryRequirements);
router.get('/', getEnumTypes);

module.exports = router;
