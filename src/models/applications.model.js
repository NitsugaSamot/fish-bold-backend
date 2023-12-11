const { Schema, model } = require("mongoose")

const UserSchema = new Schema({
  platform: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  link: {
    type: String, //Pensar en usar Buffer
    required: true,
  },
  state: {
    type: String,
    enum: ["prueba tecnica", "Primer entrevista", "enviado"],
    default: "enviado",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  }
});



module.exports = model("User", UserSchema);