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
    y = 0;
    x = 0;
    collisionPointY_TOP = 0;
    collisionPointX_LEFT = 0;
    collisionPointY_BOTTOM = 0;
    collisionPointY_RIGHT = 0;
    async loadAllImgInCach(array) {
        this.imagesCach = [];
        array.forEach(async (path) => {
            let pathURL = path;
            await this.imagesCach.push(pathURL);
        });
    }
    counterForLoadOneImgFromCachArray = 0;
    async loadOneImgFromCach() {
        let positionArray = this.counterForLoadOneImgFromCachArray % this.imagesCach.length;
        this.imgPath.src = await this.imagesCach[positionArray];
        this.counterForLoadOneImgFromCachArray++;
    }
    animation(time) {
        setInterval(() => {
            this.loadOneImgFromCach();
        }, time);
    }
    setColissionPointsObject(collisionPointY_TOP, collisionPointX_LEFT, collisionPointY_BOTTOM, collisionPointY_RIGHT) {
        this.collisionPointY_TOP = this.y + collisionPointY_TOP;
        this.collisionPointX_LEFT = this.x + collisionPointX_LEFT;
        this.collisionPointY_BOTTOM = this.y + this.height + collisionPointY_BOTTOM;
        this.collisionPointY_RIGHT = this.x + this.width + collisionPointY_RIGHT;
    }
    updateColissionPointsObject(moveTOP, moveLEFT, moveBOTTOM, moveRIGHT) {
        this.collisionPointY_TOP += moveTOP;
        this.collisionPointX_LEFT += moveLEFT;
        this.collisionPointY_BOTTOM += moveBOTTOM;
        this.collisionPointY_RIGHT += moveRIGHT;
    }
}
