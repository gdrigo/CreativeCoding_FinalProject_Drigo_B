// Final
// Gregoire Drigo


//large view of map
//text to image
//zoom when mouse over certain area

// function hotspotClicked() {
	//train animation
// 	//only show related image
// 	//zoom in (fades out lother boroughs)
// 	//show other subhotspot options
// }


let boroughs = []; //name, subhotspots[], location
let hotspots = []; //name, subhotspots[], location
// let soundJournal = new SoundJournal();

let brooklynText = 'BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYNBROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN  BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN';
let manhattanText = 'MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN'; 
let queensText = 'QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS';
let bronxText = 'BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX BRONX';
let statenIslandText = 'STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND';


let spotRadius = 25;

let currDepth = 0; //intiailized at zero, which means that user starts on homepage
let boroughNum = 1; //used to identify boroughs. increases by 1 each time a new borough is created

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
  	textFont('Helvetica');
	textSize(10);
	textAlign(LEFT, CENTER);
}

function draw() {
	// console.log("in draw");
	grandView(); //start at homepage

	// console.log(mouseX,mouseY);
	noLoop();
}

class Spot { //

	constructor(depth, locX,locY,name="",image="",sound="") {
		this.name = name;
		this.x = locX;
		this.y = locY;
		this.img = image;
		this.sound = sound;
		this.depth = depth;
	}

	display() { //shows all subhotspots
		//show image filled with text (use videos??)
		// drawText(cp1, brooklynText);
		image(cp1, 0, 0, width, height);
		soundJournal.display();
		drawBackButton();
		//play sound. can add sound to collection by click
	}

}

class Borough {
	// constructor(name, image, locX,locY, spots=[]){
	// 	//name, image, area
	// 	//hover
	// 	//display
	// }
	constructor(name,locX,locY,spots=[]) {
		// this.radius = (setNum);//actually dont need this. will be in display
		this.name = name;
		this.x = locX;
		this.y = locY;
		this.spots = spots;
		this.boroughNum = boroughNum; boroughNum++;
		// this.sound = sdlkj; not sure if including this 
	}

	display() { //borough view. Shows zoomed in version of borough and its hotspots 
		//iterate through subspot array, placing a faded circle at each location
		// console.log("displayingB");
  		image(water, 0, 0); //baackground
  		image(cpZoom, 0, 0); //zoomed in image
  		drawBackButton();
  		// drawText(cpZoom,brooklynText);

  		soundJournal.display();

  		//show spots
  		let s;
  		for (s in this.spots) {
			fill(255,255,255);
			// ellipseMode(CENTER);
			rectMode(CENTER);
			rect(this.spots[s].x, this.spots[s].y, 100, 40, 20);
			textSize(20);
			textAlign(CENTER);
			fill(0, 102, 153);
			text(this.spots[s].name, this.spots[s].x, this.spots[s].y);
			// ellipse(this.spots[s].x, this.spots[s].y, spotRadius, spotRadius);
			// console.log("yepThissaSpot");
		}

		// noLoop();
	}


	//creates and adds a new Spot to this.spots. 
	addSpot(locX,locY,name="Mystery Spot",image="",sound="") {
		let spotDepth = (this.boroughNum*10)+this.spots.length+1; //used to update currDepth when user viewing it 
		this.spots.push(new Spot(spotDepth,locX,locY,name,image,sound));
	}

}
 

function mouseClicked() {
	//check mouse position. if on hotspot, trigger its scene

	if (mouseX <= mn.x+15 && mouseX >= mn.x-15 && mouseY <= mn.y+15 && mouseY >= mn.y-15 ) {
		// drawText(manhattan, manhattanText);
		mn.display();
		currDepth=1;
		//add flag
	}
	if (mouseX <= mn.spots[0].x+15 && mouseX >= mn.spots[0].x-15 && mouseY <= mn.spots[0].y+15 && mouseY >= mn.spots[0].y-15 ) {
		mn.spots[0].display();
		currDepth=11;
	}

	//backbutton
	if (mouseX <= 130  && mouseX >=30  && mouseY <= 60 && mouseY >= 20 ) {
		triggerBackButton();
	}
}


