// Final
// Gregoire Drigo


//Travel throughout NYC taking pictures for your album along the way


let boroughs = []; //name, subhotspots[], location
// let soundJournal = new SoundJournal();

let brooklynText = 'BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYNBROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN  BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN BROOKLYN';
let lbText = 'EVERY LABOR DAY, THE CARIBBEAN DIASPORA FROM THROUHGOUT THE US GATHER IN BROOKLYN TO CELEBRATE THEIR HERITAGE THROUGH FOOD, DANCE, PARADES, PARTIES, AND TRADITIONS SUCH AS JOUVERT.EVERY LABOR DAY, THE CARIBBEAN DIASPORA FROM THROUHGOUT THE US GATHER IN BROOKLYN TO CELEBRATE THEIR HERITAGE THROUGH FOOD, DANCE, PARADES, PARTIES, AND TRADITIONS SUCH AS JOUVERT.EVERY LABOR DAY, THE CARIBBEAN DIASPORA FROM THROUHGOUT THE US GATHER IN BROOKLYN TO CELEBRATE THEIR HERITAGE THROUGH FOOD, DANCE, PARADES, PARTIES, AND TRADITIONS SUCH AS JOUVERT.EVERY LABOR DAY, THE CARIBBEAN DIASPORA FROM THROUHGOUT THE US GATHER IN BROOKLYN TO CELEBRATE THEIR HERITAGE THROUGH FOOD, DANCE, PARADES, PARTIES, AND TRADITIONS SUCH AS JOUVERT.EVERY LABOR DAY, THE CARIBBEAN DIASPORA FROM THROUHGOUT THE US GATHER IN BROOKLYN TO CELEBRATE THEIR HERITAGE THROUGH FOOD, DANCE, PARADES, PARTIES, AND TRADITIONS SUCH AS JOUVERT.';
let bkbgText = 'EVERY YEAR AT THE END OF SUMMER MY BEST FRIENDS AND I WALK THE BROOKLYN BRIDGE.EVERY YEAR AT THE END OF SUMMER MY BEST FRIENDS AND I WALK THE BROOKLYN BRIDGE.EVERY YEAR AT THE END OF SUMMER MY BEST FRIENDS AND I WALK THE BROOKLYN BRIDGE.EVERY YEAR AT THE END OF SUMMER MY BEST FRIENDS AND I WALK THE BROOKLYN BRIDGE.EVERY YEAR AT THE END OF SUMMER MY BEST FRIENDS AND I WALK THE BROOKLYN BRIDGE.EVERY YEAR AT THE END OF SUMMER MY BEST FRIENDS AND I WALK THE BROOKLYN BRIDGE.EVERY YEAR AT THE END OF SUMMER MY BEST FRIENDS AND I WALK THE BROOKLYN BRIDGE.EVERY YEAR AT THE END OF SUMMER MY BEST FRIENDS AND I WALK THE BROOKLYN BRIDGE.EVERY YEAR AT THE END OF SUMMER MY BEST FRIENDS AND I WALK THE BROOKLYN BRIDGE.EVERY YEAR AT THE END OF SUMMER MY BEST FRIENDS AND I WALK THE BROOKLYN BRIDGE.EVERY YEAR AT THE END OF SUMMER MY BEST FRIENDS AND I WALK THE BROOKLYN BRIDGE.EVERY YEAR AT THE END OF SUMMER MY BEST FRIENDS AND I WALK THE BROOKLYN BRIDGE.';

let manhattanText = 'MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN MANHATTAN'; 
let cpText = 'I LOVE BIKING WITH FRIENDS I LOVE BIKING WITH FRIENDS I LOVE BIKING WITH FRIENDS I LOVE BIKING WITH FRIENDSI LOVE BIKING WITH FRIENDS I LOVE BIKING WITH FRIENDS I LOVE BIKING WITH FRIENDSI LOVE BIKING WITH FRIENDS I LOVE BIKING WITH FRIENDS I LOVE BIKING WITH FRIENDSI LOVE BIKING WITH FRIENDS I LOVE BIKING WITH FRIENDS I LOVE BIKING WITH FRIENDSI LOVE BIKING WITH FRIENDS I LOVE BIKING WITH FRIENDS I LOVE BIKING WITH FRIENDSI LOVE BIKING WITH FRIENDS I LOVE BIKING WITH FRIENDS I LOVE BIKING WITH FRIENDSI LOVE BIKING WITH FRIENDS I LOVE BIKING WITH FRIENDS I LOVE BIKING WITH FRIENDSI LOVE BIKING WITH FRIENDS I LOVE BIKING WITH FRIENDS I LOVE BIKING WITH FRIENDSI LOVE BIKING WITH FRIENDS I LOVE BIKING WITH FRIENDS I LOVE BIKING WITH FRIENDSI LOVE BIKING WITH FRIENDS I LOVE BIKING WITH FRIENDS I LOVE BIKING WITH FRIENDSI LOVE BIKING WITH FRIENDS I LOVE BIKING WITH FRIENDS I LOVE BIKING WITH FRIENDSI LOVE BIKING WITH FRIENDS';
let shText = 'I LOVE EXPLORING SOHO. SO MANY COOL BUILDINGS, STORES, AND THE COBBLE STONE STREETS!I LOVE EXPLORING SOHO. SO MANY COOL BUILDINGS, STORES, AND THE COBBLE STONE STREETS!I LOVE EXPLORING SOHO. SO MANY COOL BUILDINGS, STORES, AND THE COBBLE STONE STREETS!I LOVE EXPLORING SOHO. SO MANY COOL BUILDINGS, STORES, AND THE COBBLE STONE STREETS!I LOVE EXPLORING SOHO. SO MANY COOL BUILDINGS, STORES, AND THE COBBLE STONE STREETS!I LOVE EXPLORING SOHO. SO MANY COOL BUILDINGS, STORES, AND THE COBBLE STONE STREETS!I LOVE EXPLORING SOHO. SO MANY COOL BUILDINGS, STORES, AND THE COBBLE STONE STREETS!I LOVE EXPLORING SOHO. SO MANY COOL BUILDINGS, STORES, AND THE COBBLE STONE STREETS!I LOVE EXPLORING SOHO. SO MANY COOL BUILDINGS, STORES, AND THE COBBLE STONE STREETS!I LOVE EXPLORING SOHO. SO MANY COOL BUILDINGS, STORES, AND THE COBBLE STONE STREETS!I LOVE EXPLORING SOHO. SO MANY COOL BUILDINGS, STORES, AND THE COBBLE STONE STREETS!';

