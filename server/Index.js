const express = require("express");
const cors = require("cors");
const port = 4004;
const app = express();

app.use(express.json());
app.use(cors());

const {
  getHouses,
  deleteHouse,
  createHouse,
  updateHouse,
} = require("./controller");

app.get(`/api/houses`, getHouses);
app.delete(`/api/houses/:id`, deleteHouse);
app.post(`/api/houses`, createHouse);
app.put(`/api/houses/:id`, updateHouse);

app.listen(port, () => console.log(`running on 4004`));
