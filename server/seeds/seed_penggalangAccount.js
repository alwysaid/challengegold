/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('penggalangAccount').del()
  await knex('penggalangAccount').insert([
    {idPenggalangAccount: 1, namaOrganisasi: 'M2R', jenisOrganisasi: 'NGO' , lokasiOrganisasi: "Bandung", deskripsiOrganisasi: "Wanieund" , picOrganisasi: "Maman Teman", noPicOrganisasi: "0123123", emailOrganisasi: "m2r@mail.com", passwordEmailOrganisasi: "12345", logoOrganisasi: "" },
    {idPenggalangAccount: 2, namaOrganisasi: 'GBR', jenisOrganisasi: 'Start-Up' , lokasiOrganisasi: "Garut", deskripsiOrganisasi: "Cawgas" , picOrganisasi: "Atep Step", noPicOrganisasi: "054646535", emailOrganisasi: "gbr@mail.com", passwordEmailOrganisasi: "54321", logoOrganisasi: "" }
  ]);
};
