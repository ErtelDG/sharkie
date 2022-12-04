let keyboard = new KeyboardKeys();

let canvas = document.getElementById("canvas") as HTMLCanvasElement;
let ctx: any = canvas.getContext("2d");
let gameworld: GameWorld | null;
let level1: any;
let firstContain = document.getElementById("firstContain");
let secondContain = document.getElementById("secondContain");
let thirdContain = document.getElementById("thirdContain");
let imageYouWin = document.getElementById("imageYouWin");
let imageGameOver = document.getElementById("imageGameOver");
let imageTryAgain = document.getElementById("imageTryAgain");
let isFullscreen = false;
let background_sound_On_Off = true;

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

function fullscreenOnOff() {
   if (!isFullscreen) {
      canvas.classList.remove("lg:w-auto");
      canvas.classList.remove("lg:h-auto");
      isFullscreen = true;
   } else {
      canvas.classList.add("lg:w-auto");
      canvas.classList.add("lg:h-auto");
      isFullscreen = false;
   }
}

/**
 * set sound on or off
 */
function soundOnOff() {
   return background_sound_On_Off ? soundOff() : soundOn();
}

/**
 *  sound off
 */
function soundOff() {
   background_sound_On_Off = false;
   if (gameworld != null) {
      gameworld.audioSounds.gameSound.pause();
   }
}

/**
 *  sound on
 */
function soundOn() {
   background_sound_On_Off = true;
   background_sound_On_Off = false;
   if (gameworld != null) {
      gameworld.audioSounds.gameSound.play();
   }
}
