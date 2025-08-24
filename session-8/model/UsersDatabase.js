const mongoose = require("mongoose");
const UsersSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "username is required" ],
  },
  email: {
    type: String,
    required: true,
    unique: [true, "this email has been used please change it" ],
  },
  password: {
    type: String,
    required: true,
  },
  frineds: [
    {
      type: String,
      required: true,
    },
  ],
});

module.exports = mongoose.model("Users", UsersSchema);
