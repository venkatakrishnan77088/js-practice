var ud=parseInt(prompt("enter the upstream distance:"));
var ut=parseInt(prompt("enter the upstream time:"));
var dd=parseInt(prompt("enter the downstream distance:"));
var dt=parseInt(prompt("enter the downstream time:"));
ups=ud/ut;
dss=dd/dt;
ss=1/2*(dss-ups);
t=5/ss;
alert("it take :"+t+"hour");