function grandView() { //show larrge map and hotspots (eventually trains too)
	currDepth=0;

	image(water, 0, 0);	

	soundJournal.display();

	drawText(brooklyn,brooklynText);
	drawText(manhattan,manhattanText);
	drawText(queens,queensText);
	drawText(bronx,bronxText);
	drawText(statenisland ,statenIslandText);

	// image(brooklyn, 0, 0);
	// image(manhattan, 0, 0);
	// image(queens, 0, 0);
	// image(bronx, 0, 0);
	// image(statenisland,0,0);

	for (h in hotspots) {
		fill(255,255,255);
		ellipseMode(CENTER);
		ellipse(hotspots[h].x, hotspots[h].y, spotRadius, spotRadius);
	}

	//display sound journal 

	// console.log(mouseX,mouseY);
}


//holds all of the sounds collected (or made) by user
class SoundJournal {
	constructor() {
		this.soundCollection = [];
		this.nowPlaying = false;
	}

	display() {//draws sound journal based on how many sounds have been collected
		
		rectMode(CORNER);

		//heading of panel
		fill(255,255,255);
		rect(30, 80, 300, 40, 20, 20, 0, 0); 
		textSize(28);
		textAlign(CENTER);
		fill(0, 102, 153);
		text('Sound Journal', 180, 102);

		//main area
		fill(255,255,255);
		let heightFactor; //determined how tall the panel will be based on num sounds in journal
		if (this.soundCollection.length<=3) {
			heightFactor = 1;
		}
		else if (this.soundCollection.length<=6) {
			heightFactor = 2;
		}
		else {
			heightFactor = 3;
		}
		// console.log(heightFactor);
		rect(30, 120, 300, 80*heightFactor); 
		// textSize(32);
		// textAlign(CENTER);
		// fill(0, 102, 153);
		// text('Back', 80, 43);


		//display sounds


		//pause/play button
		fill(255,255,255);
		rect(30, 120+80*heightFactor, 200, 40, 0,0,0,20); 
		textSize(24);
		textAlign(CENTER);
		fill(0, 102, 153);
		if (!this.nowPlaying) {
			text('Play', 140, 140+80*heightFactor);
		}
		else {
			text('Pause', 140, 220);
		}


		//clear button
		fill(255,255,255);
		rect(230, 120+80*heightFactor, 100, 40, 0,0,20,0); 
		textAlign(CENTER);
		fill(0, 102, 153);
		text('Clear', 280, 140+80*heightFactor);

	}

	playSounds() { //plays all sounds in journal chronologically (maybe make an animation)

	}

	//removeSound() { //removes dragged sound from journal }
}


//move between stations

let fontSizeMax = 20;
let fontSizeMin = 10;
let spacing = 12; // line height
let kerning = 0.5; // between letters

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




/////////BACK BUTTON FUNCTIONS//////////
function drawBackButton() {
	fill(255,255,255);
	rectMode(CORNER);
	rect(30, 20, 100, 40, 20);
	textSize(24);
	textAlign(CENTER);
	fill(0, 102, 153);
	text('Back', 80, 40);
}

//when back button is clicked, user moves to previous screen based on currDepth
//currDepth = 0 ----> now on homepage
//currDepth = 1 ----> now on Brooklyn view
////////currDepth = 11 ----> now on pic 1 of Brooklyn
////////currDepth = 12 ----> now on pic 2 of Brooklyn
////////currDepth = 13 ----> now on pic 3 of Brooklyn
//currDepth = 2 ----> now on Manhattan view
//////currDepth = 21 ----> now on pic 1 of Manhattan
//////currDepth = 22 ----> now on pic 2 of Manhattan
//////currDepth = 23 ----> now on pic 3 of Manhattan
//currDepth = 3 ----> now on Queens view
//currDepth = 4 ----> now on Bronx view
//currDepth = 5 ----> now on Staten Island view
function triggerBackButton() {
	if (currDepth >= 1 && currDepth <= 5 ) { //viewing a specific borough
		currDepth == 0;
		grandView(); //back to homepage
	} 
	else if (currDepth > 5){//viewing a specific pic in a borough
		
		console.log(Math.floor(currDepth/=10));
		currDepth = Math.floor(currDepth/10)+1;
		boroughs[currDepth].display(); //back to specific borough page
	}

}

function reviewTrip() {}


let soundJournal = new SoundJournal();

let mn = new Borough("Manhattan", 505, 273);
mn.addSpot(500, 443, "Central Pk"); //Subspot(locX,locY,image,sound,name))
mn.addSpot(445, 507, "Times Sq");
mn.addSpot(470, 563, "WTC");
// let testSub = new Subspot(505,273,cp1);

boroughs.push(mn);
boroughs.push(new Borough("Brooklyn", 505, 505));
boroughs.push(new Borough("Queens", 663, 374));

// constructor(depth, locX,locY,image,sound="",name="")

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

