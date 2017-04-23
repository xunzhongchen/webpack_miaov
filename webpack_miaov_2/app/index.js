
/*
define(['./app.js'],function (str) {
    document.body.innerHTML='<div>'+str+'</div>';
})*/


var str=require('./app.js');

/*require('style!css!./css/reset.css');*/
require('style!css!./css/style.css');



document.body.innerHTML='<div>'+str+'</div>';
