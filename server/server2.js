const express = require("express")
const app = express() // ini jangan lupa instance
const PORT = 3000
const routes = require("./routers/router")
const ErrorMiddleware = require("./errorHandlers/errorhandler")
const AllMiddleware = require("./middleware/allMiddleware")

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use(AllMiddleware.testThirdPartyMiddleware)

app.use(AllMiddleware.logger)

app.use(express.static('public'))

app.use(routes)

app.get("/", (req, res) => {
    res.render("home")
})

app.use(ErrorMiddleware.errorHandler)

app.use(ErrorMiddleware.errorHandlerNotFound)

app.listen(PORT,() => {
    console.log(`SERVER NYALA ${PORT}`); // jangan lupa pake listen
})