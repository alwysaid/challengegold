const fs = require("fs")
//const userDonorDb = require("../models/userDonorDb.json")
const dbKnex = require("../dbconfig")

class DonateController {

    // static campaignDonate (req, res) {
    //     const {id, donorName, donorDom, donorPhone, donorEmail, valueDonate, doaDescription} = req.body    
    //     res.status(200).json({
    //          "message": `Donasi Berhasil Dikirim`        
    //  })
    // }

    // static dataCampaignDonate (req, res) {
    //     const idParams = req.params.id
    //     console.log(idParams, "==> INI ID PARAMS");
    //     let tampString = ""
    //         userDonorDb.forEach(el => {
    //             console.log(el);
    //             if (idParams == el.id) {
    //             tampString = el.title
    //         } 
    //         console.log();
    //     });
    // }

    static pageDonate (req, res) {
        res.render('pageDonate')
    }


    static async addNewCampaignDonate (req, res) {
        try {
            const {idCampaign, nama, domisili, email, noHandphone, password, nominalDonate, metodePembayaran, ucapanDonate, anonymDonate, fotoProfil} = req.body
    
            const inputDonate = {
                idCampaign: +idCampaign,
                nama,
                domisili,
                email,
                noHandphone,
                password, 
                nominalDonate: +nominalDonate,
                metodePembayaran,
                ucapanDonate,
                anonymDonate,
                fotoProfil
            }
    
             console.log(inputDonate,' ini datanya bos masuk ');
    
    
            const resultData = await dbKnex('donateDonor').insert(inputDonate)
            res.status(201).json(resultData)
            
    
        } catch (error) {
            console.log(error);
        }
        
        
        // const {id, donorName, donorDom, donorPhone, donorEmail, valueDonate, doaDescription} = req.body
        // const lastItemPost = userDonorDb [userDonorDb.length -1].id
        // //const newIdCampDonate = +req.params.id
        // const newIdCampDonate = lastItemPost + 1
        // //console.log("Last ID", newIdPost);
        // const newCampDonate = {
        //     id : newIdCampDonate,
        //     donorName, 
        //     donorDom, 
        //     donorPhone, 
        //     donorEmail, 
        //     valueDonate, 
        //     doaDescription
        // }
        // console.log(newCampDonate);

        // userDonorDb.push(newCampDonate)

        // res.status(201).json(userDonorDb)
    }

    static async donorSpesCampaign(req, res) {
        try {
            const idParams = +req.params.id
            console.log(idParams, "Ini Id Params");
            const { nama, domisili, email, noHandphone, nominalDonate, metodePembayaran, ucapanDonate } = req.body
    
            const specifiCampaignDonor = await dbKnex('donateDonor').where({idCampaign : idParams}).column(nama, domisili, email, noHandphone, nominalDonate, metodePembayaran, ucapanDonate)
            res.status(200).json(specifiCampaignDonor)
        
        } catch (error) {
            console.log(error);
        }
    }
    
    static async editDataDonor (req, res) {
        try {
            const idParams = +req.params.id
            console.log(idParams,"Ini id Params");
            const {nama, domisili, email, noHandphone, password, fotoProfil } = req.body
            const dataDonorid = await dbKnex('donateDonor').where({idDonateDonor : idParams}).update({nama, domisili, email, noHandphone, password, fotoProfil })
            res.status(200).json(dataDonorid)
            // console.log(dataDonorid);
            
        } catch (error) {
            console.log(error);
        }
    }

    
}

module.exports = DonateController