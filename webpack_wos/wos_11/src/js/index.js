
var $=require('jquery');


//commonjs
var stuJson=require('./stu.json' );


var txt="my name is "+stuJson.name;


//AMD
define(["./stu.json"],function (stuJson) {
    console.log(stuJson)
})



$(function () {
    $('#welcome').html(txt);
})