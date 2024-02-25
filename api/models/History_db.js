import Mongoose from "mongoose";

const { Schema, Model } = Mongoose;

const HistorySchema = new Schema({
  sold_quantity: { type: Number, default: 0 },
  profits: { type: Number, default: 0 },
  date: { type: Date, default: Date.now, createtime: true },
  products: {
    drinks: {
      bottle_of_coca_cola: { type: Number, default: 0 },
      bottle_of_water_500ml: { type: Number, default: 0 },
      bottle_of_water_1500ml: { type: Number, default: 0 },
      pocari_sweat: { type: Number, default: 0 },
      ohishi_red: { type: Number, default: 0 },
      ohishi_yellow: { type: Number, default: 0 },
      coca_cola: { type: Number, default: 0 },
      red_sting: { type: Number, default: 0 },
      yellow_sting: { type: Number, default: 0 },
      anchor_white: { type: Number, default: 0 },
      anchor_red: { type: Number, default: 0 },
      ganzberg: { type: Number, default: 0 },
      vigor: { type: Number, default: 0 },
      carabao: { type: Number, default: 0 },
      bacchus: { type: Number, default: 0 },
      champion: { type: Number, default: 0 },
    },
    noodles: {
      cup_of_mama_minced_pork: { type: Number, default: 0 },
      cup_of_mama_palo_duck: { type: Number, default: 0 },
      cup_of_mama_tom_yum: { type: Number, default: 0 },
      cup_of_mama_tom_yum_shrimp: { type: Number, default: 0 },
      pack_of_mama_minced_pork: { type: Number, default: 0 },
      pack_of_mama_tom_yum: { type: Number, default: 0 },
      pack_of_indomie_mi_goreng: { type: Number, default: 0 },
      pack_of_indomie_mi_goreng_spicy: { type: Number, default: 0 },
    },
    bathroom_supplies: {
      viso_washing_powder_500g: { type: Number, default: 0 },
      viso_washing_powder_100g: { type: Number, default: 0 },
      sunlight_dishWashing_liquid: { type: Number, default: 0 },
    },
    ingredients: {
      pack_of_salt: { type: Number, default: 0 },
      pack_of_msg: { type: Number, default: 0 },
      bottle_of_an_ox_soy_sauce: { type: Number, default: 0 },
      bottle_of_oil: { type: Number, default: 0 },
      bottle_of_fish_sauce: { type: Number, default: 0 },
    },
  },
});

const HistoryModel = Mongoose.model("Products", HistorySchema);

export default HistoryModel;
