/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('newCampaign').del()
  await knex('newCampaign').insert([
    {idCampaign: 1, idPenggalangAccount: 1, judulCampaign: "Bantu M2R merumput" , klasifikasiCampaign: "Sosial" , targetCampaign: 100000000 , subLinkCampaign: "bd.com/m2rwan", deskripsiCampaign: "ini adalah blablabla" , gambarCampaign1: "" , gambarCampaign2: "" , gambarCampaign3: "" , gambarCampaign4: "" , gambarCampaign5: "", gambarCampaign6: "", gambarCampaign7: "", gambarCampaign8: "" , gambarCampaign9: "" , gambarCampaign10: "" , gambarCampaignHeader: "" },
    {idCampaign: 2, idPenggalangAccount: 1, judulCampaign: "Bantu M2R membumi" , klasifikasiCampaign: "Sosial" , targetCampaign: 75000000 , subLinkCampaign: "bd.com/m2rcaw", deskripsiCampaign: "ini adalah cisciscis", gambarCampaign1: "" , gambarCampaign2: "" , gambarCampaign3: "" , gambarCampaign4: "" , gambarCampaign5: "", gambarCampaign6: "", gambarCampaign7: "", gambarCampaign8: "" , gambarCampaign9: "" , gambarCampaign10: "" , gambarCampaignHeader: ""  }
  ]);
};
