/*
    Main and setup file for routers
*/
const uploadFile = require('./apiUpload');
const createURL = require('./apiURL');
const deleteFile = require('./delete');
const getFile = require('./files');
const URL = require('./url');
const noLog = require('./noLog');
const ban = require('./ban');


let setup = (app) => {
    app.use(getFile);
    app.use(deleteFile);
    app.use(uploadFile);
    app.use(createURL);
    app.use(URL);
    app.use(noLog);
    app.use(ban);

};

module.exports = { uploadFile, deleteFile, getFile, URL, createURL, setup };
