/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('donateDonor').del()
  await knex('donateDonor').insert([
    {idDonateDonor: 1, idCampaign: 1, nama: "Doni", domisili: "Bandung", email: "donidn@mail.com", noHandphone: "081222738239", password: "11111", nominalDonate : 20000 , metodePembayaran: "Virtual Account", ucapanDonate: "Bismillah", anonymDonate : true },
    {idDonateDonor: 2, idCampaign: 2, nama: "Deni", domisili: "Jakarta", email: "denidn@mail.com", noHandphone: "08124434543", password: "22222", nominalDonate : 50000 , metodePembayaran: "QRIS", ucapanDonate: "Suksesss", anonymDonate : true },
    {idDonateDonor: 3, idCampaign: 1, nama: "Dani", domisili: "Tasik", email: "danidn@mail.com", noHandphone: "081254634367", password: "33333", nominalDonate : 100000 , metodePembayaran: "Shoppeepay", ucapanDonate: "Doakan", anonymDonate : true }
  ]);
};
