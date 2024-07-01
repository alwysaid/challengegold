const fs = require("fs")
const campaignDb = require("../models/campaignDB.json")
const dbKnex = require("../dbconfig")
const { log, error } = require("console")


class CampaignController {
    static pageCreateCampaign (req, res) {
        res.render("pageCreateCampaign")
    }

    static createCampaign (req, res) {
        const {id, titleCamp, targetCamp, classCamp, durCamp, sublinkCamp, descCamp, headCamp} = req.body
        //console.log(titleCamp, targetCamp, classCamp, durCamp, sublinkCamp, descCamp, headCamp);
        //*TEST MINDAHIN ADD NEW KE ATAS
        
        res.status(200).json({
             "message": `Campaign Berhasil Dibuat`        
     })
    }

    static async addNewCampaign (req, res) {
        try { 
            const { idPenggalangAccount, judulCampaign, klasifikasiCampaign, targetCampaign, subLinkCampaign, deskripsiCampaign, gambarCampaign1, gambarCampaign2, gambarCampaign3, gambarCampaign4, gambarCampaign5, gambarCampaign6, gambarCampaign7, gambarCampaign8, gambarCampaign9, gambarCampaign10, gambarCampaignHeader } = req.body

            const inputCampaign = {
                idPenggalangAccount: +idPenggalangAccount, 
                judulCampaign,
                klasifikasiCampaign,
                targetCampaign: +targetCampaign,
                subLinkCampaign,
                deskripsiCampaign,
                gambarCampaign1,
                gambarCampaign2,
                gambarCampaign3,
                gambarCampaign4,
                gambarCampaign5,
                gambarCampaign6,
                gambarCampaign7,
                gambarCampaign8,
                gambarCampaign9,
                gambarCampaign10,
                gambarCampaignHeader
            }

            console.log(inputCampaign, 'INI DATA CAMPAIGN MASUK');
            await dbKnex('newCampaign').insert(inputCampaign)
            res.render('home')

            // console.log(inputCampaign, 'INI DATA CAMPAIGN MASUK');
            // const resultDataCampaign = await dbKnex('newCampaign').insert(inputCampaign)
            // res.status(201).json(resultDataCampaign)
            
        } catch (error) {
            console.log(error);
        }
        
        // const {id, titleCamp, targetCamp, classCamp, durCamp, sublinkCamp, descCamp, headCamp} = req.body
        // const lastItemPost = campaignDb [campaignDb.length -1].id
        // const newIdCamp = lastItemPost + 1
        // //console.log("Last ID", newIdPost);
        // const newCamp = {
        //     id : newIdCamp,
        //     titleCamp,
        //     targetCamp,
        //     classCamp,
        //     durCamp,
        //     sublinkCamp,
        //     descCamp,
        //     headCamp
        // }

        // campaignDb.push(newCamp)

        // res.status(201).json(campaignDb)
    }

    static async getAllCampaign (req, res) {
        try {
        
        const getAllCampaign = await dbKnex('newCampaign').select("*")
        res.status(201).json(getAllCampaign)

        } catch (error) {
            console.log(error);
        }
    }

    static async getSpecificCampaign (req, res) {
        try {
        
        const idParams = +req.params.id
        console.log(idParams, "Ini Id Params");
        const { judulCampaign, targetCampaign, deskripsiCampaign, gambarCampaign1, gambarCampaign2, gambarCampaign3, gambarCampaign4, gambarCampaign5, gambarCampaign6, gambarCampaign7, gambarCampaign8, gambarCampaign9, gambarCampaign10, gambarCampaignHeader } = req.body

        const specifiCampaign = await dbKnex('newCampaign').where({idCampaign : idParams}).select('*')
        res.status(200).json(specifiCampaign)

        } catch (error) {
            console.log(error);
        }
    }

    static async getPenggalangCampaign (req, res) {
        try {
        
            const idParams = +req.params.id
            console.log(idParams, "Ini Id Params");
            const { judulCampaign, targetCampaign, deskripsiCampaign, gambarCampaign1, gambarCampaign2, gambarCampaign3, gambarCampaign4, gambarCampaign5, gambarCampaign6, gambarCampaign7, gambarCampaign8, gambarCampaign9, gambarCampaign10, gambarCampaignHeader } = req.body
    
            const specifiCampaign = await dbKnex('newCampaign').where({idPenggalangAccount : idParams}).select('*')
            res.status(200).json(specifiCampaign)
        
        } catch (error) {
            console.log(error);
        }
    }

    static async editDataCampaign (req, res) {
        try {
            const idParams = +req.params.id
            console.log(idParams,"Ini id Params");
            const { judulCampaign, targetCampaign, deskripsiCampaign, gambarCampaign1, gambarCampaign2, gambarCampaign3, gambarCampaign4, gambarCampaign5, gambarCampaign6, gambarCampaign7, gambarCampaign8, gambarCampaign9, gambarCampaign10, gambarCampaignHeader } = req.body
            const dataCampaignid = await dbKnex('newCampaign').where({idCampaign : idParams}).update({ judulCampaign, targetCampaign, deskripsiCampaign, gambarCampaign1, gambarCampaign2, gambarCampaign3, gambarCampaign4, gambarCampaign5, gambarCampaign6, gambarCampaign7, gambarCampaign8, gambarCampaign9, gambarCampaign10, gambarCampaignHeader })
            res.status(200).json(dataCampaignid)
            // console.log(dataCampaignid);
            
        } catch (error) {
            console.log(error);
        }


        // const idParams = req.params.id
        // console.log(idParams, "==> INI ID PARAMS");
        // let tampString = ""
        //     campaignDb.forEach(el => {
        //         console.log(el);
        //         if (idParams == el.id) {
        //         tampString = el.title
        //     } 
        // });
    }

    // static editCampaign (req, res) {
    //     const idParams = req.params.id
    //     const{ targetCamp, durCamp, descCamp, headCamp } = req.body
    //     //console.log(idParams, "ini id"); // untuk cek id params
    //     let tampString = ""

    //     for (let index = 0; index < campaignDb.length; index++) {
    //     //const element = array[index];
    //     //console.log(campaignDb[index].id, "ini id loop");
    //     if (campaignDb[index].id == idParams) {
    //         //console.log("alwy masuk"); // untuk cek id 
    //         tampString = campaignDb[index]
    //         campaignDb[index].targetCamp = targetCamp
    //         campaignDb[index].durCamp = durCamp
    //         campaignDb[index].descCamp = descCamp
    //         campaignDb[index].headCamp = headCamp
    //         //console.log(dataBase[index].title); // untuk cek 
    //         }
    //     }
    //     //console.log(campaignDb, "===>ini bukti");
    //     res.status(200).json(tampString)   
    // }
    //untuk delete campaign
    static async deleteCampaign (req, res) {
        try {
            const idParams = +req.params.id
            const deleteCampaign = await dbKnex('newCampaign').where({idCampaign : idParams}).del('*')
            res.status(201).json(deleteCampaign)
        } catch (error) {
            console.log(error);
        }

        // const idParams = req.params.id
        //     const result2 = campaignDb.filter(el => el.id != idParams)
        //     console.log(result2, "==> FINAL");
        //         res.status(200).json ({
        //             message: `Campaign berhasil dihapus`,
        //             campaignDb : result2
        //             })

    }    
}

module.exports = CampaignController