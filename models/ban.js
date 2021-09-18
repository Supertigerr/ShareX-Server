/*
    The ip ban  model for mongoose
*/
const mongoose = require("mongoose");

const BanSchema = mongoose.Schema({
    bannedip: String,
});

module.exports = mongoose.model("ipbans", UserSchema);
