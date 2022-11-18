"use strict";
class Background extends StaticObjectsClass {
    constructor(imgPath, x, y) {
        super();
        this.arrayAllImages = [imgPath];
        this.width = 720;
        this.height = 400;
        this.x = x;
        this.y = y;
        this.loadAllImgInCach(this.arrayAllImages);
        this.loadOneImgFromCach(this.imageCach);
    }
}
