const express = require("express")
const routes = express.Router()
const userPenggalangRoutes = require("./userPenggalangRoutes")
const campaignRoutes = require("./campaignRoutes")
const userDonorRoutes = require("./userDonorRoutes")
const loginRoutes = require("./loginRoutes")

//userDonor
routes.use('/api/v1', userDonorRoutes)

//userPenggalang
routes.use('/api/v1', userPenggalangRoutes)

//campaign
routes.use('/api/v1', campaignRoutes)

//userLogin
routes.use('/api/v1', loginRoutes)


module.exports= routes