//module in the same directory as shirt.js
define(['jquery'], function($) {
  //return an object to define the "my/shirt" module
  $.get('../BDO-Cooking/js/data/data.json', function(data) {
    // do something with your data
    console.log(data);
  });
});
