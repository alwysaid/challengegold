const express = require("express")
const routes = express.Router()
const DonateController = require("../controllers/donateController")

//Service Page Donate
//app.post("/donate-campaign", DonateController.campaignDonate)
routes.post("/donate-campaign/", DonateController.addNewCampaignDonate)


//Tampilan Form Page Donate
routes.get("/donate-campaign", DonateController.pageDonate)


routes.put("/edit-datadonor/:id", DonateController.editDataDonor)



 //History Donasi User
routes.get("/donate-history", (req, res)=> {
    res.send("HALAMAN HISTORI DONASI")
})

module.exports= routes