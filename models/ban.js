/*
    The user model for mongoose
*/
const mongoose = require("mongoose");

const BanSchema = mongoose.Schema({
    ip: String,
});

module.exports = mongoose.model("bans", BanSchema);
