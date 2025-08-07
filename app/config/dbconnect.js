const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGODB_URL);
    if (db) {
      console.log("Database is connection is succesfull");
    }
  } catch (err) {
    console.log(err, "Database is not connected");
  }
};
module.exports = dbConnection;
