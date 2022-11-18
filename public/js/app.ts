let canvas = document.getElementById("canvas") as HTMLCanvasElement;
let ctx: any = canvas.getContext("2d");
let gameworld;

async function init() {
   gameworld = new GameWorld();
}
