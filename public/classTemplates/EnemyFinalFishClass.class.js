"use strict";
class EnemyFinalFish extends EnemyClass {
    constructor() {
        super("EnemyFinalFish");
        this.setAllImagesInArray([
            "img/2.Enemy/3FinalEnemy/2.floating/1.png",
            "img/2.Enemy/3FinalEnemy/2.floating/2.png",
            "img/2.Enemy/3FinalEnemy/2.floating/3.png",
            "img/2.Enemy/3FinalEnemy/2.floating/4.png",
            "img/2.Enemy/3FinalEnemy/2.floating/5.png",
            "img/2.Enemy/3FinalEnemy/2.floating/6.png",
            "img/2.Enemy/3FinalEnemy/2.floating/7.png",
            "img/2.Enemy/3FinalEnemy/2.floating/8.png",
            "img/2.Enemy/3FinalEnemy/2.floating/9.png",
            "img/2.Enemy/3FinalEnemy/2.floating/10.png",
            "img/2.Enemy/3FinalEnemy/2.floating/11.png",
            "img/2.Enemy/3FinalEnemy/2.floating/12.png",
            "img/2.Enemy/3FinalEnemy/2.floating/13.png",
        ]);
        this.loadAllImgInCach(this.arrayAllImages);
        setInterval(() => {
            this.loadOneImgFromCach();
            this.moveLeft(16);
        }, 100);
        this.width = 400;
        this.height = 400;
        this.x = 7200;
        this.y = 0;
    }
}