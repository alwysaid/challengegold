const fs = require ("fs")

class AllMiddleware {
    static testThirdPartyMiddleware (req, res, next) {

        console.log("Always Call This As Mark Of Middleware");
        next()
    }
    static logger = (req, res, next) => { //app handler middeware
        
        console.log(`${req.method} ${req.url}`);
        next()
    }
}

module.exports = AllMiddleware