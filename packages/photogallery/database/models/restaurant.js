const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
  restaurantId: String,
  restaurantName: String,
  heroImgSrc: String,
  photogallery: Array,
});

const Restaurant = mongoose.model("restaurant", RestaurantSchema);

module.exports = Restaurant;
