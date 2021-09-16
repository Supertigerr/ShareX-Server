/*
    The user model for mongoose
*/
const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    key: String,
    name: String,
    owner: Boolean,
    uploads: Number,
    redirects: Number,
    discord: String,
});

module.exports = mongoose.model("users", UserSchema);
