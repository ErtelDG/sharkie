"use strict";
class BaseObjectsClass {
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
    async loadAllImgInCach(array) {
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
}
