const mongoose = require("mongoose");
require("dotenv").config();
const plm = require("passport-local-mongoose");

mongoose.connect(process.env.MongoUrl).then(console.log("Database Connected"));

const userSchema = mongoose.Schema({
  username: String,
  name: String,
  email: String,
  password: String,
  profileImage: String,
  bio: String,
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "post" }],
});

userSchema.plugin(plm);

module.exports = mongoose.model("user", userSchema);