let queensText = 'QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS QUEENS';
let airpText = 'THE GATEWAY BACK HOME TO DOMINICA AND GUADELOUPE.THE GATEWAY BACK HOME TO DOMINICA AND GUADELOUPE.THE GATEWAY BACK HOME TO DOMINICA AND GUADELOUPE.THE GATEWAY BACK HOME TO DOMINICA AND GUADELOUPE.THE GATEWAY BACK HOME TO DOMINICA AND GUADELOUPE.THE GATEWAY BACK HOME TO DOMINICA AND GUADELOUPE.THE GATEWAY BACK HOME TO DOMINICA AND GUADELOUPE.THE GATEWAY BACK HOME TO DOMINICA AND GUADELOUPE.THE GATEWAY BACK HOME TO DOMINICA AND GUADELOUPE.THE GATEWAY BACK HOME TO DOMINICA AND GUADELOUPE.THE GATEWAY BACK HOME TO DOMINICA AND GUADELOUPE.THE GATEWAY BACK HOME TO DOMINICA AND GUADELOUPE.THE GATEWAY BACK HOME TO DOMINICA AND GUADELOUPE.THE GATEWAY BACK HOME TO DOMINICA AND GUADELOUPE.THE GATEWAY BACK HOME TO DOMINICA AND GUADELOUPE.THE GATEWAY BACK HOME TO DOMINICA AND GUADELOUPE.THE GATEWAY BACK HOME TO DOMINICA AND GUADELOUPE.THE GATEWAY BACK HOME TO DOMINICA AND GUADELOUPE.THE GATEWAY BACK HOME TO DOMINICA AND GUADELOUPE.';
let tennisText = 'MY MOM AND I GO TO THE US OPEN EVERY YEAR.MY MOM AND I GO TO THE US OPEN EVERY YEAR.MY MOM AND I GO TO THE US OPEN EVERY YEAR.MY MOM AND I GO TO THE US OPEN EVERY YEAR.MY MOM AND I GO TO THE US OPEN EVERY YEAR.MY MOM AND I GO TO THE US OPEN EVERY YEAR.MY MOM AND I GO TO THE US OPEN EVERY YEAR.MY MOM AND I GO TO THE US OPEN EVERY YEAR.MY MOM AND I GO TO THE US OPEN EVERY YEAR.MY MOM AND I GO TO THE US OPEN EVERY YEAR.MY MOM AND I GO TO THE US OPEN EVERY YEAR.MY MOM AND I GO TO THE US OPEN EVERY YEAR.MY MOM AND I GO TO THE US OPEN EVERY YEAR.MY MOM AND I GO TO THE US OPEN EVERY YEAR.MY MOM AND I GO TO THE US OPEN EVERY YEAR.MY MOM AND I GO TO THE US OPEN EVERY YEAR.MY MOM AND I GO TO THE US OPEN EVERY YEAR.MY MOM AND I GO TO THE US OPEN EVERY YEAR.MY MOM AND I GO TO THE US OPEN EVERY YEAR.MY MOM AND I GO TO THE US OPEN EVERY YEAR.MY MOM AND I GO TO THE US OPEN EVERY YEAR.MY MOM AND I GO TO THE US OPEN EVERY YEAR.';

