const express = require("express");
const { Register, Login } = require("../controller/userController");
const router = express.Router();
const { body } = require('express-validator');
const { createContact } = require("../controller/contactController");

//user routes
router.post('/register', [
    body('name').trim().notEmpty().withMessage('Name Should Not Be Empty'),
    body('email').trim().notEmpty().withMessage('Email Should Not Be Empty').isEmail().withMessage('Invalid Email'),
    body('password').trim().notEmpty().withMessage('Password Should Not Be Empty')
    .isLength({min: 5, max: 30}).withMessage("Password Length Should be between 5 and 30 characters")
], Register)

router.post('/login', [
    body('email').trim().notEmpty().withMessage('Email Should Not Be Empty').isEmail().withMessage('Invalid Email'),
    body('password').trim().notEmpty().withMessage('Password Should Not Be Empty')
    .isLength({min: 5, max: 30}).withMessage("Password Length Should be between 5 and 30 characters")
], Login)


// Contact routes
// router.post('add-contact', verifyUser,) // didnt get this far

module.exports = router