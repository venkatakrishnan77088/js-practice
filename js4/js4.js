
//simple interest

var p=parseInt(prompt("enter principle value"));
var i=parseInt(prompt("enter rate of interest value1"));
var i1=parseInt(prompt("enter rate of interest value2"));
var t=parseInt(prompt("enter time value"));
var g=p*i*t;
var g1=p*i1*t

var x=g/100;
var x1=g1/100;
var f=x-x1;
alert(f);