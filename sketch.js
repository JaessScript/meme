let canvas;
let next;

let meme;
let x, y;

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	setup();
}

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0, 0);
	canvas.style('z-index', '-1');

	next = select('#next');
	next.position(windowWidth / 2, 5);
	next.style('font-size', '1.5em');
	setInterval(changeColor, 500);

	x = windowWidth / 3;
	y = windowHeight / 5;
	meme = select('#meme');
	meme.position(x, y);

	setInterval(changePosition, 200);
}

function changeColor() {
	let colors = ['Red', 'Orange', 'Yellow', 'MediumSpringGreen', 'RoyalBlue', 'Purple', 'Pink', 'LightCyan'];
	let col = random(colors);
	next.style('background-color', col);
}

function changePosition() {
	meme.position(x, y);
	x = constrain(x + random(-8, 8), 0, windowWidth);
	y = constrain(y + random(-8, 8), 0, windowHeight);
}

function draw() {
	background(30);
}