"use strict";
class Background2 extends StaticObjectsClass {
    constructor(x, y) {
        super();
        this.imgPath = [];
        this.arrayAllImages = [];
        this.width = 720;
        this.height = 400;
        this.x = x;
        this.y = y;
        this.loadAllImgInCach(this.arrayAllImages);
        this.loadOneImgFromCach(this.imageCach);
    }
}
