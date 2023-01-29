require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const morgan = require('morgan')
const connectDB = require("./config/connectDB");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
PORT = process.env.PORT;
mongoose.set("strictQuery", true);
connectDB();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(morgan('dev'))
app.use("/", express.static(path.join(__dirname, "public")));
app.use("/", require("./routes/root"));
app.use('/blog',require('./routes/blogRoutes'))
app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  }else if(req.accepts("json")){
    res.json({message:"404 Not Found"})
  }else{
    res.type("txt").send("404 Not Found")
  }
});

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
  });
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});
