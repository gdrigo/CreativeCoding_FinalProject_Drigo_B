// Final
// Gregoire Drigo


//large view of map
//text to image
//zoom when mouse over certain area
// function zoom(hotspotCode){ zooms into clicked hotspot on map
	//call hotspot 
// }

// function hotspotClicked() {
	//train animation
// 	//only show related image
// 	//zoom in (fades out lother boroughs)
// 	//show other subhotspot options
// }

//source slang


let hotspots = []; //name, subhotspots[], location
let soundBag = [];

let brooklynText = 'BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYNBROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN  BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN';
let fontSizeMax = 20;
let fontSizeMin = 10;
let spacing = 12; // line height
let kerning = 0.5; // between letters

let spotRadius = 25;

let scaleBy = 1.5;



let cp1 = "assets/centralPark1.jpg";

let fullMap;
let brooklyn;
let manhattan;
let queens;
let bronx;
let statenisland;
let water;

function preload() {


	fullMap = loadImage("assets/nycMap.png");
	brooklyn = loadImage("assets/brooklyn.png");
	manhattan = loadImage("assets/manhattan.png");
	queens = loadImage("assets/queens.png");
	bronx = loadImage("assets/bronx.png");
	statenisland = loadImage("assets/statenisland.png");
	water = loadImage("assets/water.png");

	cpZoom = loadImage("assets/centralParkZoom.png");
	cp1 = loadImage("assets/centralPark1.jpg");
}


function setup() {
	createCanvas(913,843);
  	background(0,0,0);
  	// pixelDensity(1);
  	textFont('Times');
	textSize(10);
	textAlign(LEFT, CENTER);
}

function draw() {

	// // scale(scaleBy);
	// background(0);
	// // translate(-centralPark.x/2, -centralPark.y/2);
	grandView();
	// console.log(mouseX,mouseY);
	noLoop();
}

class Subspot {

	constructor(locX,locY,image,sound="",name="") {
		this.name = name;
		this.x = locX;
		this.y = locY;
		this.img = image;
		this.sound = sound;
	}

	display() { //shows all subhotspots
		//show image filled with text (use videos??)
		// drawText(cp1, brooklynText);
		image(cp1, 0, 0, width, height);
		//play sound
	}

}

 
class Hotspot { //cluster of Subspots
	constructor(name,locX,locY,subspots=[]) {
		// this.radius = (setNum);//actually dont need this. will be in display
		this.name = name;
		this.x = locX;
		this.y = locY;
		this.subspots = subspots;
		// this.sound = sdlkj; not sure if including this 
	}

	// display() { //shows all subhotspots

	// 	//fading circle at this.x,this.y ACTUALLY NO. MANAGE THAT IN A GLOBAL DISPLAY FUNC FOR GENRAL SCENE
	// }

	display() { //zooms in and shows subspots
		//iterate through subspot array, placing a faded circle at each location

		//zoom in

		
		// translate(this.x, this.y);
  		// scale(scaleBy);
  		// translate(-mx, -my);

  		// translate();
  		// console.log("zooming in");
  		image(water, 0, 0);
  		image(cpZoom, 0, 0);
  		// drawText(cpZoom,brooklynText);

  		//show subspots
  		let s;
  		for (s in this.subspots) {
			fill(255,255,255);
			ellipseMode(CENTER);
			ellipse(this.subspots[s].x, this.subspots[s].y, spotRadius, spotRadius);
			console.log("yep");
		}


		//show subspots
		// noLoop();

	}

	addSubspot(locX,locY,image="",sound="",name="") {
		this.subspots.push(new Subspot(locX,locY,image,sound,name));
	}

	// this.clicked = function() {
	// 	if(mouseX <= this.x+15 && mouseX >= this.x-15 && mouseY <= this.y+15 && mouseY >= this.y-15 ) {

	// 	}
	// }


}


function mouseClicked() {
	//check mouse position. if on hotspot, trigger its scene

	if (mouseX <= centralPark.x+15 && mouseX >= centralPark.x-15 && mouseY <= centralPark.y+15 && mouseY >= centralPark.y-15 ) {
		centralPark.display();
		//add flag
	}
	if (mouseX <= centralPark.subspots[0].x+15 && mouseX >= centralPark.subspots[0].x-15 && mouseY <= centralPark.subspots[0].y+15 && mouseY >= centralPark.subspots[0].y-15 ) {
		centralPark.subspots[0].display();
	}

	// if (scene == 1) {
	// 	grillGlows.push(new GrillGlow);

	// 	if (grillGlows.length >= 15){
	// 		scene = 2;
	// 		//call staticy effect
	// 		// for(let i == 0; i < 500; i++) {
	// 		// 	// for ()
	// 		// }
	// 	}
	// }
	

}



