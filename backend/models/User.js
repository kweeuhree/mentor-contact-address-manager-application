const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        require: true,
        unique
    },
    password: {
        type: String,
        require: true
    }
})

const UserModel = mongoose.model("user", UserSchema)
module.exports = UserModel