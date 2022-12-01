"use strict";
class EnemyClass extends MovableClass {
    constructor(name) {
        super("Enemy");
    }
    setAllImagesInArray(array) {
        return (this.arrayAllImages = array);
    }
    loadImageIsDeadOrNot(loadDeadImages) {
        setInterval(() => {
            if (!this.isDead) {
                this.autoMoveLeft(Math.random() * 6);
            }
            else {
                this.x += 15;
                this.y -= 15;
                this.loadAllImgInCach(loadDeadImages);
            }
            this.loadOneImgFromCach();
        }, 50);
    }
}
