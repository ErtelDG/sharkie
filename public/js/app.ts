let keyboard = new KeyboardKeys();

let canvas = document.getElementById("canvas") as HTMLCanvasElement;
let ctx: any = canvas.getContext("2d");
let gameworld: GameWorld;
let level1: any;

async function init() {
   level1 = new Level();
   gameworld = new GameWorld();
}
