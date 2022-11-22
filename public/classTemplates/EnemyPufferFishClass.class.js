"use strict";
class EnemyPufferFish extends EnemyClass {
    constructor() {
        super("EnemyPufferFish");
        this.setAllImagesInArray([
            "img/2.Enemy/1PufferFish/1.Swim/3.swim1.png",
            "img/2.Enemy/1PufferFish/1.Swim/3.swim2.png",
            "img/2.Enemy/1PufferFish/1.Swim/3.swim3.png",
            "img/2.Enemy/1PufferFish/1.Swim/3.swim4.png",
            "img/2.Enemy/1PufferFish/1.Swim/3.swim5.png",
        ]);
        this.loadAllImgInCach(this.arrayAllImages);
        setInterval(() => {
            this.loadOneImgFromCach();
            this.autoMoveLeft(Math.random() * 12);
        }, 50);
        this.width = 100;
        this.height = 80;
        this.x = Math.random() * (6000 - 500) + 500;
        this.y = Math.random() * (300 - 50) + 50;
    }
}
