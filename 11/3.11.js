// 11
function inpd(str)
{
	let arraySHshp = str.split(',');
	// alert(arraySHshp)
	let strSHshp = sArrayVString(arraySHshp);
	// alert(strSHshp)
	let arrayCleanNa05 =  strSHshp.split('https://');
	// alert(arrayCleanNa05)
	let strCleanNa05 = sArrayVString(arrayCleanNa05);
	// alert(strCleanNa05)
	let arrayClean = strCleanNa05.split('http://');
	// alert(arrayClean)
	arrayClean.sort();
	alert(arrayClean[1]);
}
function sArrayVString(s)
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