let bronxText = 'THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX THE BRONX';
let zooText = 'A PIC FROM THE FIRST TIME I TOOK MY COUSIN TO THE ZOO.A PIC FROM THE FIRST TIME I TOOK MY COUSIN TO THE ZOO.A PIC FROM THE FIRST TIME I TOOK MY COUSIN TO THE ZOO.A PIC FROM THE FIRST TIME I TOOK MY COUSIN TO THE ZOO.A PIC FROM THE FIRST TIME I TOOK MY COUSIN TO THE ZOO.A PIC FROM THE FIRST TIME I TOOK MY COUSIN TO THE ZOO.A PIC FROM THE FIRST TIME I TOOK MY COUSIN TO THE ZOO.A PIC FROM THE FIRST TIME I TOOK MY COUSIN TO THE ZOO.A PIC FROM THE FIRST TIME I TOOK MY COUSIN TO THE ZOO.A PIC FROM THE FIRST TIME I TOOK MY COUSIN TO THE ZOO.A PIC FROM THE FIRST TIME I TOOK MY COUSIN TO THE ZOO.A PIC FROM THE FIRST TIME I TOOK MY COUSIN TO THE ZOO.A PIC FROM THE FIRST TIME I TOOK MY COUSIN TO THE ZOO.A PIC FROM THE FIRST TIME I TOOK MY COUSIN TO THE ZOO.A PIC FROM THE FIRST TIME I TOOK MY COUSIN TO THE ZOO.A PIC FROM THE FIRST TIME I TOOK MY COUSIN TO THE ZOO.A PIC FROM THE FIRST TIME I TOOK MY COUSIN TO THE ZOO.';

let statenIslandText = 'STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND STATEN ISLAND';
let ferryText = 'NOT A FAN OF THIS BOROUGH, BUT THE FERRY IS COOL I GUESS.NOT A FAN OF THIS BOROUGH, BUT THE FERRY IS COOL I GUESS.NOT A FAN OF THIS BOROUGH, BUT THE FERRY IS COOL I GUESS.NOT A FAN OF THIS BOROUGH, BUT THE FERRY IS COOL I GUESS.NOT A FAN OF THIS BOROUGH, BUT THE FERRY IS COOL I GUESS.NOT A FAN OF THIS BOROUGH, BUT THE FERRY IS COOL I GUESS.NOT A FAN OF THIS BOROUGH, BUT THE FERRY IS COOL I GUESS.NOT A FAN OF THIS BOROUGH, BUT THE FERRY IS COOL I GUESS.NOT A FAN OF THIS BOROUGH, BUT THE FERRY IS COOL I GUESS.NOT A FAN OF THIS BOROUGH, BUT THE FERRY IS COOL I GUESS.NOT A FAN OF THIS BOROUGH, BUT THE FERRY IS COOL I GUESS.NOT A FAN OF THIS BOROUGH, BUT THE FERRY IS COOL I GUESS.NOT A FAN OF THIS BOROUGH, BUT THE FERRY IS COOL I GUESS.NOT A FAN OF THIS BOROUGH, BUT THE FERRY IS COOL I GUESS.NOT A FAN OF THIS BOROUGH, BUT THE FERRY IS COOL I GUESS.NOT A FAN OF THIS BOROUGH, BUT THE FERRY IS COOL I GUESS.';

// let spotRadius = 25;

let currDepth = 0; //intiailized at zero, which means that user starts on homepage
let boroughNum = 1; //used to identify boroughs. increases by 1 each time a new borough is created

let cp1 = "assets/centralPark.jpg";

let fullMap;
let brooklyn;
let manhattan;
let queens;
let bronx;
let statenisland;
let water;

// let soundCollection = []; //holds all sounds added to collection by user
let photoAlbum = []; //holds all photos added to collection by user
let collapseAlbum = false; //determines whether or not album is in collapsed view

// let cameraSound;

function preload() {
	fullMap = loadImage("assets/nycMap.png");
	brooklyn = loadImage("assets/brooklyn.png");
	manhattan = loadImage("assets/manhattan.png");
	queens = loadImage("assets/queens.png");
	bronx = loadImage("assets/bronx.png");
	statenisland = loadImage("assets/statenisland.png");
	water = loadImage("assets/water.png");

	bkZoom = loadImage("assets/bkZoom.png");
	bridgeP = loadImage("assets/bridge.jpg"); bridgeS = loadSound('assets/sounds/traffic.mp3');
	carnivalP = loadImage("assets/carnival.jpg"); carnivalS = loadSound('assets/sounds/carnival.mp3');

	mZoom = loadImage("assets/mZoom.png");
	ctrlPkP = loadImage("assets/cpBike.jpg"); ctrlPkS = loadSound('assets/sounds/centralpark.mp3');
	sohoP = loadImage("assets/soho.jpg"); sohoS = loadSound('assets/sounds/soho.mp3');

	qZoom = loadImage("assets/qZoom.png");
	tennisP = loadImage("assets/tennis.jpg"); tennisS = loadSound('assets/sounds/tennis.mp3');
	airportP = loadImage("assets/airport.jpg"); airportS = loadSound('assets/sounds/airport.mp3');

	bxZoom = loadImage("assets/bxZoom.png"); 
	zooP = loadImage("assets/zoo.jpg"); zooS = loadSound('assets/sounds/zoo.mp3');

	siZoom = loadImage("assets/siZoom.png");
	ferryP = loadImage("assets/ferry.jpg"); ferryS = loadSound('assets/sounds/boat.mp3');

	cameraSound = loadSound("assets/sounds/camera.mp3");

	expandIcon = loadImage("assets/expand.png");
	collapseIcon = loadImage("assets/collapse.png");
	galleryIcon = loadImage("assets/galleryIcon.png");
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
	if (currDepth == 0) {
		grandView(); //start at homepage
	}

}

