"use strict";
class BaseClass {
    constructor(name) {
        this.name = name;
    }
    name;
    imgPath = new Image();
    imagesCach = [];
    arrayAllImages = [];
    width = 0;
    height = 0;
    img;
    y = 0;
    x = 0;
    collisionPointY_TOP = 0;
    collisionPointX_LEFT = 0;
    collisionPointY_BOTTOM = 0;
    collisionPointX_RIGHT = 0;
    async loadAllImgInCach(array) {
        this.imagesCach = [];
        array.forEach(async (path) => {
            let img = new Image();
            img.src = path;
            await this.imagesCach.push(img);
        });
    }
    counterForLoadOneImgFromCachArray = 0;
    // loadImage ('img/test.png')
    loadImage(path) {
        this.img = new Image(); //Image() analog=> this.img = document.getElementById('image') <img id="image" src>
        this.img.src = path;
    }
    loadOneImgFromCach(chach) {
        let positionArray = this.counterForLoadOneImgFromCachArray % this.imagesCach.length;
        this.img = new Image();
        try {
            this.img = chach[positionArray];
        }
        catch (e) {
            console.log("STOP", chach[positionArray]);
            debugger;
        }
        this.counterForLoadOneImgFromCachArray++;
    }
    animation(time) {
        setInterval(() => {
            this.loadOneImgFromCach(this.imagesCach);
        }, time);
    }
    setColissionPointsObject(TOP, LEFT, BOTTOM, RIGHT) {
        setInterval(() => {
            this.updateColissionPointsObject(TOP, LEFT, BOTTOM, RIGHT);
        }, 1000 / 30);
    }
    updateColissionPointsObject(collisionPointY_TOP, collisionPointX_LEFT, collisionPointY_BOTTOM, collisionPointX_RIGHT) {
        this.collisionPointY_TOP = this.y + collisionPointY_TOP;
        this.collisionPointX_LEFT = this.x + collisionPointX_LEFT;
        this.collisionPointY_BOTTOM = this.height - collisionPointY_BOTTOM;
        this.collisionPointX_RIGHT = this.width - collisionPointX_RIGHT;
    }
    stopAllIntervals() {
        let highestTimeoutId = setTimeout(";");
        for (let i = 0; i < highestTimeoutId; i++) {
            clearTimeout(i);
        }
    }
}
