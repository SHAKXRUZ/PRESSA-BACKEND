// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import elonRouter from "./router/elon_router.js";
// import adminRouter from "./router/admin_router.js";

// dotenv.config();
// const PORT = process.env.PORT || 5001;

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.use("/elon", elonRouter);
// app.use("/admin", adminRouter);

// app.listen(PORT, () => {
//   console.log("http://localhost:" + PORT + " is running");
// });

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const elonRouter = require("./router/elon_router.js");
const aminRouter = require("./router/admin_router.js");

dotenv.config();
const PORT = process.env.PORT || 5001;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/elon", elonRouter);
app.use("/admin", aminRouter);

app.listen(PORT, () => {
  console.log("http://localhost:" + PORT + " is running");
});
