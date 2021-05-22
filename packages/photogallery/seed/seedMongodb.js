const _ = require("lodash");
const mongoose = require("mongoose");
const createRestaurant = require("../database/createRestaurant");

module.exports = async (restaurantsArray) => {
  const results = await Promise.all(
    _.forEach(restaurantsArray, createRestaurant)
  );
  return results;
};
