console.log("tamagotchi");

//creating a class

class Tamagotchi {
	constructor(name){
		this.name = name;
		//this.age = null;
		this.sleepiness = 1;//The Tamagotchi wakes up rested (starts rested), but it's hungry (hunger goes up when it sleeps)
		this.hunger = 5;//The first thing the Tamagotchi needs is to eat, eating will give it energy to play(the boredome goes up)
		this.boredom = 1;//The Tamagotchi wants to play after eating (boredom goes down) and then the sleepiness will go up
		
	}
	grow(age) {
		console.log("I'm growing! Tamagotchi is aging");
		this.age = null; 
	}
	eat(food) {
		console.log("yum, yum, yum");
	}
	play(game) {
		console.log("Im playing!");
	}
	die() {
		console.log("R.I.P. Tamagotchi died because you are a bad parrent.");
	}
	sleep() {
		// 
	}
}

const game = {
	gameTime: -1,
	tama: '',
	lights: true,
	interval: '',//Pending set up
	createTama() {
		nameGiven = $('#input-box').val();
		console.log(nameGiven);
		const babyT = new Tamagotchi(nameGiven);	
		game.tama = babyT
		//console.log(game.tama.);
		$('#start-btn').css('display','none');
		$('#input-box').val('');
		$('.name-input').css('display','none');
		$('#tama-says').append(`Hi I'm ${nameGiven}!`).css('display','flex');
		$("#metrics").append(`Sleep ${game.tama.sleepiness} | Hunger ${game.tama.hunger} | Boredom ${game.tama.boredom}`);		
	},
		// set time/ age
	startTime() {
		console.log("time started");
		this.gameTime = setInterval( () => {
			console.log("time is running");
			let aging = this.gameTime++;
			game.tama.grow(aging)
			$('#timer').text(`Clock: ${aging}`);
		} , 1000)
		
	},
	// turnLightOff () {
	// 	console.log("lights off");
	// 	//turns lights off
	// 	//makes tamagotchi go to sleep
	// 	sleep();
	//	},
}




//jQuery--- game interaction

//Create event listener to start-btn
//We want event listener to start game by calling game.startGame function
//We want to change the display in the css for form
$('#start-btn').on('click', () => {
	console.log("button works");
	$('.name-input').css('display','flex');
	$('#start-btn').css('display', 'none');
});

//Create event listener for the form button 
//make sure to add e.preventDefault() to stop it form refreshing the webpage
//make tamagotchi1 div appear
$('#assign-name').on('click', (e) => {
	e.preventDefault();
	console.log("name assigned");
	$('#timer').css('display', 'flex')
	$('#tama1').css('display', 'flex')
	$('.game-btns button').css('display', 'inline-block');
	game.createTama();
	game.startTime();
});











