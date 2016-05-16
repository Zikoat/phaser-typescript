///<reference path='./node_modules/phaser/typescript/phaser.d.ts' />

console.log("tutorial 1");
var game = new Phaser.Game(800, 600, Phaser.AUTO, "", { preload: preload, create: create, update: update });


function preload() {
	game.load.image("sky", "assets/sky.png");
	game.load.image('platform', 'assets/platform.png');
	game.load.image('star', 'assets/star.png');
	game.load.spritesheet("dude", "assets/dude.png", 32, 48);
}

var platforms: Phaser.Group;

function create() {

	game.physics.startSystem(Phaser.Physics.ARCADE);

	game.add.sprite(0, 0, "sky");


	

	var point: Phaser.Sprite = game.add.sprite(0, 0, "star");

	platforms = game.add.group();

	platforms.enableBody = true;

	var ground: Phaser.Sprite = platforms.create(0, game.world.height - 64, "platform");

	ground.scale.setTo(2, 2);

	ground.body.immovable = true;
	var ledge: Phaser.Sprite = platforms.create(400, 400, 'platform');

    ledge.physicsEnabled = true;
    ledge.body.immovable = true;


    ledge = platforms.create(-150, 250, 'platform');

    ledge.body.immovable = true;

}

function update() {
	
}
