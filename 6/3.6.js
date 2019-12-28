// 6

function inpd(x,x2)
{
	var dt1 = foundMonth(x,0);
	var ch1 = foundMonth(x,1);
	var gd1 = foundMonth(x,2);
	var hh1 = foundMonth(x,3);
	var mm1 = foundMonth(x,4);
	var ss1 = foundMonth(x,5);
	var dt2 = foundMonth(x2,0);
	var ch2 = foundMonth(x2,1);
	var gd2 = foundMonth(x2,2);
	var hh2 = foundMonth(x2,3);
	var mm2 = foundMonth(x2,4);
	var ss2 = foundMonth(x2,5);

	var sekk1 = gd1*31536000 + dt1*2592000 + ch1*86400 + hh1*3600 + mm1*60 + ss1;
	var sekk2 = gd2*31536000 + dt2*2592000 + ch2*86400 + hh2*3600 + mm2*60 + ss2;

	if (sekk1 >= sekk2)
		var ssss = sekk1 - sekk2;
	else 
		var ssss = sekk2 - sekk1;
	ssss = ssss/100;
	var g = (ssss - ssss%31536000)/31536000;
	ssss = ssss - g*31536000;
	var	ms = (ssss - ssss%2592000)/2592000;
	ssss = ssss - ms*2592000;
	var d = (ssss - ssss%86400)/86400;
	ssss = ssss - d*86400;
	var h = (ssss - ssss%3600)/3600;
	ssss = ssss - h*3600;
	var m = (ssss - ssss%60)/60;
	ssss = (ssss - m*60)*100;
	ssss = (ssss - ssss%1);

	sl1 = godgodalet(g,0);
	sl2 = godgodalet(ms,1);
	sl3 = godgodalet(d,2);
	alert(g + sl1 + ms + sl2 + d + sl3 + h + ':' + m + ':' + ssss);
}
function foundMonth(x,a)
{
	var chislo;
	var god;
	var has;
	var min;
	var sek;
	if(x[0]=='J' && x[1]=='a' && x[2]=='n' && x[3]=='u' && x[4]=='a' && x[5]=='r' && x[6]=='y') {var datt = 1; chislo = x[8]+x[9]; god = x[12]+x[13]+x[14]+x[15]; has = x[17]+x[18]; min = x[20]+x[21]; sek = x[23]+x[24];}
	if(x[0]=='F' && x[1]=='a' && x[2]=='b' && x[3]=='r' && x[4]=='u' && x[5]=='a' && x[6]=='r' && x[7]=='y') {var datt = 2; chislo = x[9]+x[10]; god = x[13]+x[14]+x[15]+x[16]; has = x[18]+x[19]; min = x[21]+x[22]; sek = x[24]+x[25];}
	if(x[0]=='M' && x[1]=='a' && x[2]=='r' && x[3]=='c' && x[4]=='h') {var datt = 3; chislo = x[6]+x[7]; god = x[10]+x[11]+x[12]+x[13]; has = x[15]+x[16]; min = x[18]+x[19]; sek = x[21]+x[22];}
	if(x[0]=='A' && x[1]=='p' && x[2]=='r' && x[3]=='i' && x[4]=='l') {var datt = 4; chislo = x[6]+x[7]; god = x[10]+x[11]+x[12]+x[13]; has = x[15]+x[16]; min = x[18]+x[19]; sek = x[21]+x[22];}
	if(x[0]=='M' && x[1]=='a' && x[2]=='y') {var datt = 5; chislo = x[4]+x[5]; god = x[8]+x[9]+x[10]+x[11]; has = x[13]+x[14]; min = x[16]+x[17]; sek = x[19]+x[20];}
	if(x[0]=='J' && x[1]=='u' && x[2]=='n' && x[3]=='e') {var datt = 6; chislo = x[5]+x[6]; god = x[9]+x[10]+x[11]+x[12]; has = x[14]+x[15]; min = x[17]+x[18]; sek = x[20]+x[21];}
	if(x[0]=='J' && x[1]=='u' && x[2]=='l' && x[3]=='y') {var datt = 7; chislo = x[5]+x[6]; god = x[9]+x[10]+x[11]+x[12]; has = x[14]+x[15]; min = x[17]+x[18]; sek = x[20]+x[21];}
	if(x[0]=='A' && x[1]=='u' && x[2]=='g' && x[3]=='u' && x[4]=='s' && x[5]=='t') {var datt = 8; chislo = x[7]+x[8]; god = x[11]+x[12]+x[13]+x[14]; has = x[16]+x[17]; min = x[19]+x[20]; sek = x[22]+x[23];}
	if(x[0]=='S' && x[1]=='e' && x[2]=='p' && x[3]=='t' && x[4]=='e' && x[5]=='m' && x[6]=='b' && x[7]=='e' && x[8]=='r') {var datt = 9; chislo = x[10]+x[11]; god = x[14]+x[15]+x[16]+x[17]; has = x[19]+x[20]; min = x[22]+x[23]; sek = x[25]+x[26];}
	if(x[0]=='O' && x[1]=='c' && x[2]=='t' && x[3]=='o' && x[4]=='b' && x[5]=='e' && x[6]=='r') {var datt = 10; chislo = x[8]+x[9]; god = x[12]+x[13]+x[14]+x[15]; has = x[17]+x[18]; min = x[20]+x[21]; sek = x[23]+x[24];}
	if(x[0]=='N' && x[1]=='o' && x[2]=='v' && x[3]=='e' && x[4]=='m' && x[5]=='b' && x[6]=='e' && x[7]=='r') {var datt = 11; chislo = x[9]+x[10]; god = x[13]+x[14]+x[15]+x[16]; has = x[18]+x[19]; min = x[21]+x[22]; sek = x[24]+x[25];}
	if(x[0]=='D' && x[1]=='e' && x[2]=='c' && x[3]=='e' && x[4]=='m' && x[5]=='b' && x[6]=='e' && x[7]=='r') {var datt = 12; chislo = x[9]+x[10]; god = x[13]+x[14]+x[15]+x[16]; has = x[18]+x[19]; min = x[21]+x[22]; sek = x[24]+x[25];}
	if(a == 0) return datt;
	if(a == 1) return chislo;
	if(a == 2) return god;
	if(a == 3) return has;
	if(a == 4) return min;
	if(a == 5) return sek;
}
function godgodalet(x,da)
{
	var sl;
	if(x%100 >= 10 && x%100 <= 20 || x%10 == 0 || (x%10 >= 5 && x%10 <= 9 && x%100 != 15 && x%100 != 16 && x%100 != 17 && x%100 != 18 && x%100 != 19))
	{
		if(da == 0) sl = ' let ';
		if(da == 1) sl = ' mesacev ';
		if(da == 2) sl = ' dney ';
	}
	if(x%10 == 1 && x%100 != 11)
	{
		if(da == 0) sl = ' god ';
		if(da == 1) sl = ' mesac ';
		if(da == 2) sl = ' den '
	}
	if((x%10 >= 2 && x%10 <=4) && (x%100 != 12 && x%100 != 13 && x%100 != 14))
	{
		if(da == 0) sl = ' goda ';
		if(da == 1) sl = ' mesaca ';
		if(da == 2) sl = ' dna '
	}
	return sl;
}