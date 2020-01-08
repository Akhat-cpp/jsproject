// 8

function inpd(x)
{
	let arrayDanon = x.split('*');

	let counter = 0;
	let counter2 = 0;
	let blackOrWhite = 0;
	let black = document.getElementById("img1");
	let white = document.getElementById("img2");
	let clblack, clwhite;
	let pdiv = document.getElementById("div1");

	while(counter != arrayDanon[0])
	{
		while(counter2 != arrayDanon[1])
		{ 			
			if(blackOrWhite == 2) blackOrWhite = 0;
			clblack = black.cloneNode(true);	
			clblack.classList.remove("unvisible");
			if(blackOrWhite == 0) pdiv.append(clblack);
			clwhite = white.cloneNode(true);
			clwhite.classList.remove("unvisible");
			if(blackOrWhite == 1) pdiv.append(clwhite);
 			blackOrWhite++;
 			counter2++;
		}
		pdiv.append('\n');
		counter2 = 0;
		counter++;
	}
}