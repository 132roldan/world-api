var app = {};
var apiLib = require("./lib/api");
var fs = require("fs");

app.config = {
  country: process.argv[2].charAt(0).toUpperCase() + process.argv[2].slice(1),
  
};
app.init = () => {
  const response = apiLib.getAPI(app.config.country );
  
};
app.init();
