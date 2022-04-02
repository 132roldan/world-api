const axios = require("axios");
var fs = require("fs");
var api = {};


api.getAPI = (country) => {

  const options = {
    method: 'GET',
    url: 'https://world-population.p.rapidapi.com/population',
    params: {country_name: country},
    headers: {
      'X-RapidAPI-Host': 'world-population.p.rapidapi.com',
      'X-RapidAPI-Key': '0097e28d00msh520a86c687471ffp117aa3jsn587bc72f4bd7'
    }
  };
  return axios.request(options).then(function (response) {
    console.log(response.data.body);
    
    fs.appendFile(
      __dirname + "/logs/log.txt",
     ''+ response.data.body.country_name + ' has population of ' + response.data.body.population + ' habitants and is ranking: ' + response.data.body.ranking + ' in number of habitants corresponding in ' + response.data.body.world_share.toFixed(2) + '% of the population of the planet\r\n',
      function (err) {
        if (err) console.log("error", err);
        console.log("File Updated!");
      }
    );
  }).catch(function (error) {
    console.error(error);
  });
};
module.exports = api;
