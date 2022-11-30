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
                this.x -= 16;
                this.y -= 16;
                this.loadAllImgInCach(loadDeadImages);
            }
            this.loadOneImgFromCach();
        }, 50);
    }
}
