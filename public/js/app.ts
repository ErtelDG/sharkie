let keyboard = new KeyboardKeys();

let canvas = document.getElementById("canvas") as HTMLCanvasElement;
let ctx: any = canvas.getContext("2d");
let gameworld: GameWorld;
let level1: any;
let firstContain = document.getElementById("firstContain");
let secondContain = document.getElementById("secondContain");
let thirdContain = document.getElementById("thirdContain");
let imageYouWin = document.getElementById("imageYouWin");
let imageGameOver = document.getElementById("imageGameOver");
let imageTryAgain = document.getElementById("imageTryAgain");

async function init() {
   firstContain?.classList.remove("grid");
   firstContain?.classList.add("hidden");
   secondContain?.classList.remove("hidden");
   secondContain?.classList.add("flex");
   thirdContain?.classList.add("hidden");
   thirdContain?.classList.remove("grid");
   imageYouWin?.classList.remove("hidden");
   imageGameOver?.classList.remove("hidden");
   level1 = new Level();
   gameworld = new GameWorld();
}
