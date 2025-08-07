const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StduentSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "username is required"],
      unique: true,
      trim: true,
      minlength: [3, "username must  3 character"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
      trim: true,
      match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/],
    },
    password: {
      type: String,
      required: [true, "password is required"],
      minlength: [6, "min length of password must  6 "],
    },
    phone: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("studentform", StduentSchema);
