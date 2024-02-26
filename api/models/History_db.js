import Mongoose from "mongoose";

const { Schema, Model } = Mongoose;

const HistorySchema = new Schema({
  sold_quantity: { type: Number, min: 0 },
  profits: { type: Number, min: 0 },
  date: { type: String },
  products: {
    drinks: {
      bottle_of_coca_cola: { type: Number, min: 0 },
      bottle_of_water_500ml: { type: Number, min: 0 },
      bottle_of_water_1500ml: { type: Number, min: 0 },
      pocari_sweat: { type: Number, min: 0 },
      ohishi_red: { type: Number, min: 0 },
      ohishi_yellow: { type: Number, min: 0 },
      coca_cola: { type: Number, min: 0 },
      red_sting: { type: Number, min: 0 },
      yellow_sting: { type: Number, min: 0 },
      anchor_white: { type: Number, min: 0 },
      anchor_red: { type: Number, min: 0 },
      ganzberg: { type: Number, min: 0 },
      vigor: { type: Number, min: 0 },
      carabao: { type: Number, min: 0 },
      bacchus: { type: Number, min: 0 },
      champion: { type: Number, min: 0 },
    },
    noodles: {
      cup_of_mama_minced_pork: { type: Number, min: 0 },
      cup_of_mama_palo_duck: { type: Number, min: 0 },
      cup_of_mama_tom_yum: { type: Number, min: 0 },
      cup_of_mama_tom_yum_shrimp: { type: Number, min: 0 },
      pack_of_mama_minced_pork: { type: Number, min: 0 },
      pack_of_mama_tom_yum: { type: Number, min: 0 },
      pack_of_indomie_mi_goreng: { type: Number, min: 0 },
      pack_of_indomie_mi_goreng_spicy: { type: Number, min: 0 },
    },
    bathroom_supplies: {
      viso_washing_powder_500g: { type: Number, min: 0 },
      viso_washing_powder_100g: { type: Number, min: 0 },
      sunlight_dishWashing_liquid: { type: Number, min: 0 },
    },
    ingredients: {
      pack_of_salt: { type: Number, min: 0 },
      pack_of_msg: { type: Number, min: 0 },
      bottle_of_an_ox_soy_sauce: { type: Number, min: 0 },
      bottle_of_oil: { type: Number, min: 0 },
      bottle_of_fish_sauce: { type: Number, min: 0 },
    },
  },
});

const HistoryModel = Mongoose.model("Products", HistorySchema);

export default HistoryModel;
