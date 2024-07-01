/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('donorAccount', function (table) {
        table.increments('idDonorAccount').primary()// primary key ;
        table.integer('idDonateDonor').unsigned().notNullable().references('idDonateDonor').inTable('donateDonor').onDelete('CASCADE').onUpdate('CASCADE') //bilangan harus positif, ini buat foreign key
        table.timestamps(true, true);
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("donorAccount")
};