class Spot { //

	constructor(depth, locX,locY,name="",image="",sound="") {
		this.name = name;
		this.x = locX;
		this.y = locY;
		this.img = image;
		this.depth = depth;
	}

	display() { //shows all subhotspots
		//show image filled with text
		
		// image(ctrlPkP, 0, 0, width, height);
		background(20);	
		if(currDepth == 11) {
			// image(ctrlPkP, 0, 0, width, height);
			drawText(ctrlPkP,cpText);
			ctrlPkS.play();
		}
		else if(currDepth == 12) {
			// background(0);
			// image(sohoP, 0, 0, width, height);
			drawText(sohoP,shText);
			sohoS.play();
		}
		else if(currDepth == 21) {
			// image(bridgeP, 0, 0, width, height);
			drawText(bridgeP,bkbgText);
			bridgeS.play();
		}
		else if(currDepth == 22) {
			// image(carnivalP, 0, 0, width, height);
			drawText(carnivalP,lbText);
			carnivalS.play();
		}
		else if(currDepth == 31) {
			// image(tennisP, 0, 0, width, height);
			drawText(tennisP,tennisText);
			tennisS.play();
		}
		else if(currDepth == 32) {
			// image(airportP, 0, 0, width, height);
			drawText(airportP,queensText);
			airportS.play();
		}
		else if(currDepth == 41) {
			// image(zooP, 0, 0, width, height);
			drawText(zooP,zooText);
			zooS.play();
		}
		else if(currDepth == 51) {
			// image(ferryP, 0, 0, width, height);
			drawText(ferryP,ferryText);
			ferryS.play();
		}

		drawBackButton();

		drawAlbumPreview();

		//add camera lines
		// 346, 566 //
		fill(200,200,200,200);
		noStroke();
		rect(346,0,1,height*2);
		rect(566,0,1,height*2);
		rect(0,320,width*2,1);
		rect(0,523,width*2,1);

		//Camera button
		fill(255,255,255,255);
		ellipse(450, 740, 90,90);
		fill(0,0,0,255);
		ellipse(450, 740, 70,70);
		fill(255,255,255,255);
		ellipse(450, 740, 63,63);
	}

}

class Borough {
	constructor(name,locX,locY,spots=[]) {
		// this.radius = (setNum);//actually dont need this. will be in display
		this.name = name;
		this.x = locX;
		this.y = locY;
		this.spots = spots; //important: up to 9 spots allowed
		this.boroughNum = boroughNum; 
		boroughNum++; //increament by 1 for next created borough 
	}

	display() { //borough view. Shows zoomed in version of borough and its hotspots 
		//iterate through subspot array, placing a faded circle at each location
		
  		image(water, 0, 0); //background
  		// image(mZoom, 0, 0); //zoomed in image
  		
  		// drawText(cpZoom,brooklynText);
  		if(currDepth == 1) {//manhattan
			image(mZoom, 0, 0, width, height);
		}
		else if(currDepth == 2) {//brooklyn
			image(bkZoom, 0, 0, width, height);
		}
		else if(currDepth == 3) {//queens
			image(qZoom, 0, 0); //zoomed in image
		}
		else if(currDepth == 4) {//bronx
			// image(ctrlPkP, 0, 0, width, height);
			image(bxZoom, 0, 0); //zoomed in image
		}
		else if(currDepth == 5) {//staten island
			// image(ctrlPkP, 0, 0, width, height);
			image(siZoom, 0, 0); //zoomed in image
		}


  		// soundJournal.display();
  		drawBackButton();
  		// drawAlbum();

  		//show spots
  		let s;
  		for (s in this.spots) {
  			console.log(this.name);
			fill(255,255,255);
			// ellipseMode(CENTER);
			rectMode(CENTER);
			rect(this.spots[s].x, this.spots[s].y, 200, 40, 20);
			textSize(20);
			textAlign(CENTER);
			fill(0,0,0);
			text(this.spots[s].name, this.spots[s].x, this.spots[s].y);
			// ellipse(this.spots[s].x, this.spots[s].y, spotRadius, spotRadius);
			// console.log("yepThissaSpot");
		}

		// noLoop();
	}


	//creates and adds a new Spot to this.spots. 
	addSpot(locX,locY,name="Mystery Spot",image="",sound="") {
		let spotDepth = (this.boroughNum*10)+this.spots.length+1; //used to update currDepth when user viewing it 
		console.log(spotDepth);
		this.spots.push(new Spot(spotDepth,locX,locY,name,image,sound));
	}

}
 

