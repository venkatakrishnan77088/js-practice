var s1=parseInt(prompt("car moving speed"));
var t=parseInt(prompt("enter the old time"));
d=s1*t;                                              //finding distace
crs=parseInt(prompt("reduced car speed :"));
s=s1-crs;  
t1=d/s;                                               //reduce speed 15 km/hr what time will cover same distance
alert(" time is :"+t1+"hours");