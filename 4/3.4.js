// 4
let x = 55;
let hh = 0;
let mm = 0;
let min = 0;
let ss = 0;

function inpd(x)
{
	ss = osdel(x);
	min = del(x,ss);
	if(min >= 60)
	{
		mm = osdel(min);
		hh = del(min,mm)
		alert(hh + ' : ' + mm + ' : ' +ss);
	}
	else
	{
		alert(hh + ' : ' + min + ' : ' +ss);
	}
	x=hh=mm=min=ss=0;
}

function osdel(z)
{
	z = z%60;
	return z;
}
function del(x , c)
{
	let b = (x-c)/60;
	return b;
}