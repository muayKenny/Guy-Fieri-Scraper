var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var readlineSync = require('readline-sync');
var app = express();

//console.log('lol')

//All the web scraping magic will happen here
url = 'https://en.wikipedia.org/wiki/The_New_York_Times'

request(url, function (error, response, html) {

  if (!error) {
    var $ = cheerio.load(html)
    //res.send(html)
    var fire = $('.firstHeading').text()
    console.log(fire + " welcomes you to flavortown")


  }
})



//console.log('Magic happens on port 8081');

exports = module.exports = app;