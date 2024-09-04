const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    owned: [{ type: mongoose.Schema.Types.ObjectId, ref: "Album" }],
    wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: "Album" }],
  }, { toJSON: { virtuals: true } }
)

const User = mongoose.model('User', UserSchema)

module.exports = User