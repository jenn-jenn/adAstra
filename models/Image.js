const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
  postId: {
    type: Schema.Types.ObjectId,
    ref: "post"
  },
  date: {
    type: Date,
    default: Date.now
  },
  fileName: {
    type: String,
    // required: true
  },
  file_key: {
    type: String
  }
});

const Image = mongoose.model("images", ImageSchema);
module.exports = Image;
