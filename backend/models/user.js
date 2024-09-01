const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema(
  {
    userName: { type: String, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    owned: [{ type: mongoose.Schema.Types.ObjectId, ref: "Album" }],
    wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: "Album" }],
  },
  { timestamps: true }
)
