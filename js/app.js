console.log("tamagotchi");

//creating a class

class Tamagotchi {
	constructor(name){
		this.name = name;
		this.age = 0;
		this.sleepiness = 5;//The Tamagotchi wakes up rested (starts rested), but it's hungry (hunger goes up when it sleeps)
		this.hunger = 5;//The first thing the Tamagotchi needs is to eat, eating will give it energy to play(the boredome goes up)
		this.boredom = 1;//The Tamagotchi wants to play after eating (boredom goes down) and then the sleepiness will go up
		
	}
	grow() {
		//console.log("I'm growing! Tamagotchi is aging");
		if(game.gameTime % 3 === 0) {
			game.tama.age ++
			console.log(game.tama.age);
			if(game.tama.age >= 2){
			$('#tama1').css('height', '160px')
			$('#tama1').css('background', 'url(https://i.imgur.com/P6YAGVX.jpg)')
			}
			if(game.tama.age >= 5){
			$('#tama1').css('height', '200px')
			$('#tama1').css('width', '300px')
			}
		}
	}
	eat() {
		console.log("yum, yum, yum");
		if (game.tama.hunger !== 0 ){
			this.hunger --
		}
		game.displayMetrics();
	
	}
	play() {
		if (game.tama.boredom !== 0) {
			console.log("Im playing!");
			this.boredom --
		}
		game.displayMetrics();

	}
	sleep(){
		if (game.tama.sleepiness !== 0){
			this.sleepiness--;
		}
		game.displayMetrics();
	}
	die() {
		console.log("R.I.P. Tamagotchi died because you are a bad parrent.");
		$('#tama1').css('display', 'none')
		$('#tama2').css('display', 'flex')
		clearInterval(game.timerID);
	}
	// sleep() {
	// 	if (game.tama.sleepiness !== 0) {
	// 		console.log("Im sleeping!");
	// 		this.sleepiness --
	// 	}
	// 	game.displayMetrics();
	// }
}

const game = {
	timerID: null,
	gameTime: 0,
	tama: '',
	lights: true,
	createTama() {
		nameGiven = $('#input-box').val();
		console.log(nameGiven);
		const babyT = new Tamagotchi(nameGiven);	
		this.tama = babyT
		//console.log(game.tama.);
		$('#start-btn').css('display','none');
		$('#input-box').val('');
		$('.name-input').css('display','none');
		$('#tama-says').append(`Hi I'm ${nameGiven}!`).css('display','flex');
	},
	
	startTime() {
		//console.log("time started");
		this.timerID = setInterval( () => {
			console.log(this.tama);
			this.gameTime++;
			if (this.lights === true && this.gameTime % 5 === 0){
				this.tama.hunger++
				game.displayMetrics();
			}
			if (this.tama.hunger >= 10){
				console.log("Too hungry");
				this.tama.die()
			}
			if (this.lights === true && this.gameTime % 5 === 0){
				this.tama.boredom++
				game.displayMetrics();
			}
			if (this.tama.boredom >= 10){
				console.log("Too bored");
				this.tama.die()
			}
			if (this.lights === true && this.gameTime % 5 === 0){
				this.tama.sleepiness++
				game.displayMetrics();
			} else if (this.lights !== true && this.gameTime % 3 === 0){
				if(this.tama.sleepiness !== 0){
					this.tama.sleepiness--;
				}
				if (this.tama.boredom !== 0){
					this.tama.boredom--;
				}
				if (this.tama.hunger !== 0){
					this.tama.hunger--;
				}
				game.displayMetrics();
			}
			if (this.tama.sleepiness >= 10){
				console.log("Too tired");
				this.tama.die()
			}
			this.tama.grow();
			} , 1000)
	}, 

	displayMetrics() {
		let hungerMetter = this.tama.hunger
		console.log(this.tama.hunger);
		$('#hunger').text(`Hunger ${hungerMetter}`);

		let boredomMetter = this.tama.boredom
		$('#boredom').text(`Boredom ${boredomMetter}`);

		let sleepinessMetter = this.tama.sleepiness
		$('#sleepiness').text(`Sleepiness ${sleepinessMetter}`);
	},

	turnLightOffOn () {
		if (game.lights === true) {
			//console.log("lights off");
			$('body').css('background', 'gray');
			game.lights = false;
			//console.log(game.lights);
		} 
		else if (lights !== true) {
			$('body').css('background', 'pink');
			game.lights = true;
			//console.log(game.lights);
		}
	},

}

//jQuery--- game interaction

//Event listener to start-btn and form display
$('#start-btn').on('click', () => {
	console.log("button works");
	$('.name-input').css('display','flex');
	$('#start-btn').css('display', 'none');
});

//Event listener for the form button and game display
$('#assign-name').on('click', (e) => {
	e.preventDefault();
	console.log("name assigned");
	$('#hunger').css('display', 'flex')
	game.displayMetrics()
	$('#boredom').css('display', 'flex')
	$('#sleepiness').css('display', 'flex')
	$('#timer').css('display', 'flex')
	$('#tama1').css('display', 'flex')
	$('.game-btns button').css('display', 'inline-block');
	game.createTama();
	game.displayMetrics();
	game.startTime();
});

//Event listeners for game buttons
$('#feed').on('click', () => {
	console.log("here comes the food");
	game.tama.eat()
})

$('#play').on('click', () => {
	console.log("Game time!");
	game.tama.play()
})

$('#lights').on('click', () => {
	console.log("lights off");
	game.turnLightOffOn()
	

})








