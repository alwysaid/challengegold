const fs = require ("fs")

class ErrorMiddleware {
    static errorHandler (err, req, res, next) { //custom middleware
        //console.log(err.code, "==> THIS IS ALWY");
        let messageReturn = ""
    
        if (err.code === 400) {
            messageReturn= "Bad Request"
        }else if (err.code === 404) {
            messageReturn= "Not Found"
        }else if (err.code === 500) {
            messageReturn= "Server Down"
        }
        //res.status(err.code).json({ "message" : messageReturn })
        res.render("error2", { //membuat tampilan dinamis dengan ejs dan tag html
            messageReturn
        })
    }
    static errorHandlerNotFound (req, res, next) {
        res.render("pageError")
    }
}
module.exports = ErrorMiddleware