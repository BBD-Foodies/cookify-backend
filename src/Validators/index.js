const {postRecipeValidationRules } = require('./Rules/postRecipeRules.js');
const {updateRecipeValidationRules } = require('./Rules/updateRecipeRules.js');
const {filterRecipeValidationRules } = require('./Rules/filterRecipeRules.js');
const {groupByValidationRules } = require('./Rules/groupByRecipeRules.js');

module.exports = { 
    postRecipeValidationRules,
    updateRecipeValidationRules,
    filterRecipeValidationRules,
    groupByValidationRules
}