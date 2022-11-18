"use strict";
class Background1 extends StaticObjectsClass {
    constructor(x, y) {
        super();
        this.imgPath = [];
        this.arrayAllImages = [
            "img/3.Background/Layers/5.Water/D1.png"
        ];
        this.width = 720;
        this.height = 400;
        this.x = x;
        this.y = y;
        this.loadAllImgInCach(this.arrayAllImages);
        this.loadOneImgFromCach(this.imageCach);
    }
}
