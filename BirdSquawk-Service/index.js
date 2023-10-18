const express = require("express");
const app = express();
const { randomBytes } = require("crypto");

app.use(express.json());

const squawkData = {};

app.post("/birdssqawk", (req, res) => {
  console.log("came");
  const id = randomBytes(8).toString("hex");
  const { title } = req.body;
  squawkData[id] = { id, title };
  res.status(201).send(squawkData[id]);
});

app.listen(5000, () => {
  console.log("BirdSqauwk is listening on port 5000");
});
