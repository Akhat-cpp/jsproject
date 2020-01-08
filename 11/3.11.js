// 11

function inpd(str)
{
	let arraySHshp = str.split(',');
	let strSHshp = sArrayVString(arraySHshp);
	let arrayCleanNa05= strSHshp.split('https://');
	let strCleanNa05 = sArrayVString(arrayCleanNa05);
	let strClean= strCleanNa05.split('http://');
	alert(strClean[2]);
}
sArrayVString(s)
{
	let counter = 0;
	let strp = ' ';
	while(counter < s.length)
	{
		strp = strp + ' ' + s[counter] + ' ';
		counter++;
	}
	console.log(counter);
	return strp;
}