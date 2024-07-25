const {postRecipeValidationRules } = require('./Rules/postRecipeRules.js');
const {updateRecipeValidationRules } = require('./Rules/updateRecipeRules.js');
const {filterRecipeValidationRules } = require('./Rules/filterRecipeRules.js');
const {groupByValidationRules } = require('./Rules/groupByRecipeRules.js');
const {searchValidationRules} = require('./Rules/searchRecipeRules.js')

module.exports = { 
    postRecipeValidationRules,
    updateRecipeValidationRules,
    filterRecipeValidationRules,
    groupByValidationRules,
    searchValidationRules
}