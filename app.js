// app.js
require("dotenv").config();
const express = require("express");
const connectDB = require("./db");
const paymentRoutes = require("./routes/payment");

//AS
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

connectDB(); // Conecta a MongoDB

app.use("/api/v1", paymentRoutes); // Rutas de pago

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
