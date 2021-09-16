/*
    The router for A banned ip
*/
const { Router } = require('express');
const colors = require('colors');
const ipFunc = require('../models/ban');

const router = Router();

router.get("/", async (req, res) => {
    let ip = await require('../models/ban').parseIP(req.ip);
        console.log(`${'[GET]'.green} ${'ADDED IP TO NO LOG WHITELIST'.bgMagenta.black}`);
        return res.redirect('/ban.html');
    } else return res.redirect('/404.html');
});

module.exports = router;