function mouseClicked() {
	//check mouse position. if on hotspot, trigger its scene

	//checks if any of the boroughs are clicked
	for (b in boroughs) {
		if (mouseX <= boroughs[b].x+16 && mouseX >= boroughs[b].x-16 && mouseY <= boroughs[b].y+16 && mouseY >= boroughs[b].y-16) {
			// drawText(cp1,manhattanText);
			currDepth = boroughs[b].boroughNum;
			boroughs[b].display();
			break;
		}
	}

	//checks if any spots are clicked. opens specified scene if so
	for (b in boroughs) {
		if (currDepth == boroughs[b].boroughNum) { ////if currDepth matches borough code check spots. (we only look at the borough that's currently open)
			for (s in boroughs[b].spots) {
				//if currDepth matches borough code check spots 
				if (mouseX <= boroughs[b].spots[s].x+100 && mouseX >= boroughs[b].spots[s].x-100 && mouseY <= boroughs[b].spots[s].y+30 && mouseY >= boroughs[b].spots[s].y-30) {
					// drawText(ctrlPkP,manhattanText);
					currDepth=boroughs[b].spots[s].depth;
					boroughs[b].spots[s].display();
				}
			}
			break;
		}
	}
	
	//backbutton
	if (currDepth != 0) { //if not on homepage
		if (mouseX <= 75  && mouseX >=20  && mouseY <= 70 && mouseY >= 20 ) {
			triggerBackButton();
		}

	}

	//album collapse/expand button
	if (currDepth == 0) { //only works on homepage
		if (mouseX <= 264+23  && mouseX >=264  && mouseY <= 88+23 && mouseY >= 88 ) {
			collapseAlbum = !collapseAlbum;
			console.log("coll");
			drawAlbum();
		}
	}

	//gallery button trigger
	if (currDepth == 0) { //only works on homepage
		if (mouseX <= 195+50  && mouseX >=218  && mouseY <= 88+23 && mouseY >= 88 ) {
			fullGallery();
			currDepth += 100;
		}
	}

	// rect(264-23-23, 88, 23, 23, 0);

	//show gallery if album preview clicked on spot page
	if (currDepth > 5) { //only works on homepage
		if (mouseX <= 130  && mouseX >=30  && mouseY <= 800 && mouseY >= 700 ) {
			console.log("coll");
			fullGallery();
			currDepth += 100;
		}
	}

	//journal play button
	// if (mouseX <= 230  && mouseX >=30  && mouseY <= 120+80*heightFactor+40 && mouseY >= 120+80*heightFactor ) {
	// 	// rect(30, 120+80*heightFactor, 200, 40, 0,0,0,20); 
	// 	for (let i =0; i < soundCollection.length; i++) {
	// 		soundCollection[i].play();
	// 	}
	// 	// console.log("play");
	// }

	//journal erase button
	// if (mouseX <= 330  && mouseX >=230  && mouseY <= 120+80*heightFactor+40 && mouseY >= 120+80*heightFactor ) {
	// 	// rect(30, 120+80*heightFactor, 200, 40, 0,0,0,20); 
	// 	soundCollection = [];
	// 	// console.log("erase");
	// }

	//add sound of scene to journal
	// if(currDepth > 5){ //only called if in a spot scene
	// 	if (mouseX <= 450+160  && mouseX >= 375  && mouseY <= 740+100 && mouseY >= 680 ) {
	// 		// rect(450, 740, 160,100, 50,50,50,50); 
	// 		if(currDepth == 11) {
	// 			// image(ctrlPkP, 0, 0, width, height);
	// 			// drawText(ctrlPkP,manhattanText);
	// 			soundCollection.push(ctrlPkS);
	// 		}
	// 		else if(currDepth == 12) {
	// 			soundCollection.push(sohoS);
	// 		}
	// 		else if(currDepth == 21) {
	// 			soundCollection.push(bridgeS);
	// 		}
	// 		else if(currDepth == 22) {
	// 			soundCollection.push(carnivalS);
	// 		}
	// 		else if(currDepth == 31) {
	// 			soundCollection.push(tennisS);
	// 		}
	// 		else if(currDepth == 32) {
	// 			soundCollection.push(airportS);
	// 		}
	// 		else if(currDepth == 41) {
	// 			soundCollection.push(zooS);
	// 		}
	// 		else if(currDepth == 51) {
	// 			soundCollection.push(ferryS);
	// 		}
	// 		console.log("added");
	// 	}
	// }

	//add pic. take picture and add it to album. play camera sound
	if(currDepth > 5){ //only called if in a spot scene
		if (mouseX <= 450+160  && mouseX >= 375  && mouseY <= 740+100 && mouseY >= 680 ) {
			// rect(450, 740, 160,100, 50,50,50,50); 
			if(currDepth == 11) {
				// image(ctrlPkP, 0, 0, width, height);
				// drawText(ctrlPkP,manhattanText);
				if(!photoAlbum.includes(ctrlPkP)) { //adds photo to album if it is not already in it
					photoAlbum.push(ctrlPkP);	
				}
			}
			else if(currDepth == 12) {
				if(!photoAlbum.includes(sohoP)) { //adds photo to album if it is not already in it
					photoAlbum.push(sohoP);
				}
			}
			else if(currDepth == 21) {
				if(!photoAlbum.includes(bridgeP)) { //adds photo to album if it is not already in it
					photoAlbum.push(bridgeP);
				}
			}
			else if(currDepth == 22) {
				if(!photoAlbum.includes(carnivalP)) { //adds photo to album if it is not already in it
					photoAlbum.push(carnivalP);
				}
			}
			else if(currDepth == 31) {
				if(!photoAlbum.includes(tennisP)) { //adds photo to album if it is not already in it
					photoAlbum.push(tennisP);
				}
			}
			else if(currDepth == 32) {
				if(!photoAlbum.includes(aiportP)) { //adds photo to album if it is not already in it
					photoAlbum.push(airportP);
				}
			}
			else if(currDepth == 41) {
				if(!photoAlbum.includes(zooP)) { //adds photo to album if it is not already in it
					photoAlbum.push(zooP);
				}
			}
			else if(currDepth == 51) {
				if(!photoAlbum.includes(ferryP)) { //adds photo to album if it is not already in it
					photoAlbum.push(ferryP);
				}
			}
			cameraSound.play();
			drawAlbumPreview();
			// console.log("added");
		}
	}


	//album prev 
	// rect(30, 320, 133, 40); 
	if (mouseX <= 30+133-1  && mouseX >= 30  && mouseY <= 320+40 && mouseY >= 320 ) {
		albumPrev();
	}

	//album next
	// rect(163, 320, 133, 40); 
	if (mouseX <= 163+133-1  && mouseX >= 163  && mouseY <= 320+40 && mouseY >= 320 ) {
		albumPrev();
	}
}

