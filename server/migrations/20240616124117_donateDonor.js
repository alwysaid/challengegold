/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('donateDonor', function (table) {
        table.increments('idDonateDonor').primary()// primary key ;
        table.integer('idCampaign').unsigned().notNullable().references('idCampaign').inTable('newCampaign').onDelete('CASCADE').onUpdate('CASCADE') //bilangan harus positif, ini buat foreign key
        table.string('nama').notNullable()
        table.string('domisili').notNullable()
        table.string('email').notNullable().unique()
        table.string('noHandphone').notNullable().unique()
        table.string('password').notNullable()
        table.integer('nominalDonate').notNullable()
        table.string('metodePembayaran').notNullable()
        table.timestamps(true, true);
        table.string('ucapanDonate').notNullable()
        table.boolean('anonymDonate')
        table.string('fotoProfil')
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("donateDonor")
};
