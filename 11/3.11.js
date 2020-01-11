// 11
function inpd(str)
{
	//убираем_протоколы_из_ссылок_
	let arrayBezZapatyh = str.split(','); //из_строки_убираем_запятые_и_получаем_массив_без_запятых_
	let strBezZapatyh = arrayBezZapatyh.join(' ');//из_массива_делаем_строку_
	// alert(strBezZapatyh)
	let arrayBezHttps = strBezZapatyh.split(' https://');//из_строки_убираем_https_и_получаем_массив_без_https_
	let strBezHttps = arrayBezHttps.join(' ');//из_массива_делаем_строку_
	// alert(strBezHttps)
	let arrayBezHttp = strBezHttps.split('http://');//из_строки_убираем_http_и_получаем_массив_без_http_
	// alert(arrayBezHttp)
	let arrayClean = arrayBezHttp.sort();//сортируем_массив_

	alert(arrayClean[1]);//и_здесь_должна_вывестись_2я_ссылка_(((но_выводится_весь_очищенный_массив(((_
}