class BoroughArea { //basically an ellipse that marks the area of a borough. Used to detect when mouse is on borough
	constructor(x,y,radius) {
		this.x = x;
		this.y = y;
		this.r = radius;
	}

	// hoveringOver() {
	// }
	// display() {
	// }
}


function playSound(spotName) {}
function stopSound(spotName) {}

function grandView() { //show larrge map and hotspots (eventually trains too)
	currDepth=0;

	image(water, 0, 0);	
    
	drawAlbum();

	noStroke();
	fill(255,255,255,0);
	ellipseMode(CENTER);

	ellipse(535, 540, 240,240); //brooklyn's area  
	if(dist(mouseX,mouseY,535,540) < 120) { //compares borough's epicenter to mouse location. if mouse over borough, show text. otherwise only show image
		drawText(brooklyn,brooklynText);
	}
	else {
		image(brooklyn, 0, 0);
	}
	fill(0,0,0,255);
	ellipse(535, 540, 36,36);
	fill(255,50,50,255);
	ellipse(535, 540, 27,27); //brooklyn click target area
	fill(255,255,255,255);
	ellipse(535, 540, 15,15);
	fill(255,255,255,0);


	ellipse(475,350, 80,80);
	ellipse(510,280, 80,80); //manhattan's area 
	ellipse(520,220, 60,60);
	ellipse(540,170, 40,40);

	if(dist(mouseX,mouseY,475,350) < 40 || dist(mouseX,mouseY,510,280) < 40 || dist(mouseX,mouseY,520,220) < 30 || dist(mouseX,mouseY,540,170) < 20 ) { //compares borough's epicenter to mouse location. if mouse over borough, show text. otherwise only show image
		drawText(manhattan,manhattanText);
	}
	else {
		image(manhattan, 0, 0);
	}
	fill(0,0,0,255);
	ellipse(480, 330, 36,36);
	fill(255,50,50,255);
	ellipse(480, 330, 27,27); //manhattan click target area
	fill(255,255,255,255);
	ellipse(480, 330, 15,15);
	fill(255,255,255,0);

	ellipse(750, 380, 270,270); //queens's area
	ellipse(580, 340, 100,100);
	ellipse(760, 590, 150,150);   
	if(dist(mouseX,mouseY,750, 380) < 135 || dist(mouseX,mouseY,580, 340) < 50 || dist(mouseX,mouseY,760, 590) < 75) { //compares borough's epicenter to mouse location. if mouse over borough, show text. otherwise only show image
		drawText(queens,queensText);
	}
	else {
		image(queens, 0, 0);
	}
	fill(0,0,0,255);
	ellipse(730, 370, 36,36);
	fill(255,50,50,255);
	ellipse(730, 370, 27,27); //queens click target area
	fill(255,255,255,255);
	ellipse(730, 370, 15,15);
	fill(255,255,255,0);

	ellipse(670, 140, 190,190); //bronx's area  
	if(dist(mouseX,mouseY,670, 140) < 95) { //compares borough's epicenter to mouse location. if mouse over borough, show text. otherwise only show image
		drawText(bronx,bronxText);
	}
	else {
		image(bronx, 0, 0);
	}
	fill(0,0,0,255);
	ellipse(650, 170, 36,36);
	fill(255,50,50,255);
	ellipse(650, 170, 27,27); //bronx click target area
	fill(255,255,255,255);
	ellipse(650, 170, 15,15);
	fill(255,255,255,0);

	ellipse(225, 650, 360,360); //staten island's area  
	if(dist(mouseX,mouseY,225, 650) < 180) { //compares borough's epicenter to mouse location. if mouse over borough, show text. otherwise only show image
		drawText(statenisland,statenIslandText);
	}
	else {
		image(statenisland, 0, 0);
	}

	fill(0,0,0,255);
	ellipse(290, 540, 36,36);
	fill(255,50,50,255);
	ellipse(290, 540, 27,27); //staten island click target area
	fill(255,255,255,255);
	ellipse(290, 540, 15,15);
	fill(255,255,255,0);

	stroke(4);

	// for (let opac = 100; opac > 10; opac-=1) {
	// 	console.log(opac);
	// 	fill(255,255,255, 100);
	// 	rect(0, 0, width, height);
	// 	// grandView();
	// }




	// photoAlbum.push(ctrlPkP);
	// if (photoAlbum.length != 0) {//not empty
	// 	image(photoAlbum[0], 31,121, 266, 200);
	// }
	

	//display sound journal 

	console.log(mouseX,mouseY);
}

