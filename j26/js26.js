var dd=parseInt(prompt("enter the man downstream distance:"));
var ud=parseInt(prompt("enter the man upstream speed distnce:"));
var t=parseInt(prompt("enter the time:"));
s1=dd/t;
s2=ud/t;
var s=1/2*(s1-s2);
alert("stream speed is:"+s);
