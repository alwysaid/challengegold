const express = require("express")
const routes = express.Router()
const CampaignController = require("../controllers/campaignRegisterController")
const DonateController = require("../controllers/donateController")

//Service Create & Edit Campaign

    //Tampilan Form Create Campaign
routes.get("/create-campaign", CampaignController.pageCreateCampaign)

    //Post Create Campaign
//routes.post("/create-campaign", CampaignController.createCampaign)
routes.post("/create-campaign", CampaignController.addNewCampaign)


// routes.get("/page-campaign/:id", CampaignController.dataCampaign)

    //Edit Campaign
routes.put("/edit-campaign/:id", CampaignController.editDataCampaign)

    //History Campaign
routes.get("/campaign-history", (req, res)=> {
    res.send("HALAMAN HISTORI CAMPAIGN")
})

//Service Page Campaign

routes.get("/campaign-page", (req, res)=> {
    res.send("HALAMAN GALANG DANA")
})

//Delete Campaign Penggalang
routes.delete ("/delete-campaign/:id", CampaignController.deleteCampaign)

//Tampilkan Data Semua Campaign
routes.get("/all-campaign", CampaignController.getAllCampaign)

//Tampilkan Data Spesifik Campaign
routes.get("/all-campaign/:id", CampaignController.getSpecificCampaign)

//Data Semua Campaign Penggalang
routes.get("/all-campaign-penggalang/:id", CampaignController.getPenggalangCampaign)

//Data Donor Dalam Satu Campaign
routes.get("/all-campaign-donor/:id", DonateController.donorSpesCampaign)


module.exports= routes