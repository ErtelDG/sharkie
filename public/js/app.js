"use strict";
let keyboard = new KeyboardKeys();
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let gameworld;
let level1;
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
