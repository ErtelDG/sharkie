"use strict";
class EnemyClass extends MovableClass {
    constructor(name) {
        super("Enemy");
    }
    cach_DEAD_IMAGES = [];
    setAllImagesInArray(array) {
        return (this.arrayAllImages = array);
    }
    loadImageIsDeadOrNot(cach_DEAD_IMAGES) {
        setInterval(() => {
            !this.isDead ? this.autoMoveLeft(Math.random() * 6) : this.getDeadAnimation(cach_DEAD_IMAGES);
            this.loadOneImgFromCach();
        }, 50);
    }
    getDeadAnimation(cach_DEAD_IMAGES) {
        this.x += 20;
        this.y -= 20;
        this.imagesCach = cach_DEAD_IMAGES;
    }
}
