const knex = require('knex')
const knexFile = require("./knexfile")
const knexfile = require('./knexfile')

const dbKnex = knex(knexfile.development)

module.exports = dbKnex