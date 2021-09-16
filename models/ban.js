/*
LMAO
*/
const mongoose = require("mongoose");

const UrlSchema = mongoose.Schema({
    banip: String
});

let BanModel = mongoose.model("banip", UrlSchema);

let parseIP = async (ip) => {
    ip = ip.replace('::ffff:', '').replace('::1', '127.0.0.1').replace('localhost', '127.0.0.1');
    let ipTest = ip.split('.')[0] + '.' + ip.split('.')[ip.split('.').length - 1];
    let ipData = await BanModel.findOne({ ip: ipTest });
    if (ipData == null) return ip;
    return 'undefined';
};

const BanSchema = mongoose.Schema({
    ip: String,
});

module.exports = { parseIP, BanModel };
module.exports = banModel = mongoose.model('banip', UrlSchema)
