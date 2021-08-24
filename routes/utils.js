const csrf = require('csurf');
const bcrypt = require('bcryptjs')
const csrfProtection = csrf({cookie: true})
const { check, validationResult } = require('express-validator')


const asyncHandler = handler => (req, res, next) => handler(req, res, next).catch(next)

const handleValidationErrors = (req, res, next) => {

    const validationErrors = validationResult(req);

    if (!validationErrors.isEmpty()) {

        const errors = validationErrors.array().map((error) => error.msg)
        const err = Error('Bad Request.')
        err.errors = errors
        err.status = 400
        err.title = 'Bad Request.'
        return next(err)
    }
    next()
}

const userValidators = [

    check('username')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a valid username')
        .isLength({ max: 20 })
        .withMessage('Username must not be more than 20 characters long'),
    check('email')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for email address')
        .isLength({ max: 100 })
        .withMessage('Email must not be more than 100 characters long')
        .isEmail()
        .withMessage('Please provide a valid email'),
    check('password')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a password')
        .isLength({ max: 20 })
        .withMessage('Passsword must not be more than 50 characters long')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, 'g')
        .withMessage('Password must contain at least 1 lowercase letter, uppercase letter, number, and special character (i.e. "!@#$%^&*")'),
    check('confirmPassword')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a password confirmation')
        .isLength({ max: 20 })
        .withMessage('Passsword confirmation must not be more than 20 characters long')
        .custom(async (confirmPassword, {req}) => {
            const password = req.body.password
            if(password !== confirmPassword){
                throw new Error('Passwords are not the same')
            }
        })
        .withMessage('Passwords do not match'),
];


const loginValidators = [
    check('username')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a valid username'),
    check('password')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a password')
];

module.exports = {
    asyncHandler,
    csrfProtection,
    userValidators,
    loginValidators,
    handleValidationErrors,
    bcrypt
}
