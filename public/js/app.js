"use strict";
let keyboard = new KeyboardKeys();
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let gameworld;
let level1;
async function init() {
    level1 = new Level();
    gameworld = new GameWorld();
}
