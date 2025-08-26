const mongoose = require("mongoose");
const UsersSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "A username is required"],
  },
  email: {
    type: String,
    required: true,
    unique: [true, "this email hase been userd please change it "],
  },
  password: {
    type: String,
    required: true,
  },
  friends: [
    {
      type: String,
      required: true,
    },
  ],
});

module.exports = mongoose.model("Users", UsersSchema);