let currPhoto = 0;
function drawAlbum(){
	rectMode(CORNER);

	if(collapseAlbum) { //show collapsed version of album
		console.log("in tru");
		//heading of panel
		fill(0,0,0);
		rect(30, 80, 266, 40, 13); 
		textSize(21);
		textAlign(CENTER);
		fill(255,255,255);
		// text('Album', 170, 102);
		text('photos', 80, 102);

		//show expand button
		image(expandIcon,264, 88,23,23);
		rect(264-23, 88, 23, 23, 0);

		//show gallery icon
		image(galleryIcon,264-23-23, 88,23,23);

	}
	else { //show expanded version of album
		//heading of panel
		fill(0,0,0);
		rect(30, 80, 266, 40, 13,13,0,0); 
		textSize(21);
		textAlign(CENTER);
		fill(255,255,255);
		// text('Album', 170, 102);
		text('photos', 80, 102);

		//gallery view button
		image(collapseIcon,264, 88,23,23);

		//show gallery icon
		image(galleryIcon,264-23-23, 88,25,25);
		// image(photoAlbum[currPhoto], 31,121, 266, 200);

		//main area
		fill(255,255,255);

		rect(30, 120, 266, 200, 0);
		textSize(18); 
		fill(0,0,0);
		text('Your album is empty. \nGo explore!', 170, 220);

		//prevPhoto button
		fill(0,0,0);
		rect(30, 320, 133, 40, 0,0,0,13); 
		// textSize(24);
		textAlign(CENTER);
		fill(255,255,255);
		text('Prev', 100, 342);

		//nextPhoto button
		fill(0,0,0);
		rect(163, 320, 133, 40, 0,0,13,0);

		fill(200,200,200,100);
		rect(161, 320, 3, 40, 0,0,13,0); 
		// textSize(24);
		textAlign(CENTER);
		fill(255,255,255);
		text('Next', 220, 342);

		//show currPhoto
		if(photoAlbum.length!=0){
			image(photoAlbum[currPhoto], 30,119, 266, 201);
			// image(photoAlbum[currPhoto], 31,121, 266, 200);
			// currPhoto++;
			// if
		}

	}	
}

function drawAlbumPreview() {
	fill(0,0,0);
	rect(30, 700, 100, 100);
	fill(255,255,255);
	// rect(30, 700, 100, 100, 13);
	if(photoAlbum.length>0) {
		image(photoAlbum[photoAlbum.length-1],30,700,100,100);
	}
	console.log("preview");
} 

function fullGallery() {
	if(currDepth == 11) {
		ctrlPkS.stop();
	}
	else if(currDepth == 12) {
		sohoS.stop();
	}
	else if(currDepth == 21) {
		bridgeS.stop();
	}
	else if(currDepth == 22) {
		carnivalS.stop();
	}
	else if(currDepth == 31) {
		tennisS.stop();
	}
	else if(currDepth == 32) {
		airportS.stop();
	}
	else if(currDepth == 41) {
		zooS.stop();
	}
	else if(currDepth == 51) {
		ferryS.stop();
	}
	image(water, 0, 0, width, height);
	fill(0,0,0);
	rect(30, 80, width-60, height-430, 13); 
	if (photoAlbum.length == 0) { //album empty

	}
	else { //display photos in album in a grid
		fill(255,255,255);
		rect(60, 110, 100, 100, 13);

	}

	// image(photoAlbum[currPhoto], 30,119, 266, 201);
	let pX; let pY;

	let currPic = 0;
	for(let pY = 110; pY < height-400; pY+=165+25) {
		for(let pX = 60; pX < width-100; pX+=179+25) {
			if(currPic < photoAlbum.length){
				image(photoAlbum[currPic],pX,pY,170,165);
				currPic++;
			}
			else {
				fill(255,255,255);
				rect(pX, pY, 179, 165);
				fill(0,0,0);
				rect(pX+2, pY+2, 175, 161);
			}
		}
	}
	
	// rect(30, 700, 100, 100, 13);
	// if(photoAlbum.length>0) {
	// 	image(photoAlbum[photoAlbum.length-1],30,700,100,100);
	// }

	drawBackButton();
	console.log("gallery");
} 
		

