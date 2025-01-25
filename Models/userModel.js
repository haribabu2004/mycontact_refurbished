const  mongoose  = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter name"],
    },
    email: {
      type: String,
      required: [true, "Enter email id"],
      unique: [true, "email must be unique"],
    },
    password: {
      type: String,
      required: [true, "Enter password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User",userSchema)