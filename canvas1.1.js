let canvas = document.getElementById('c1');
let ctx = canvas.getContext('2d');

let pi = Math.PI;

ctx.arc(100, 50, 25, 0, pi/2, true);
ctx.stroke();