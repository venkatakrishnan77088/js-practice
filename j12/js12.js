var r=parseInt(prompt("enter rate of interest"));
var p=parseInt(prompt("enter principle amount"));
var y=parseInt(prompt("enter year "));
var z=prompt("enter 1 if you want calculate simle interst amount  or enter 0 ");

if(z==1){
	let si=p*r*y;
	let si1=si/100;
	alert("simple interest is:"+si1);
}else{
	alert("thank you using this feature");
}
