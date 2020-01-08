//6
function inpd(x,x2)
{
	let arrayData = x.split(' ');
	let arrayData2 = x2.split(' ');
	let allMonth = ['January', 'Fabruary', 'March', 'April', 'May', 'June', 'Juli', 'August', 'September', 'October', 'November', 'December'];
	let counter = 0;
	counter.n2 = 0;
	let data1 = new Object();
	let data2 = new Object();
	while(counter != 12 && counter.n2 != 2) 
	{
		if(arrayData[0] === allMonth[counter])
		{
			data1.month = counter+1;
			counter.n2++;
		}
		if(arrayData2[0] === allMonth[counter])
		{
			data2.month = counter+1;
			counter.n2++;
		}
		counter++;
	}	
	let temp = arrayData[1].split('');
	let temp2 = arrayData2[1].split('');

	if(otDo(temp[0], 0, 9) && otDo(temp[1], 0, 9))
	{
		data1.chislo = temp[0]+temp[1];
	}
	if(otDo(temp2[0], 0, 9) && otDo(temp2[1], 0, 9))
	{
		data2.chislo = temp2[0]+temp2[1];
	}

	data1.year = arrayData[2];
	data2.year = arrayData2[2];

	temp = arrayData[3].split('');
	temp2 = arrayData2[3].split('');

	if(otDo(temp[0], 0, 9) && otDo(temp[1], 0, 9) && otDo(temp[3], 0, 9) && otDo(temp[4], 0, 9) && otDo(temp[6], 0, 9) && otDo(temp[7], 0, 9))
	{
		data1.hh = temp[0]+temp[1];
		data1.mm = temp[3]+temp[4];
		data1.ss = temp[6]+temp[7];
	}
	if(otDo(temp2[0], 0, 9) && otDo(temp2[1], 0, 9) && otDo(temp2[3], 0, 9) && otDo(temp2[4], 0, 9) && otDo(temp2[6], 0, 9) && otDo(temp2[7], 0, 9))
	{
		data2.hh = temp2[0]+temp2[1];
		data2.mm = temp2[3]+temp2[4];
		data2.ss = temp2[6]+temp2[7];
	}

	let sumSek = data1.year*31536000 + data1.month*2592000 + data1.chislo*86400 + data1.hh*3600 + data1.mm*60 + data1.ss;
	let sumSek2 =data2.year*31536000 + data2.month*2592000 + data2.chislo*86400 + data2.hh*3600 + data2.mm*60 + data2.ss;

	counter = Math.abs(sumSek - sumSek2);
	counter = counter/100;
	data1.year = izSekV(counter,31536000);
	counter = counter - data1.year*31536000;
	data1.month = izSekV(counter,2592000);
	counter = counter - data1.month*2592000;
	data1.chislo = izSekV(counter,86400);
	counter = counter - data1.chislo*86400;
	data1.hh = izSekV(counter,3600);
	counter = counter - data1.hh*3600;
	data1.mm = izSekV(counter,60);
	data1.ss = Math.round((counter - data1.mm*60)*100);

	alert(data1.year + ' ' + letGodGoda(data1.year, 0) + ' ' + data1.month + ' ' + letGodGoda(data1.month, 1) + ' ' + data1.chislo + ' ' + letGodGoda(data1.chislo, 2) + ' ' + data1.hh + ':' + data1.mm + ':' +  data1.ss);
}

// May 15, 2004 15;15;16

function otDo(z, begin, end)
{
	return (z>=begin && z<=end);
}
function izSekV(counter,x)
{
	return (counter - counter%x)/x;
}
function letGodGoda(x, da)
{
	if(otDo(x%100, 10, 20) || x%10 == 0 || (otDo(x%10, 5, 9 ) && !otDo(x%100, 15, 19)))
	{
		if(da == 0) return 'let';
		if(da == 1) return 'mesacev';
		if(da == 2) return 'dney';
	}
	if(x%10 == 1 && x%100 != 11)
	{
		if(da == 0) return 'god';
		if(da == 1) return 'mesac';
		if(da == 2) return 'den';
	}
	if(otDo(x%10, 2, 4) && !otDo(x%100, 12 , 14))
	{
		if(da == 0) return 'goda';
		if(da == 1) return 'mesaca';
		if(da == 2) return 'dna';
	}
}