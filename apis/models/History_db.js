import Mongoose from "mongoose";

const { Schema, Model } = Mongoose;

const HistorySchema = new Schema({
  sold_quantity: Number,
  profits: Number,
  date: Date,
  products: {
    drinks: {
      bottle_of_coca_cola: Number,
      bottle_of_pocari_sweat: Number,
      bottle_of_ohishi_red: Number,
      bottle_of_ohishi_yellow: Number,
      bottle_of_water_500ml: Number,
      bottle_of_water_1500ml: Number,
      can_of_coca_cola: Number,
      can_of_red_sting: Number,
      can_of_yellow_sting: Number,
      can_of_anchor_white: Number,
      can_of_anchor_red: Number,
      can_of_ganzberg: Number,
      can_of_vigor: Number,
      can_of_carabao: Number,
      can_of_bacchus: Number,
      can_of_champion: Number,
    },
    noodles: {
      cup_of_mama_minced_pork: Number,
      cup_of_mama_palo_duck: Number,
      cup_of_mama_tom_yum: Number,
      cup_of_mama_tom_yum_shrimp: Number,
      pack_of_mama_minced_pork: Number,
      pack_of_mama_tom_yum: Number,
      pack_of_indomie_mi_goreng: Number,
      pack_of_indomie_mi_goreng_spicy: Number,
    },
    bathroom_supplies: {
      pack_of_viso_washing_powder_500g: Number,
      pack_of_viso_washing_powder_100g: Number,
      bottle_of_sunlight_dishWashing_liquid: Number,
    },
    ingredients: {
      pack_of_salt: Number,
      pack_of_msg: Number,
      bottle_of_an_ox_soy_sauce: Number,
      bottle_of_oil: Number,
      bottle_of_fish_sauce: Number,
    },
  },
});

const HistoryModel = Mongoose.model("Products", HistorySchema);

export default HistoryModel;
