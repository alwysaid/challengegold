/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('newCampaign', function (table) {
        table.increments('idCampaign').primary()// primary key ;
        table.integer('idPenggalangAccount').unsigned().notNullable().references('idPenggalangAccount').inTable('penggalangAccount').onDelete('CASCADE').onUpdate('CASCADE') //bilangan harus positif, ini buat foreign key
        table.string('judulCampaign').notNullable()
        table.enu('klasifikasiCampaign',['Sosial', 'Kebencanaan', 'Medis', 'Pendidikan', 'Modal Usaha', 'Lingkungan', 'Pendanaan Projek', 'Pemberdayaan Masyarakat']).notNullable()
        table.integer('targetCampaign').notNullable()
        table.string('subLinkCampaign').notNullable()
        table.string('deskripsiCampaign').notNullable()
        table.string('gambarCampaign1')
        table.string('gambarCampaign2')
        table.string('gambarCampaign3')
        table.string('gambarCampaign4')
        table.string('gambarCampaign5')
        table.string('gambarCampaign6')
        table.string('gambarCampaign7')
        table.string('gambarCampaign8')
        table.string('gambarCampaign9')
        table.string('gambarCampaign10')
        table.string('gambarCampaignHeader')
      })

    
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("newCampaign")
};
