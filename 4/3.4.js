// 4
let hh = 0;
let mm = 0;
let min = 0;
let ss = 0;

function inpd(x)
{
	ss = osdel(x);
	min = del(x,ss);
	x=min;

	if(min >= 60)
	{
		x = osdel(min);
		hh = del(min,x)
	}
	alert(hh + ' : ' + x + ' : ' +ss);
	x=hh=min=ss=0;
}

function osdel(z)
{
	return z%60;
}
function del(x, c)
{
	let b = (x-c)/60;
	return b;
}