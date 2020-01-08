// 5

function inpd(x)
{
	alert(x + ' ' + letGodGoda(x));
	x=0;
}
function otDo(z, begin, end)
{
	return (z>=begin && z<=end);
}
function letGodGoda(x)
{
	if(otDo(x%100, 10, 20) || x%10 == 0 || (otDo(x%10, 5, 9 ) && !otDo(x%100, 15, 19)))
	{
		return('let');
	}
	if(x%10 == 1 && x%100 != 11)
	{
		return('god');
	}
	if(otDo(x%10, 2, 4) && !otDo(x%100, 12 , 14))
	{
		return('goda');
	}
}

