const { MEAL_TYPE_ENUMS, MEASUREMENT_ENUMS, DIETARY_REQUIREMENT_ENUMS } = require("../Validators/Config/enums");

const getEnumTypes = async (req, res) => { 
    return res.json({ 
        enumTypes: [
            'DietaryRequirements',
            'Measurements',
            'MealTypes'
        ]
    }) 
};

const getMealTypes = async (req, res) => { return res.json({ enums: MEAL_TYPE_ENUMS }) };
const getDietaryRequirements = async (req, res) => { return res.json({ enums: DIETARY_REQUIREMENT_ENUMS }) };
const getMeasurements = async (req, res) => { return res.json({ enums: MEASUREMENT_ENUMS }) };

module.exports = {
    getMealTypes,
    getDietaryRequirements,
    getMeasurements,
    getEnumTypes
};
