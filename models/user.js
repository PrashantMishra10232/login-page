const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    user_name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        unique: true,
    }
})

const User = mongoose.model("user",UserSchema);

module.exports = User;