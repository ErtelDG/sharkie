"use strict";
class Bubble extends BaseClass {
    constructor(imgPath, x, y) {
        super("Bubble");
        this.arrayAllImages = [imgPath];
        this.width = 720;
        this.height = 400;
        this.x = x;
        this.y = y;
        this.loadAllImgInCach(this.arrayAllImages);
        this.loadOneImgFromCach();
    }
}
