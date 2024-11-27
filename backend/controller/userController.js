const express = require("express");
const UserModel = require("../models/user.js");
const { validationResult } = require("express-validator");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require("dotenv").config();


const Register = async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }
    const {name, email, password} = req.body;
   try {
        const userExist= await UserModel.findOne({email})
        if(userExist) {
            return res.status(400).json({
                errors: [{ msg: 'User already exists'}],
            });
        }
        const hashPassword = await bcrypt.hash(password, 12)
        const newUser = new UserModel({name, email, password: hashPassword})
        const result = await newUser.save()
        result._doc.password = undefined;
        return res.status(201).json({succes:true, ...result._doc})
    } catch(err) {
        console.log(err)
        return res.status(500).json({error: err.message})
    }

    return res.status(200).json('Account Created Successfully')
}

const Login = async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }
    const {email, password} = req.body;
   try {
        const userExist= await UserModel.findOne({email})
        if(!userExist) {
            return res.status(400).json({
                errors: [{ msg: 'User not registered'}],
            });
        }
        const isPasswordOk = await bcrypt.hash(password, userExist.password)
        if(!isPasswordOk) {
            return res.status(400).json({
                errors: [{ msg: 'Invalid Password'}],
            })
        }
        const token = jwt.sign({id: userExist._id}, process.env.JWT_SECRET, {expiresIn: '7d'})

        const user = {...userExist._doc, password: undefined}
        result._doc.password = undefined;
        return res.status(201).json({succes:true, user, token})
    } catch(err) {
        console.log(err)
        return res.status(500).json({error: err.message})
    }

    return res.status(200).json('Account Created Successfully')
}



module.exports = {Register, Login}