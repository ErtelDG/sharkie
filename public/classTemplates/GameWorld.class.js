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
            this.checkPositionMovableobjectIsInTheCorrectRange(this.sharkie, -50, 200);
            this.drawStaticObject(this.level.backgrounds);
            this.drawStaticObject(this.level.coins);
            this.drawStaticObject(this.level.statusBar);
            this.drawText(this.level.statusBarValue);
            keyboard.LEFT ? this.drawMirrowObjectToCanvas(this.sharkie) : this.drawMovableObject(this.sharkie);
            this.ctx.restore();
            keyboard.LEFT ? this.moveBackgroundToLeft() : keyboard.RIGHT ? this.moveBackgroundToRight() : false;
            this.drawMovableObject(this.level.enemies);
            this.drawRotateStaticObject(this.level.bubbleBottles);
            this.level.coins.forEach((coin) => {
                if (this.sharkie[0].x + 60 + this.sharkie[0].width - 120 > coin.x + 5 && this.sharkie[0].x + 60 < coin.x + 5 + coin.width - 10) {
                    console.log("COIN");
                }
            });
            //Rectangle DRAW!!
            this.drawRectangle(ctx, this.sharkie[0].collisionPointX_LEFT, this.sharkie[0].collisionPointY_TOP, this.sharkie[0].collisionPointY_RIGHT, this.sharkie[0].collisionPointY_BOTTOM);
            for (let jellyFish = 11; jellyFish < 20; jellyFish++) {
                const jellyFi = this.level.enemies[jellyFish];
                this.drawRectangle(ctx, jellyFi.collisionPointX_LEFT, jellyFi.collisionPointY_TOP, jellyFi.collisionPointY_RIGHT, jellyFi.collisionPointY_BOTTOM);
            }
            for (let pufferFish = 0; pufferFish < 10; pufferFish++) {
                const pufferFi = this.level.enemies[pufferFish];
                this.drawRectangle(ctx, pufferFi.collisionPointX_LEFT, pufferFi.collisionPointY_TOP, pufferFi.collisionPointY_RIGHT, pufferFi.collisionPointY_BOTTOM);
            }
            for (let finalFish = 20; finalFish == 20; finalFish++) {
                const finalFi = this.level.enemies[finalFish];
                this.drawRectangle(ctx, finalFi.collisionPointX_LEFT, finalFi.collisionPointY_TOP, finalFi.collisionPointY_RIGHT, finalFi.collisionPointY_BOTTOM);
            }
            for (let i = 0; i < this.level.coins.length; i++) {
                const coin = this.level.coins[i];
                this.drawRectangle(ctx, coin.collisionPointX_LEFT, coin.collisionPointY_TOP, coin.collisionPointY_RIGHT, coin.collisionPointY_BOTTOM);
            }
            //END RECTANGLE DRAW!
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
    moveBackgroundToLeft() {
        if (this.level.backgrounds[0].x < 0) {
            this.level.backgrounds.forEach((background) => (background.x += 10));
            this.level.enemies.forEach((enemy) => (enemy.x += 10));
            this.level.coins.forEach((coin) => (coin.x += 10));
            this.level.bubbleBottles.forEach((bottle) => (bottle.randomTranslate += 10));
        }
    }
    moveBackgroundToRight() {
        if (this.level.backgrounds[this.level.backgrounds.length - 1].x > 250) {
            this.level.backgrounds.forEach((background) => (background.x -= 10));
            this.level.enemies.forEach((enemy) => (enemy.x -= 10));
            this.level.coins.forEach((coin) => (coin.x -= 10));
            this.level.bubbleBottles.forEach((bottle) => (bottle.randomTranslate -= 10));
        }
    }
    checkPositionMovableobjectIsInTheCorrectRange(movableObjectsInArray, maxTopY, maxBottemY) {
        movableObjectsInArray.forEach((currentMovableObject) => currentMovableObject.checkLimitPositionXandY(currentMovableObject, maxTopY, maxBottemY));
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
        objectToDraw.forEach((objectElement) => this.ctx.drawImage(objectElement.imgPath, objectElement.x, objectElement.y, objectElement.width, objectElement.height));
    }
    drawRotateStaticObject(objectToDraw) {
        let counterForSetImgToLeftRight = 0;
        objectToDraw.forEach((objectElement) => {
            let value = counterForSetImgToLeftRight % 2 ? true : false;
            objectElement.y = value ? (objectElement.y = -45) : false;
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
        this.drawRectangle(ctx, objectElement.x + 10, objectElement.y + 10, objectElement.width - 20, objectElement.height - 20);
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
