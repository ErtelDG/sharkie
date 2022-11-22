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
            this.checkPositionMovableobjectIsInTheCorrectRange(this.sharkie);
            this.drawStaticObject(this.level.backgrounds);
            this.drawStaticObject(this.level.coins);
            this.drawRotateStaticObject(this.level.bubbles);
            this.drawStaticObject(this.level.statusBar);
            this.drawText(this.level.statusBarValue);
            keyboard.LEFT ? this.drawMirrowObjectToCanvas(this.sharkie) : this.drawMovableObject(this.sharkie);
            this.ctx.restore();
            this.drawMovableObject(this.level.enemies);
            this.drawRectangle(ctx, this.sharkie[0].x + 60, this.sharkie[0].y + 120, this.sharkie[0].width - 120, this.sharkie[0].height - 180);
            for (let pufferFish = 0; pufferFish < 10; pufferFish++) {
                const element = this.level.enemies[pufferFish];
                this.drawRectangle(ctx, element.x, element.y, element.width - 10, element.height - 20);
            }
            for (let jellyFish = 11; jellyFish < 20; jellyFish++) {
                const element = this.level.enemies[jellyFish];
                this.drawRectangle(ctx, element.x + 10, element.y + 15, element.width - 15, element.height - 25);
            }
        }
        this.requestAnimation();
    }
    drawRectangle(context, x, y, width, height) {
        context.strokeRect(x, y, width, height);
        context.lineWidth = 4;
        context.strokeStyle = "white";
        context.stroke();
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
    checkPositionMovableobjectIsInTheCorrectRange(movableObjectsInArray) {
        movableObjectsInArray.forEach((currentMovableObject) => {
            currentMovableObject.setLimitPositionXandY(currentMovableObject);
        });
    }
    drawMirrowObjectToCanvas(objectsToDraw) {
        objectsToDraw.forEach((objectX) => {
            this.ctx.save();
            this.ctx.scale(-1, 1);
            this.ctx.drawImage(objectX.imgPath, objectX.x * -1, objectX.y, objectX.width * -1, objectX.height);
            this.ctx.restore();
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
