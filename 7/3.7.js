// 7

function inpd(x)
{
	let ms = x[5]+x[6];
	let dn = x[8]+x[9];
	let b = 0;

	if((ms==3 && dn>=21 && dn<=31) || (ms==4 && dn>=1 && dn<=19)) b = 1;
	if((ms==4 && dn>=20 && dn<=31) || (ms==5 && dn>=1 && dn<=20))  b = 2;
	if((ms==5 && dn>=21 && dn<=31) || (ms==6 && dn>=1 && dn<=20))  b = 3;
	if((ms==6 && dn>=21 && dn<=31) || (ms==7 && dn>=1 && dn<=22))  b = 4;
	if((ms==7 && dn>=23 && dn<=31) || (ms==8 && dn>=1 && dn<=22))  b = 5;
	if((ms==8 && dn>=23 && dn<=31) || (ms==9 && dn>=1 && dn<=22))  b = 6;
	if((ms==9 && dn>=23 && dn<=31) || (ms==10 && dn>=1 && dn<=22))  b = 7;
	if((ms==10 && dn>=23 && dn<=31) || (ms==11 && dn>=1 && dn<=21))  b = 8;
	if((ms==11 && dn>=22 && dn<=31) || (ms==12 && dn>=1 && dn<=21))  b = 9;
	if((ms==12 && dn>=22 && dn<=31) || (ms==1 && dn>=1 && dn<=19))  b = 10;
	if((ms==1 && dn>=20 && dn<=31) || (ms==2 && dn>=1 && dn<=18))  b = 11;
	if((ms==2 && dn>=19 && dn<=31) || (ms==3 && dn>=1 && dn<=20))  b = 12;

	coutt(b);
}
function coutt(z)
{
	let imgg = document.querySelector('img');
	if(z == 1) 
	{
		imgg.src = '7.1.png';
		imgg.classList.remove('unvisible');
		alert('oven');
	}
	if(z == 2)
	{
		imgg.src = '7.2.png';
		imgg.classList.remove('unvisible');
		alert('telec');
	}
	if(z == 3)
	{
		imgg.src = '7.3.png';
		imgg.classList.remove('unvisible');
		alert('bliznecu');
	}	
	if(z == 4)
	{
		imgg.src = '7.4.png';
		imgg.classList.remove('unvisible');
		alert('rak');
	}
	if(z == 5)
	{
		imgg.src = '7.5.png';
		imgg.classList.remove('unvisible');
		alert('lev');
	}
	if(z == 6)
	{
		imgg.src = '7.6.png';
		imgg.classList.remove('unvisible');
		alert('deva');
	}
	if(z == 7)
	{
		imgg.src = '7.7.png';
		imgg.classList.remove('unvisible');
		alert('vesu');
	}
	if(z == 8)
	{
		imgg.src = '7.8.png';
		imgg.classList.remove('unvisible');
		alert('scorpion');
	}
	if(z == 9)
	{
		imgg.src = '7.9.png';
		imgg.classList.remove('unvisible');
		alert('strelec');
	}
	if(z == 10)
	{
		imgg.src = '7.10.png';
		imgg.classList.remove('unvisible');
		alert('kozerog');
	}
	if(z == 11)
	{
		imgg.src = '7.11.png';
		imgg.classList.remove('unvisible');
		alert('vodoley');
	}
	if(z == 12)	
	{
		imgg.src = '7.12.png';
		imgg.classList.remove('unvisible');
		alert('rubu');
	}
}