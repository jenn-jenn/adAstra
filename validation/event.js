const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateEventInput(data) {
    let errors = {};

    data.title = validText(data.title) ? data.title : "";
    data.date = validText(data.date) ? data.date : "";
    data.body = validText(data.body) ? data.body : "";

    if (!Validator.isLength(data.title, {min: 3, max: 50})) {
        errors.title = "Title must be between 3 and 50 characters";
    }

    if (Validators.isEmpty(data.title)) {
        errors.title = "Title is required";
    }

    if (!Validator.isLength(data.date, { min: 6, max: 10})) {
        errors.date = "Date must be between 6 and 10 characters";
    }

    if (Validator.isEmpty(data.date)) {
        errors.date = "Date required";
    }
    
    if (!Validator.isLength(data.body, {min: 5, max: 140})) {
        errors.body = "Body must be between 5 and 140 characters";
    }

    if (Validator.isEmpty(data.body)) {
        errors.body = "Body is required";
    }

    return {
        errors, 
        isValid: Object.keys(errors).length === 0
    }
}