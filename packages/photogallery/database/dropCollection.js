const mongoose = require("mongoose");

async function dropCollection() {
  const collections = Object.keys(mongoose.connection.collections);
  for (const collectionName of collections) {
    const collection = mongoose.connection.collections[collectionName];
    try {
      await collection.drop();
    } catch (err) {
      console.log("error:", err.message);
    }
  }
}

module.exports = {
  dropCollection,
};
