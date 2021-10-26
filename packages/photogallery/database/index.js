const mongoose = require('mongoose');
const seedData = require('../seed/photogalleries.json');
const seedMongodb = require('../seed/seedMongodb');
const { dropCollection } = require('./dropCollection');

let db3;

if (process.env.NODE_ENV !== 'production') {
  console.log('in development!!');
  require('dotenv').config({ path: "../.deploy.env"});
  db3 = `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOSTNAME}:${process.env.MONGO_PORT}/${process.env.DATABASE_NAME}?authSource=admin`
} else {
  console.log('in production!!');
  require('dotenv').config({ path: "../.production.env"});
  db3 = `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOSTNAME}:${process.env.MONGO_PORT}/${process.env.DATABASE_NAME}?authSource=admin`
}

// for development use db
// const db = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.DEV_ATLAS_PROJECT}.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`;

// for attempt with docker compose
// const db2 = `mongodb://mongo:27017/photogallery-srv`;

// for attempt with multipass
// const db3 = `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOSTNAME}:${process.env.MONGO_PORT}/${process.env.DATABASE_NAME}?authSource=admin`

const connectDB = async () => {
  try {
    await mongoose.connect(db3, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });

    console.log('MongoDB Connected...');

    await dropCollection();

    await seedMongodb(seedData);
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
