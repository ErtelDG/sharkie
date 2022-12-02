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
                this.x += 20;
                this.y -= 20;
                this.loadAllImgInCach(loadDeadImages);
            }
            this.loadOneImgFromCach();
        }, 50);
    }
}
