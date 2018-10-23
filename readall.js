let articles = require('./articles');

module.exports = function readAll(req, res, payload, cb) {
    cb(null, articles);
};