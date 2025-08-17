const express = require("express");
const cors = require("cors");
const data = require("./data");

const app = express();
app.use(cors());
const PORT = 3000;

app.get("/data", (req, res) => {
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
