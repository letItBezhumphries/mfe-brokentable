const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PhotoSchema = new Schema({
  imgSrc: String,
  isFlagged: {
    type: Boolean,
    default: false,
  },
  restaurant: {
    type: Schema.Types.ObjectId,
    ref: "restaurants",
  },
  dinedOnDate: Date,
  subjectType: String,
  description: String,
  username: String,
});

const Photo = mongoose.model("photo", PhotoSchema);

module.exports = Photo;
