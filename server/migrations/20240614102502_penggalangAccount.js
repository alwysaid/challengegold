/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  
   return knex.schema.createTable('penggalangAccount', function (table) {
        table.increments('idPenggalangAccount').primary();
        table.string('namaOrganisasi').notNullable();
        table.enu('jenisOrganisasi', ["NGO", "Start-Up", "UMKM"]).notNullable()
        table.string('lokasiOrganisasi').notNullable()
        table.string('deskripsiOrganisasi').notNullable()
        table.string('picOrganisasi').notNullable()
        table.string('noPicOrganisasi').notNullable().unique()
        table.string('emailOrganisasi').notNullable().unique()
        table.string('passwordEmailOrganisasi').notNullable()
        table.string('logoOrganisasi')
        table.timestamps(true, true);
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("penggalangAccount")
};
