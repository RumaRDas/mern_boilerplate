const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// import routes
const authRoutes = require("./routes/auth");

//middleware
app.use("/api", authRoutes);

const port = process.env.port || 8000;

app.listen(port, () => {
  console.log(`API is running on port ${port}`);
});
