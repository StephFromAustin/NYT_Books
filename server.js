// DEPENDENCIES 
const express = require('express');
const app = express();
// const path = require ('path');
const mongoose = require('mongoose');
const routes = require('./routes');
const PORT = process.env.PORT || 3001;

// MIDDLEWARE AND STATIC ASSETS
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
    // STATIC
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// API ROUTES
app.use("/api", apiRoutes);

// SEND REQUEST FUNCTION
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// LISTEN FUNCTION 
app.listen(PORT, function() {
  console.log(`The server is now listening on: ${PORT}!`);
});

