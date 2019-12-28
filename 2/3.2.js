let x = 0;
let z = -1000;
let sum = 0; 

let arr = [];

while(z != 1001)
{
	arr[x] = z%10;
	if(arr[x] == 2 || arr[x] == 3 || arr[x] == 7 || arr[x] == -2 || arr[x] == -3 || arr[x] == -7)
	{
		sum = sum + arr[x];
	}
	x++;
	z++;
}

document.write(sum);