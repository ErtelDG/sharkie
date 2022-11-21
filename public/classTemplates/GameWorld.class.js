"use strict";
class GameWorld {
    ctx = ctx;
    level;
    sharkie;
    constructor() {
        this.ctx.font = "48px MyWebFont";
        this.ctx.fillStyle = "white";
        this.level = level1;
        this.sharkie = [new Sharkie()];
        this.draw();
    }
    async draw() {
        if (this.ctx != null) {
            this.ctx.clearRect(0, 0, canvas.width, canvas.height);
            this.drawStaticObject(this.level.backgrounds);
            this.drawStaticObject(this.level.coins);
            this.drawRotateStaticObject(this.level.bubbles);
            this.drawStaticObject(this.level.statusBar);
            this.drawText(this.level.statusBarValue);
            this.drawMovableObject(this.sharkie);
            this.drawMovableObject(this.level.enemies);
        }
        this.requestAnimation();
    }
    /**
     * set the request animation
     */
    requestAnimation() {
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }
    loadImage() {
        this.level.background[0].loadOneImgFromCach(this.level.background[0].imageCach);
    }
    drawStaticObject(objectToDraw) {
        objectToDraw.forEach((objectElement) => {
            this.ctx.drawImage(objectElement.imgPath, objectElement.x, objectElement.y, objectElement.width, objectElement.height);
        });
    }
    drawRotateStaticObject(objectToDraw) {
        let counterForSetImgToLeftRight = 0;
        objectToDraw.forEach((objectElement) => {
            let value = counterForSetImgToLeftRight % 2 ? true : false;
            objectElement.x = value ? objectElement.x : (objectElement.x = -45);
            let rotate = value ? 45 : 315;
            counterForSetImgToLeftRight++;
            this.drawTheRotateStaticObject(objectElement, rotate);
        });
    }
    drawTheRotateStaticObject(objectElement, rotate) {
        this.ctx.save();
        this.ctx.translate(objectElement.randomTranslate, 300);
        this.ctx.rotate((rotate * Math.PI) / 180);
        this.ctx.drawImage(objectElement.imgPath, objectElement.x, objectElement.y, objectElement.width, objectElement.height);
        this.ctx.restore();
    }
    drawText(objectToDraw) {
        objectToDraw.forEach((objectElement) => {
            this.ctx.fillText(objectElement.currentCounterForThisObject, objectElement.x, objectElement.y);
        });
    }
    drawMovableObject(movableObjectArray) {
        movableObjectArray.forEach((movableObject) => {
            this.ctx.drawImage(movableObject.imgPath, movableObject.x, movableObject.y, movableObject.width, movableObject.height);
        });
    }
}
