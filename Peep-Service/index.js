const express = require("express");
const app = express();
const { randomBytes } = require("crypto");

app.use(express.json());

const peepsSquawkId = {};

app.post("/birdssqawk/peeps/:id", (req, res) => {
  console.log("ac");
  const id = randomBytes(8).toString("hex");
  const { peep } = req.body;
  const peeps = peepsSquawkId[req.params.id] || [];
  peeps.push({ id: peep.id, peep });
  peepsSquawkId[req.params.id] = peeps;
  res.status(201).send(squawkData[id]);
});

app.get("/birdssqawk/:id/peeps", (req, res) => {
  res.status(201).send(peepsSquawkId[req.params.id] || []);
});

app.listen(5100, () => {
  console.log("Peep service is listening on port 5100");
});
