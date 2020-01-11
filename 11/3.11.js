// 11
function inpd(str)
{
	let arraySHshp = str.split(','); //из_строки_убираем_запятые_и_получаем_массив_без_запятых_
	// alert(arraySHshp)
	let strSHshp = sArrayVString(arraySHshp);//из_массива_делаем_строку_
	// alert(strSHshp)
	let arrayCleanNa05 =  strSHshp.split('https://');//из_строки_убираем_https_и_получаем_массив_без_https_
	// alert(arrayCleanNa05)
	let strCleanNa05 = sArrayVString(arrayCleanNa05);//из_массива_делаем_строку_
	// alert(strCleanNa05)
	let arrayClean = strCleanNa05.split('http://');//из_строки_убираем_http_и_получаем_массив_без_http_
	// alert(arrayClean)
	arrayClean.sort();//сортируем_массив_
	alert(arrayClean[1]);//и_здесь_должна_вывестись_2я_ссылка_(((но_нет(((_
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