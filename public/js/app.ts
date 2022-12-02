let keyboard = new KeyboardKeys();

let canvas = document.getElementById("canvas") as HTMLCanvasElement;
let ctx: any = canvas.getContext("2d");
let gameworld: GameWorld;
let level1: any;
let firstContain = document.getElementById("firstContain");
let secondContain = document.getElementById("secondContain");

async function init() {
   firstContain?.classList.remove("grid");
   firstContain?.classList.add("hidden");

   secondContain?.classList.remove("hidden");
   secondContain?.classList.add("flex");
   level1 = new Level();
   gameworld = new GameWorld();
}
