const fs = require("fs")
//const funderDb = require("../models/penggalangDB.json")
const dbKnex = require("../dbconfig");
const { json } = require("express");
const { render } = require("ejs");
const { log } = require("console");

class FunderRegisterController {
    // static createFunder(req, res) {
    //     const { organizationName, organizationLocation, organizationDescription, organizationPerson, organizationPersonNumber, organizationIdentity } = req.body
    //     console.log(req.body, "==> Data Register Penggalang");
    //     res.status(200).json({
    //         "message": `Akun Berhasil Dibuat`
    //     })
    // }
    // static dataFunder(req, res) {
    //     const idParams = req.params.id
    //     console.log(idParams, "==> INI ID PARAMS");
    //     let tampString = ""
    //     funderDb.forEach(el => {
    //         console.log(el);
    //         if (idParams == el.id) {
    //             tampString = el.title
    //         }
    //     });
    // }
    //untuk menambah penggalang baru
    static async pageRegisterCampaign (req, res) {
        res.render("pageRegister")
    }
    
    static async addNewFunder(req, res) {

        try {

            const { namaOrganisasi, jenisOrganisasi, lokasiOrganisasi, deskripsiOrganisasi, picOrganisasi, noPicOrganisasi, emailOrganisasi, passwordEmailOrganisasi, logoOrganisasi } = req.body

            const inputAccountPenggalang = {
                namaOrganisasi,
                jenisOrganisasi,
                lokasiOrganisasi,
                deskripsiOrganisasi,
                picOrganisasi,
                noPicOrganisasi,
                emailOrganisasi,
                passwordEmailOrganisasi,
                logoOrganisasi
            }

            console.log(inputAccountPenggalang, "INI DATA AKUN PENGGALANG");

            await dbKnex('penggalangAccount').insert(inputAccountPenggalang)
            res.render('home')
            

            // const resultDataAccountPenggalang = await dbKnex('penggalangAccount').insert(inputAccountPenggalang)
            // res.status(201).json(resultDataAccountPenggalang)
            // if (resultDataAccountPenggalang) {
            //    res.render("home") 
            // }else{
            //     console.log(error);
            // }

        } catch (error) {
            console.log(error);
        }

        // const {id, organizationName, organizationLocation, organizationDescription, organizationPerson, organizationPersonNumber, organizationIdentity} = req.body
        // const lastItemPost = funderDb [funderDb.length -1].id
        // const newIdFund = lastItemPost + 1
        // //console.log("Last ID", newIdPost);
        // const newFund = {
        //     id : newIdFund,
        //     organizationName, 
        //     organizationLocation, 
        //     organizationDescription, 
        //     organizationPerson, 
        //     organizationPersonNumber, 
        //     organizationIdentity
        // }    
        // funderDb.push(newFund)

        // console.log(funderDb);
        // res.status(201).json(funderDb)

    }

    // static async getFunderDataId(req, res) {

    // }
    //untuk edit data penggalang
    static async editFunderData(req, res) {
        try {
            const idParams = +req.params.id
            console.log(idParams,"Ini id Params");
            const { namaOrganisasi, jenisOrganisasi, lokasiOrganisasi, deskripsiOrganisasi, picOrganisasi, noPicOrganisasi, emailOrganisasi, passwordEmailOrganisasi, logoOrganisasi } = req.body
            const dataPenggalangId = await dbKnex('penggalangAccount').where({idPenggalangAccount : idParams}).update({ namaOrganisasi, jenisOrganisasi, lokasiOrganisasi, deskripsiOrganisasi, picOrganisasi, noPicOrganisasi, emailOrganisasi, passwordEmailOrganisasi, logoOrganisasi })
            res.status(200).json(dataPenggalangId)
            // console.log(dataPenggalangid);
            
        } catch (error) {
            console.log(error);
        }

        // //console.log(idParams, "ini id"); // untuk cek id params
        // let tampString = ""

        // for (let index = 0; index < knex.length; index++) {
        // //const element = array[index];
        // //console.log(campaignDb[index].id, "ini id loop");
        // if (funderDb[index].id == idParams) {
        //     //console.log("alwy masuk"); // untuk cek id 
        //     tampString = funderDb[index]
        //     funderDb[index].organizationName = organizationName
        //     funderDb[index].organizationLocation = organizationLocation
        //     funderDb[index].organizationDescription = organizationDescription
        //     funderDb[index].organizationPerson = organizationPerson
        //     funderDb[index].organizationPersonNumber = organizationPersonNumber
        //     funderDb[index].organizationIdentity = organizationIdentity
        //     //console.log(dataBase[index].title); // untuk cek 
        //     }
        // }
        // //console.log(campaignDb, "===>ini bukti");
        // res.status(200).json(tampString)
        // //console.log(organizationName, organizationLocation, organizationDescription, organizationPerson, organizationPersonNumber, organizationIdentity);
    }
    // untuk delete penggalang
    static async deleteFunder (req, res) {
        try {
            const idParams = +req.params.id
            const deletePenggalang = await dbKnex('penggalangAccount').where({idPenggalangAccount : idParams}).del('*')
            res.status(201).json(deletePenggalang)
        } catch (error) {
            console.log(error);
        }



        // const idParams = req.params.id
        //     const result1 = funderDb.filter(el => el.id != idParams)
        //     console.log(result1, "==> FINAL");
        //         res.status(200).json ({
        //             message: `Akun berhasil dihapus`,
        //             funderDb : result1
        //             })
    }
}

module.exports = FunderRegisterController
