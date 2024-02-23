import Mongoose from "mongoose";

const { Schema, Model } = Mongoose;

const HistorySchema = new Schema({
  sold_quantity: Number,
  profits: Number,
  date: Date,
  products: {
    drinks: {
      coca_cola: Number,
      pocari_sweat: Number,
      red_sting: Number,
      yellow_sting: Number,
      anchor: Number,
    },
  },
});

const HistoryModel = Mongoose.model("Products", HistorySchema);

export default HistoryModel;
