/*
    The user model for mongoose
*/
const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    ip: String,
});

module.exports = mongoose.model("bans", UserSchema);
