const mongoose = require("mongoose")

const statusSchema = mongoose.Schema({
  validated: Boolean,
  rejected: Boolean,
  pending: Boolean,
})

const userSchema = mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "restaurants" }], // Example clé étrangère
  applicationStatus: statusSchema, // Example sous-document
})

const User = mongoose.model("users", userSchema)

module.exports = User