const express = require("express")
const app = express() // ini jangan lupa instance
const PORT = 3000

app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.get("/campaign-page", (req, res)=> {
    res.send("HALAMAN GALANG DANA")
})

app.get("/account", (req, res)=> {
    res.send("HALAMAN AKUN USER")
})

app.get("donate-history", (req, res)=> {
    res.send("HALAMAN HISTORI DONASI")
})

app.get("/campaign-history", (req, res)=> {
    res.send("HALAMAN HISTORI CAMPAIGN")
})

app.post("/login", (req, res) => {
    const {username, password} = req.body
    //console.log(req.body, "==> this is username");
})

app.post("/register", (req, res) => {
    const {orgName, orgLocation, orgDescription, orgPerson, orgPersonNumber} = req.body
    //console.log(req.body, "==> this is username");
})

app.post("/create-campaign", (req, res) => {
    const {campaignTitle, campaignTarget, campaignClass, campaignSubLink, campaignDesc, campaignHeader} = req.body
    //console.log(req.body, "==> this is username");
})

app.post("/campaign-donate", (req, res) => {
    const {valueDonate, doaDesc} = req.body
    //console.log(req.body, "==> this is username");
})

app.patch("/edit-campaign", (req, res)=> {
    res.send("HALAMAN EDIT CAMPAIGN")
})

app.patch("/edit-userdata", (req, res)=> {
    res.send("HALAMAN EDIT USERDATA")
})

    // res.status(200).json({
    //     "message" :`${username} berhasil login`
    // })


app.listen(PORT,() => {
    console.log(`SERVER NYALA ${PORT}`); // jangan lupa pake listen
})