const mongoose = require("mongoose")

const albumSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    artist: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },

    genre: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Album = mongoose.model("Album", albumSchema)

module.exports = Album
