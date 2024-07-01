const knex = require('knex')
const config = require('./knexfile')

const db = knex(config.development)

const dbName = "challengeGold"

db.raw('CREATE DATABASE ??', [dbName])
.then(_ => {
    console.log('DB CREATED SUCESSFULY');
})
.catch(_ => {
    console.log('DB FAILED CREATED');
})
.finally(_ => {
    db.destroy();
})

//DROP DATABASE KNEX

// db.raw("DROP DATABASE ??",[dbName])
// .then(_ => {
//     console.log("DB BERHASIL");
// })
// .catch(_=> {
//     console.log("DB GAGAL DIHAPUS");
// })
// .finally(_ => {
//     db.destroy()
// })