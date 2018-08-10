const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// dummy data for testing

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/loginList", {useMongoClient: true});

const test = [
  {
    name: "Jeff",
    score: 4444,
    date: new Date(Date.now())
  }, {
    name: "dan",
    score: 44443,
    date: new Date(Date.now())
  }, {
    name: "test",
    score: 41,
    date: new Date(Date.now())
  }, {
    name: "yah trick yah",
    score: 135,
    date: new Date(Date.now())
  }, {
    name: "herro",
    score: 1354,
    date: new Date(Date.now())
  }, {
    name: "yo fool",
    score: 13,
    date: new Date(Date.now())
  }, {
    name: "chatura",
    score: 13542,
    date: new Date(Date.now())
  }, {
    name: "stoo",
    score: 1,
    date: new Date(Date.now())
  }, {
    name: "heyyy",
    score: 3,
    date: new Date(Date.now())
  },

  {
    name: "heyyy",
    score: 23546023456,
    date: new Date(Date.now())
  },
  {
    name: "heyyyals;kdjf;lajsdf;l",
    score: 3,
    date: new Date(Date.now())
  },
  {
    name: "heyyy",
    score: 2,
    date: new Date(Date.now())
  }

];

db
  .Score
  .remove({})
  .then(() => db.Score.insertMany(test))
  .then(data => {
    console.log(" records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
