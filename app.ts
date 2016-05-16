///<reference path='./node_modules/phaser/typescript/phaser.d.ts' />
class MyGame {

	game: Phaser.Game;
	textValue: Phaser.Text;
	updateCount: number;

	constructor() {
		var game = new Phaser.Game(800, 600, Phaser.AUTO, "", { 
			preload: this.preload, 
			create: this.create, 
			update: this.update,
			render: this.render
		});
	}

	preload() {
		this.game.load.image("sky", "assets/sky.png");
		this.game.load.image('platform', 'assets/platform.png');
		this.game.load.image('star', 'assets/star.png');
		this.game.load.spritesheet("dude", "assets/dude.png", 32, 48);
	}
	

	create() {
		var style = { font: "65px Arial", fill: "#ff0000", align: "center" };
		this.textValue = this.game.add.text(400, 0, "0", style);
		this.updateCount = 0;
	}

	update() {
		this.textValue.text =  Phaser.Math.fuzzyFloor(this.updateCount++ / 60).toString();
		this.textValue.y = Phaser.Math.clamp(this.updateCount, 0, 600-65);
	}

	render() {
		this.game.debug.text("ey boss", 0, 80);
	}

}

window.onload = () => {
	var game = new MyGame();
}