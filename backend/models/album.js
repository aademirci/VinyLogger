const mongoose = require('mongoose')

const AlbumSchema = new mongoose.Schema(
    {
        artist: { type: String, required: true },
        title: { type: String, required: true },
        year: { type: String, required: true },
        genre: { type: String, required: true },
    }, { toJSON: { virtuals: true } }
)

const Album = mongoose.model('Album', AlbumSchema)

module.exports = Album
