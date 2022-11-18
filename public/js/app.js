"use strict";
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let gameworld;
async function init() {
    gameworld = new GameWorld();
}
