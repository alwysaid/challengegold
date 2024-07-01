const express = require("express")
const routes = express.Router()
const UserController = require("../controllers/userController")

//Service Login

routes.post("/login-penggalang", UserController.loginPenggalang)

routes.get("/login-penggalang", UserController.pagePenggalang)

routes.get("/login-donor", UserController.pageDonor)

routes.post("/login-donor", UserController.loginDonor)


module.exports= routes