// import express from "express";
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const Productrouter = require("./routers/products");

const app = express();

//Middlewares.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use("/api/products", Productrouter);

app.get("/", (req, res) => {
  res.send("Home page");
});

mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => {
    console.log("Connected!");
    app.listen(process.env.PORT || 3000, () => {
      console.log(`App running on port ${process.env.PORT || 3000}`);
    });
  })
  .catch(() => {
    console.log("Connection failed");
  });
