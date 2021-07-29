// Created by Ibrahim on Saturday 

/*

trim-request is very simple to use, just import the package and use one of its methods:

trimRequest.all trim body, params and query objects

trimRequest.body trim only the body object

trimRequest.param trim the params object

trimRequest.query trim the query string object

for more info :: https://github.com/YouneLL/trim-request

*/

require('trim-request');

var all = function (req, res, next) {

    if (req.body) {
        trimStringProperties(req.body);
    }

    if (req.params) {
        trimStringProperties(req.params);
    }

    if (req.query) {
        trimStringProperties(req.query);
    }

    next();

}

// trim all string prpoerties of an object
function trimStringProperties(obj) {

    if (obj !== null && typeof obj === 'object') {

        for (var prop in obj) {

            // if the property is an object trim it too
            if (typeof obj[prop] === 'object') {
                return trimStringProperties(obj[prop]);
            }

            // if it's a string remove begin and end whitespaces
            if (typeof obj[prop] === 'string') {
                obj[prop] = obj[prop].trim();
            }

        }

    }

}


// trimRequest middleware: trim all request object: body, params, query
var all = function (req, res, next) {

    if (req.body) {
        trimStringProperties(req.body);
    }

    if (req.params) {
        trimStringProperties(req.params);
    }

    if (req.query) {
        trimStringProperties(req.query);
    }

    next();

}

// trimBody middleware: trim only the body object
var body = function (req, res, next) {
    if (req.body) {
        trimStringProperties(req.body);
    }
    next();
}

var param = function (req, res, next) {
    if (req.params) {
        trimStringProperties(req.params);
    }
    next();
}

var query = function (req, res, next) {
    if (req.query) {
        trimStringProperties(req.query);
    }
    next();
}

module.exports = {
    all: all,
    body: body,
    param: param,
    query: query
};

module.exports = all