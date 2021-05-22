const mongoose = require("mongoose");
const Restaurant = require("./models/restaurant");

module.exports = (restaurantObj) => {
  const {
    restaurantId,
    restaurantName,
    heroImgSrc,
    photogallery,
  } = restaurantObj;

  return new Restaurant({
    restaurantId: restaurantId,
    restaurantName: restaurantName,
    heroImgSrc: heroImgSrc,
    photogallery: photogallery,
  }).save();
};
