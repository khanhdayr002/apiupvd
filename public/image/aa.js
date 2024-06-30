exports.name = '/image/aa';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        const anya = require('./data/json/aa.json');
        var image = aa[Math.floor(Math.random() * aa.length)].trim();
        res.jsonp({
            url: image,
            count: aa.length,
            author: 'TáoTPk'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}