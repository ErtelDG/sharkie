"use strict";
class Background extends BaseObjectsClass {
    constructor(imgPath, x, y) {
        super("BackgroundClass");
        this.arrayAllImages = [imgPath];
        this.width = 720;
        this.height = 400;
        this.x = x;
        this.y = y;
        this.loadAllImgInCach(this.arrayAllImages);
        this.loadOneImgFromCach();
    }
}
