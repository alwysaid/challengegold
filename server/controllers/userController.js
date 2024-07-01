const { log } = require("console")
const dbKnex = require("../dbconfig")
const fs = require("fs")



class UserController {
    static pagePenggalang(req, res) {
        res.render("pageLoginPenggalang")
    }

    static async loginPenggalang(req, res) {
        try {
            const { email, password, idPenggalangAccount } = req.body

            const inputLoginPenggalang = {
                email,
                password,
                idPenggalangAccount: +idPenggalangAccount
            }

            console.log(inputLoginPenggalang, "==> Data Login Penggalang Masuk");

            const findEmail = await dbKnex('penggalangAccount').select('*').where({
                emailOrganisasi: email
            })

            if (findEmail) {
                const validatePassword = findEmail[0].passwordEmailOrganisasi
                console.log(validatePassword);
                if (validatePassword === password) {
                    // console.log("BERHASIL LOGIN");
                    res.render('home')
                } else {
                    console.log("Username or Password Invalid");
                }
            } else {
                console.log("Akun Tidak Ditemukan");
            }


            console.log(findEmail);
            // const resultLoginPenggalang = await dbKnex('userPenggalang').insert(inputLoginPenggalang)
            // res.status(201).json(resultLoginPenggalang)


        } catch (error) {
            console.log(error);
        }

    }

    static pageDonor(req, res) {
        res.render("pageLoginDonor")
    }

    static async loginDonor(req, res) {
        try {
            const { email, password, idDonateDonor } = req.body

            const inputLoginDonor = {
                email,
                password,
                idDonateDonor: +idDonateDonor
            }

            console.log(inputLoginDonor, "==> Data Login Donor Masuk");

            const findEmailDonor = await dbKnex('donateDonor').select('*').where({
                email: email
            })

            if (findEmailDonor) {
                const validateDonorPassword = findEmailDonor[0].password
                console.log(validateDonorPassword);
                if (validateDonorPassword === password) {
                    // console.log("BERHASIL LOGIN");
                    res.render('home')
                } else {
                    console.log("Username or Password Invalid");
                }
            } else {
                console.log("Akun Tidak Ditemukan");
            }


            console.log(findEmailDonor);
        } catch (error) {
            console.log(error);
        }

    }


}

module.exports = UserController