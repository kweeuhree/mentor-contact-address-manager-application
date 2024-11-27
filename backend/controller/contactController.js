const express = require("express");
const { ContactModel } = require("../models/Contact.js");

const createContact = async (req, res) => {
    const {name, email, phone, address} = req.body;

    try { 
    const newContact = new ContactModel({
        name,
        email,
        phone,
        address,
        postedBy: req.user._id
    })

    const result = await newContact.save();
    return res.status(201).json({success: true, ...result._doc})
} catch(err) {
    return res.status(500).json(err.message);

}
};

module.exports = {createContact}