function albumNext() { //functionality for album's next button. shows next photo in sequence
	if(photoAlbum.length!=0){
		// image(photoAlbum[currPhoto], 31,121, 266, 200);
		currPhoto++;
		if (currPhoto == photoAlbum.length) {
			currPhoto = 0;
		}
	}
}
function albumPrev() { //functionality for album's prev button. shows prev photo in sequence
	if(photoAlbum.length!=0){
		// image(photoAlbum[currPhoto], 31,121, 266, 200);
		currPhoto--;
		if (currPhoto == -1) {
			currPhoto = photoAlbum.length-1;
		}
	}
}


let fSize = 10;
let spacing = 9; // space between lines/line height
let kerning = 2; // space between letters

function drawText(img,textArr) {
	var x = 0;
	var y = 10;
	var counter = 0;

	while (y < height) { // translate position (display) to position (image)
	    img.loadPixels();
	    // get current color of pix
	    var imgX = round(map(x, 0, width, 0, img.width));
	    var imgY = round(map(y, 0, height, 0, img.height));
	    var c = color(img.get(imgX, imgY));

	    push();
	    translate(x, y); //place letter

	    textSize(fSize);
	    fill(c);

	    var letter = textArr.charAt(counter);
	    text(letter, 0, 0);
	    var letterWidth = textWidth(letter) + kerning;
	    x += letterWidth;

	    pop();

	    // trigger linebreak
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
	fill(0,0,0);
	ellipse(50, 40, 53,53);

	fill(255,255,255);
	rectMode(CORNER);
	ellipse(50, 40, 45,45);
	// rect(30, 20, 100, 40, 20);
	
	fill(0,0,0);
	triangle(37, 40, 57, 29, 57, 51);
	// textSize(24);
	// textAlign(CENTER);
	// fill(0,0,0);
	// text('Back', 80, 40);
}

//when back button is clicked, user moves to previous screen based on currDepth
//currDepth = 0 ----> now on homepage
//currDepth = 1 ----> now on Brooklyn view
////////currDepth = 11 ----> now on loc 1 of Brooklyn
////////currDepth = 12 ----> now on loc 2 of Brooklyn
////////currDepth = 13 ----> now on loc 3 of Brooklyn
//currDepth = 2 ----> now on Manhattan view
//////currDepth = 21 ----> now on loc 1 of Manhattan
//////currDepth = 22 ----> now on loc 2 of Manhattan
//////currDepth = 23 ----> now on loc 3 of Manhattan
//currDepth = 3 ----> now on Queens view
//currDepth = 4 ----> now on Bronx view
//currDepth = 5 ----> now on Staten Island view
function triggerBackButton() {
	if(currDepth == 11) {
		ctrlPkS.stop();
	}
	else if(currDepth == 12) {
		sohoS.stop();
	}
	else if(currDepth == 21) {
		bridgeS.stop();
	}
	else if(currDepth == 22) {
		carnivalS.stop();
	}
	else if(currDepth == 31) {
		tennisS.stop();
	}
	else if(currDepth == 32) {
		airportS.stop();
	}
	else if(currDepth == 41) {
		zooS.stop();
	}
	else if(currDepth == 51) {
		ferryS.stop();
	}

	if (currDepth >= 1 && currDepth <= 5 ) { //viewing a specific borough
		currDepth == 0;
		grandView(); //back to homepage
	} 
	else if (currDepth > 5 && currDepth < 100){//viewing a specific pic in a borough
		console.log(Math.floor(currDepth/=10));
		currDepth = parseInt(currDepth.toString()[0]);
		boroughs[currDepth-1].display(); //back to specific borough page
	}
	else if (currDepth >= 101){ //currently in gallery view
		currDepth-=100;
		let tempB = parseInt(currDepth.toString()[0]);
		let tempS = parseInt(currDepth.toString()[1]);
		boroughs[tempB-1].spots[tempS-1].display();

		//boroughs[b].spots[s].display();
	}
	else if (currDepth == 100){ //currently in gallery view
		currDepth-=100;
		grandView();
	}
}



let mn = new Borough("Manhattan", 480, 330);
mn.addSpot(500, 443, "Central Pk"); //Spot(locX,locY,image,sound,name))
mn.addSpot(310, 707, "SoHo");
boroughs.push(mn);

let bk = new Borough("Brooklyn", 535, 540);
bk.addSpot(477, 141, "Brooklyn Bridge"); //Spot(locX,locY,image,sound,name))
bk.addSpot(600, 450, "Eastern Parkway");
boroughs.push(bk);

let qu = new Borough("Queens", 720, 370);
qu.addSpot(570, 250, "US Open");//Spot(locX,locY,image,sound,name))
// qu.addSpot(640, 400, "JFK");
boroughs.push(qu);

let bx = new Borough("Bronx", 650, 170);
bx.addSpot(577, 500, "Bronx Zoo"); //Spot(locX,locY,image,sound,name))
boroughs.push(bx);

let si = new Borough("Staten Island", 290, 540);
si.addSpot(760, 150, "Staten Island Ferry"); //Spot(locX,locY,image,sound,name))
boroughs.push(si);

//Things to look at
//https://editor.p5js.org/J-Cake/sketches/1r1wmWO60 

