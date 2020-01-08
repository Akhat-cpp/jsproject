// 7

function inpd(x)
{
	let ms = x[5]+x[6];
	let dn = x[8]+x[9];
	let b = 0;
	let counter = 0;
	let counter2 = 3;

	b = retb(ms, dn, counter, counter2, 21, 19, 0, b); counter++; counter2++;
	b = retb(ms, dn, counter, counter2, 20, 20, 0, b); counter++; counter2++;
	b = retb(ms, dn, counter, counter2, 21, 20, 0, b); counter++; counter2++;
	b = retb(ms, dn, counter, counter2, 21, 22, 0, b); counter++; counter2++;
	b = retb(ms, dn, counter, counter2, 23, 22, 0, b); counter++; counter2++;
	b = retb(ms, dn, counter, counter2, 23, 22, 0, b); counter++; counter2++;
	b = retb(ms, dn, counter, counter2, 23, 22, 0, b); counter++; counter2++;
	b = retb(ms, dn, counter, counter2, 23, 21, 0, b); counter++; counter2++;
	b = retb(ms, dn, counter, counter2, 22, 21, 1, b); counter++; counter2++;
	b = retb(ms, dn, counter, counter2, 22, 19, 0, b); counter++; 	
	counter2=1;
	b = retb(ms, dn, counter, counter2, 20, 18, 0, b); counter++; counter2++;
	b = retb(ms, dn, counter, counter2, 19, 20, 0, b); counter++; counter2++;

	coutt(b);
}
function coutt(z)
{
	let arrayNameZnak =['oven', 'telec', 'bliznecu', 'rak', 'lev', 'deva', 'vesu', 'scorpion', 'strelec', 'kozerog', 'vodoley', 'rubu'];
	let arrayLink =['7.1.png', '7.2.png', '7.3.png', '7.4.png', '7.5.png', '7.6.png', '7.7.png', '7.8.png', '7.9.png', '7.10.png', '7.11.png', '7.12.png'];
	let imgg = document.querySelector('img');
	let counter = 0;

	while(counter != 12)
	{
		if (z == counter+1)
		{
			imgg.src = arrayLink[counter];
			imgg.classList.remove('unvisible');
			alert(arrayNameZnak[counter]);
		}			
		counter++;
	}
}
function otDo(z, begin, end)
{
	return (z>=begin && z<=end);
}
function retb(ms, dn, counter, counter2, ot, doo, kostul, b)
{
	let defaultt = 0;
	if(((ms==counter2 && otDo(dn, ot, 31)) || (ms==counter2+1 && otDo(dn, 1, doo))) && kostul==0) return counter+1;
	else defaultt++;
	if(((ms==counter2 && otDo(dn, ot, 31)) || (ms==counter2-11 && otDo(dn, 1, doo))) && kostul==1) return counter+1;
	else defaultt++;
	if(defaultt==2) return b;
}