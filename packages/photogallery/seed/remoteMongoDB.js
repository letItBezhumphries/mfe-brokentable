const restaurantIds = require("./restaurant_ID.json");
const fs = require("fs");
const faker = require("faker");

// generates a random total number of photos per restaurant
var generateRandomPhotoCount = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getRandomPhotoSubjectType = (types) => {
  let randomIndex = generateRandomPhotoCount(0, types.length - 1);
  return types[randomIndex];
};

const subjects = ["Interior", "Exterior", "Food", "Drink", "Bar"];


//this function takes in a number and returns an array populated with the given number of unsplash urls
var createPhotoCollection = function (totalPhotos, urlString, restaurantId, subjectsArr) {
  var output = [];
  let index = 1;
  while (totalPhotos > 0) {
    output.push({
      imgSrc: urlString,
      index: index,
      isFlagged: false,
      restaurant: restaurantId,
      dinedOnDate: faker.date.past(),
      subjectType: getRandomPhotoSubjectType(subjectsArr),
      description: faker.lorem.sentence(),
      username: faker.name.firstName(),
    });
    totalPhotos -= 1;
    index += 1;
  }
  return output;
};

// creates the array of restaurant photo dummy data
var photoGallerySeeder = function (restaurantIds) {
  let photoGalleries = [];
  for (var i = 0; i < restaurantIds.length; i++) {
    let photosArray = createPhotoCollection(
      generateRandomPhotoCount(1, 55),
      "https://source.unsplash.com/collection/4239193/400x400/",
      restaurantIds[i].ID,
      subjects
    );
    photoGalleries.push({
      restaurantId: restaurantIds[i].ID,
      restaurantName: restaurantIds[i].name,
      heroImgSrc: "https://source.unsplash.com/collection/4239193/1450x600/",
      photogallery: photosArray,
    });
  }
  return photoGalleries;
};

const galleries = photoGallerySeeder(restaurantIds);

const writeDataToFile = (data, path) => {
  try {
    fs.writeFileSync(path, JSON.stringify(data));
  } catch (err) {
    console.error(err);
  }
};

// console.log('data generated:', galleries);

writeDataToFile(galleries, "./seed/photogalleries.json");

module.exports = galleries;
