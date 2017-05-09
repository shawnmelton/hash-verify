class HashTagFormValidator {
    submissionIsValid(hashTag) {
        return /^\w+$/.test(hashTag);
    }
}

const validator = new HashTagFormValidator();
module.exports = validator;