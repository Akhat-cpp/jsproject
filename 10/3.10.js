// 10

function inpd(x)
{
	let arrayNumbers = x.split('');
	alert(arraySum(arrayNumbers));
}
function arraySum(arrayNumbers)
{
	let sum = 0;
	let counter = 0;
	while(counter < arrayNumbers.length)
	{
		sum += +arrayNumbers[counter];
		counter++;
	}
	return sum;
}