function grandView() { //show larrge map and hotspots (eventually trains too)
	fill(100);
	rect(12,45,22);


	image(water, 0, 0);	
	// drawText(brooklyn,brooklynText);
	// drawText(manhattan,brooklynText);
	// drawText(queens,brooklynText);
	// drawText(bronx,brooklynText);
	// drawText(statenisland ,brooklynText);

	image(brooklyn, 0, 0);
	image(manhattan, 0, 0);
	image(queens, 0, 0);
	image(bronx, 0, 0);
	image(statenisland,0,0);

	for (h in hotspots) {
		fill(255,255,255);
		ellipseMode(CENTER);
		ellipse(hotspots[h].x, hotspots[h].y, spotRadius, spotRadius);
	}
	// console.log(mouseX,mouseY);
}

//views:
//grand
//hotpsot
//subspot

//move between stations

function drawText(img,textArr) {
	var x = 0;
	var y = 10;
	var counter = 0;

	while (y < height) {
		// translate position (display) to position (image)
	    img.loadPixels();
	    // get current color
	    var imgX = round(map(x, 0, width, 0, img.width));
	    var imgY = round(map(y, 0, height, 0, img.height));
	    var c = color(img.get(imgX, imgY));
	    var greyscale = round(red(c) * 0.222 + green(c) * 0.707 + blue(c) * 0.071);

	    push();
	    translate(x, y);

	    var fontSize = map(greyscale, 0, 255, fontSizeMax, fontSizeMin);
	    fontSize = max(fontSize, 1);
	    textSize(fontSize);
	    fill(c);


	    var letter = textArr.charAt(counter);
	    text(letter, 0, 0);
	    var letterWidth = textWidth(letter) + kerning;
	    // for the next letter ... x + letter width
	    x += letterWidth;

	    pop();

	    // linebreaks
	    if (x + letterWidth >= width) {
	      x = 0;
	      y += spacing;
	    }

	    counter++;
	    if (counter >= textArr.length) {
	      counter = 0;
	    }
	}
	// noLoop();
	//adapted from the Generative Design textbook
	//http://www.generative-gestaltung.de/2/sketches/?01_P/P_4_3_2_01
	//replaces the pixels of an image with text. Maintains the colors of all spots within the image
}




let centralPark = new Hotspot("Central Park", 505, 273);
centralPark.addSubspot(500, 443); //Subspot(locX,locY,image,sound,name))
centralPark.addSubspot(445, 507);
centralPark.addSubspot(470, 563);
// let testSub = new Subspot(505,273,cp1);

hotspots.push(centralPark);
hotspots.push(new Hotspot("Prospect Park", 505, 505));
hotspots.push(new Hotspot("Flushing Meadows", 663, 374));


//Things to look at
//https://editor.p5js.org/J-Cake/sketches/1r1wmWO60 














// let brooklynText = 'BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYNBROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN  BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN';
// var fontSizeMax = 20;
// var fontSizeMin = 10;
// var spacing = 12; // line height
// var kerning = 0.5; // between letters

// var img;

// function preload() {
//   img = loadImage('data/pic3.jpg');

//   brooklyn = loadImage("data/brooklyn.png");
//   manhattan = loadImage("data/manhattan.png");
//   queens = loadImage("data/queens.png");
//   bronx = loadImage("data/bronx.png");
//   statenisland = loadImage("data/statenisland.png");
//   water = loadImage("data/water.png");
// }

// function setup() {
//   createCanvas(913,843);
//   textFont('Times');
//   textSize(10);
//   textAlign(LEFT, CENTER);
//   print(img.width + ' • ' + img.height);
// }

// function draw() {
//   background(255);

//   image(water,0,0);
//   // drawText(water,brooklynText);
//   drawText(brooklyn,brooklynText);
//   drawText(manhattan,brooklynText);
//   drawText(queens,brooklynText);
//   drawText(bronx,brooklynText);
//   drawText(statenisland ,brooklynText);
//   noLoop();
// }

// function drawText(img,textArr) {
//   var x = 0;
//   var y = 10;
//   var counter = 0;

//   while (y < height) {
//     // translate position (display) to position (image)
//       img.loadPixels();
//       // get current color
//       var imgX = round(map(x, 0, width, 0, img.width));
//       var imgY = round(map(y, 0, height, 0, img.height));
//       var c = color(img.get(imgX, imgY));
//       var greyscale = round(red(c) * 0.222 + green(c) * 0.707 + blue(c) * 0.071);

//       push();
//       translate(x, y);

//       var fontSize = map(greyscale, 0, 255, fontSizeMax, fontSizeMin);
//       fontSize = max(fontSize, 1);
//       textSize(fontSize);
//       fill(c);


//       var letter = textArr.charAt(counter);
//       text(letter, 0, 0);
//       var letterWidth = textWidth(letter) + kerning;
//       // for the next letter ... x + letter width
//       x += letterWidth;

//       pop();

//       // linebreaks
//       if (x + letterWidth >= width) {
//         x = 0;
//         y += spacing;
//       }

//       counter++;
//       if (counter >= textArr.length) {
//         counter = 0;
//       }
//   }
//   // noLoop();
//   //adapted from the Generative Design textbook
//   //http://www.generative-gestaltung.de/2/sketches/?01_P/P_4_3_2_01
//   //replaces the pixels of an image with text. Maintains the colors of all spots within the image
// }

