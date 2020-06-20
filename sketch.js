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
	next.style('font-size', '1.5em');
	setInterval(changeColor, 500);

	meme = select('#meme');
	if (windowWidth > windowHeight) {
		x = windowWidth / 3;
		y = windowHeight / 5;
		meme.position(x, y);
		setInterval(changePosition, 200);
	} else {
		meme.style('width','80%');
		let v = getInitialPositioning();
		x = v.x;
		y = v.y;
		meme.position(x, y);
		setInterval(changePositionMobile, 200);
	}
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

// For mobile version
function getInitialPositioning() {
	let element = document.getElementById("meme");
	let bodyRect = document.body.getBoundingClientRect();
	let elemRect = element.getBoundingClientRect();
	let offset_top_y = elemRect.top - bodyRect.top;
	let offset_left_x = elemRect.left - bodyRect.left;
	return createVector(offset_left_x, offset_top_y);
}

function changePositionMobile() {
	meme.position(x, y + 50);
	x = constrain(x + random(-8, 8), 0, windowWidth);
	y = constrain(y + random(-8, 8), 15, windowHeight);
}

function draw() {
	background(30);
}