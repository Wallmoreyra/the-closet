const server = require("./server.js");
const PORT = 3001;
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const userRoutes = require("./routes/routesIndex.js");

mongoose
  .connect("mongodb://localhost:27017/thecloset", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Conexion establecida"))
  .catch((err) => console.log("Error", err));

app.use(express.json());
app.use(userRoutes);

server.listen(PORT, () => console.log(`Server raised on port: ${PORT}`));
