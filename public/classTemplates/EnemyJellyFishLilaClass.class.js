"use strict";
class EnemyJellyFishLila extends EnemyClass {
    constructor() {
        super("EnemyJellyFishLila");
        this.setAllImagesInArray([
            "img/2.Enemy/2JellyFish/RegularDamage/Lila1.png",
            "img/2.Enemy/2JellyFish/RegularDamage/Lila2.png",
            "img/2.Enemy/2JellyFish/RegularDamage/Lila3.png",
            "img/2.Enemy/2JellyFish/RegularDamage/Lila4.png",
        ]);
        this.loadAllImgInCach(this.arrayAllImages);
        setInterval(() => {
            this.loadOneImgFromCach();
            this.autoMoveLeft(Math.random() * 12);
        }, 120);
        this.width = 80;
        this.height = 150;
        this.x = Math.random() * (6000 - 500) + 500;
        this.y = Math.random() * 150;
        setInterval(() => {
            this.lightUpAndDownAnimation();
        }, 80);
    }
    timer = 0;
    stopUp = false;
    stopDown = false;
    speedUpAndDown = 8;
    lightUpAndDownAnimation() {
        if (this.stopUp == false) {
            this.y += this.speedUpAndDown;
            this.timer++;
            if (this.timer == 20) {
                this.stopUp = true;
            }
        }
        else if (this.stopDown == false) {
            this.y -= this.speedUpAndDown;
            this.timer--;
            if (this.timer == 0) {
                this.stopDown = true;
            }
        }
        else {
            (this.stopUp = false), (this.stopDown = false);
        }
    }
}
