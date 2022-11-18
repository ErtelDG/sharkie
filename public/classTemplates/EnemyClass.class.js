"use strict";
class Enemy extends MovableClass {
    constructor() {
        super("Enemy");
        this.setAllImagesInArray();
        this.loadAllImgInCach(this.arrayAllImages);
        setInterval(() => {
            this.loadOneImgFromCach();
        }, 100);
        this.width = 300;
        this.height = 250;
    }
    setAllImagesInArray() {
        return (this.arrayAllImages = [
            "img/2.Enemy/1.PufferFish/1.Swim/3.swim1.png",
            "img/2.Enemy/1.PufferFish/1.Swim/3.swim2.png",
            "img/2.Enemy/1.PufferFish/1.Swim/3.swim3.png",
            "img/2.Enemy/1.PufferFish/1.Swim/3.swim4.png",
            "img/2.Enemy/1.PufferFish/1.Swim/3.swim5.png",
        ]);
    }
}
