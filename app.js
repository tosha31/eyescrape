const request = require('request');
const cheerio = require('cheerio');


var url = "https://www.reddit.com/hot/";

request(url, function (err, res, html){
  if(!err) {
    var $ = cheerio.load(html);
    var allItems = $('#siteTable').children();
    var items = [];
    allItems.each(function (index){

     var result = $('#siteTable').children().eq(index).children().eq(4).find('a.title').text();
     if(result !== "") { //if result is not empty string the push to array
      items.push(result);
    }
    

    });
    console.log(items);
  }
});

