const express = require("express")
const routes = express.Router()
const FunderRegisterController = require("../controllers/funderRegisterController")

//Tampilan Form Register User Penggalang
routes.get("/register-penggalang", FunderRegisterController.pageRegisterCampaign)

    //Tampilan Halaman Akun User
routes.get("/account", (req, res)=> {
    res.send("HALAMAN AKUN USER")
})

    //Post Register User
routes.post("/register-penggalang", FunderRegisterController.addNewFunder)

    //Service Edit Akun User
routes.put("/edit-userpenggalang/:id", FunderRegisterController.editFunderData)

//     //History Donasi User
// routes.get("/donate-history", (req, res)=> {
//     res.send("HALAMAN HISTORI DONASI")
// })

//Delete User Penggalang
routes.delete("/delete-userpenggalang/:id", FunderRegisterController.deleteFunder)

module.exports = routes