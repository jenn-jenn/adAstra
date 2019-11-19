const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateCommentInput(data) {
    let errors = {};

    data.body = validText(data.body) ? data.body : "";

    if(Validator.isEmpty(data.body)){
        errors.body = "Body cannot be empty";
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0,
    };
};