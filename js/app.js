console.log("tamagotchi");

//creating a class

class Tamagotchi {
	constructor(name){
		this.name = name;
		this.age = 0;
		this.sleepiness = 1;//The Tamagotchi wakes up rested (starts rested), but it's hungry (hunger goes up when it sleeps)
		this.hunger = 5;//The first thing the Tamagotchi needs is to eat, eating will give it energy to play(the boredome goes up)
		this.boredom = 1;//The Tamagotchi wants to play after eating (boredom goes down) and then the sleepiness will go up
		
	}
	grow() {
		console.log("I'm growing! Tamagotchi is aging");
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
	toma: null,
	lights: true,
	startGame() {//tamagotchi is born
		console.log("I'm alive! Tamagotchi is borne");
		// instantiate new tomagotchi
		// const t = new Tomagotchi('asdf')
	},
	turnLightOff (sleep) {
		console.log("zzzZZZZZZzzz!");
	}

}



