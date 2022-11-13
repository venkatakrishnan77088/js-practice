var ud=parseInt(prompt("enter the upstream distance:"));
var ut=parseInt(prompt("enter the upstream time:"));
var dd=parseInt(prompt("enter the downstream distance:"));
var dt=parseInt(prompt("enter the downstream time:"));
ups=ud/ut;
dss=dd/dt;
b=1/2*(dss+ups);

alert("speed of the boat :"+b+"km/hr");
