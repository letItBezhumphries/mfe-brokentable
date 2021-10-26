const express = require('express');
const router = express.Router();
const Restaurant = require('../../database/models/restaurant');

// @route    GET api/restaurants/:id
// @desc     Get photogallery images for restaurant by id
// @access   Public
router.get('/restaurants/:id', async (req, res) => {
  try {
    const restaurant = await Restaurant.findOne({
      restaurantId: req.params.id
    });
    console.log('express api server returns this restaurant:', restaurant);
    if (!restaurant) return res.status(400).json({ msg: 'Restaurant was not found.' });
    res.status(200).json(restaurant);
  } catch (err) {
    console.error(err.message);
    res.status(400).json({ msg: 'Restaurant was not found.' });
  }
});

// @route    GET api/restaurants/:id/photos
// @desc     Get photogallery images for restaurant by id
// @access   Public
router.get('/restaurants/:id/photos', async (req, res) => {
  try {
    const restaurant = await Restaurant.findOne({
      restaurantId: req.params.id
    });
    console.log('express api server returns this restaurants photos:', restaurant);
    if (!restaurant) return res.status(400).json({ msg: 'Restaurant was not found.' });
    res.status(200).json(restaurant);
  } catch (err) {
    console.error(err.message);
    res.status(400).json({ msg: 'Restaurant was not found.' });
  }
});

// @route    GET api/restaurants/search/:name
// @desc     Get photogallery of images for restaurant by searching the name of restaurant
// @access   Public
router.get('/restaurants/search/:name', async (req, res) => {
  const restaurantName = req.params.name;
  try {
    const restaurant = await Restaurant.findOne({
      restaurantName: restaurantName
    });
    if (!restaurant) return res.status(400).json({ msg: 'Restaurant was not found.' });
    res.status(200).json(restaurant);
  } catch (err) {
    console.error(err.message);
    res.status(400).json({ msg: 'Restaurant was not found.' });
  }
});

// @route    GET api/restaurants
// @desc     Get all restaurants photogalleries
// @access   Public
router.get('/restaurants', async (req, res) => {
  try {
    const restaurants = await Restaurant.find().sort({ name: 1 });
    res.status(200).json(restaurants);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
