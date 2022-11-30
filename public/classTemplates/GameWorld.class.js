"use strict";
class GameWorld {
    ctx = ctx;
    level;
    sharkie;
    bubble = [];
    constructor() {
        this.ctx.font = "48px MyWebFont";
        this.ctx.fillStyle = "white";
        this.level = level1;
        this.sharkie = [new Sharkie()];
        this.draw();
        this.fireBubble(this.sharkie);
    }
    async draw() {
        if (this.ctx != null) {
            this.ctx.clearRect(0, 0, canvas.width, canvas.height);
            this.checkPositionMovableobjectIsInTheCorrectRange(this.sharkie, -50, 200);
            this.drawStaticObject(this.level.backgrounds);
            this.drawStaticObject(this.level.coins);
            this.drawStaticObject(this.bubble);
            this.drawStaticObject(this.level.statusBar);
            this.drawText(this.level.statusBarValue);
            keyboard.LEFT ? this.drawMirrowObjectToCanvas(this.sharkie) : this.drawMovableObject(this.sharkie);
            this.ctx.restore();
            keyboard.LEFT ? this.moveBackgroundToLeft() : keyboard.RIGHT ? this.moveBackgroundToRight() : false;
            this.drawMovableObject(this.level.enemies);
            this.drawRotateStaticObject(this.level.bubbleBottles);
            this.checkCollisionPickObjects(this.sharkie, this.level.coins);
            this.checkCollisionEnemies(this.sharkie, this.level.enemies);
            this.checkCollisionPickTransformObjects(this.sharkie, this.level.bubbleBottles);
            this.bubbleCollisionWithEnemies(this.bubble, this.level.enemies);
            //Rectangle DRAW!!
            this.drawRectangle(ctx, this.sharkie[0].collisionPointX_LEFT, this.sharkie[0].collisionPointY_TOP, this.sharkie[0].collisionPointX_RIGHT, this.sharkie[0].collisionPointY_BOTTOM);
            this.bubble.forEach((drawBubble) => {
                this.drawRectangle(ctx, drawBubble.collisionPointX_LEFT, drawBubble.collisionPointY_TOP, drawBubble.collisionPointX_RIGHT, drawBubble.collisionPointY_BOTTOM);
            });
            this.level.enemies.forEach((enemie) => {
                this.drawRectangle(ctx, enemie.collisionPointX_LEFT + 10, enemie.collisionPointY_TOP, enemie.collisionPointX_RIGHT, enemie.collisionPointY_BOTTOM);
            });
            this.level.coins.forEach((coin) => {
                this.drawRectangle(ctx, coin.collisionPointX_LEFT, coin.collisionPointY_TOP, coin.collisionPointX_RIGHT, coin.collisionPointY_BOTTOM);
            });
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
            this.bubble.forEach((bubble) => (bubble.x += 10));
        }
    }
    moveBackgroundToRight() {
        if (this.level.backgrounds[this.level.backgrounds.length - 1].x > 250) {
            this.level.backgrounds.forEach((background) => (background.x -= 10));
            this.level.enemies.forEach((enemy) => (enemy.x -= 10));
            this.level.coins.forEach((coin) => (coin.x -= 10));
            this.level.bubbleBottles.forEach((bottle) => (bottle.randomTranslate -= 10));
            this.bubble.forEach((bubble) => (bubble.x -= 10));
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
            try {
                this.ctx.drawImage(movableObject.imgPath, movableObject.x, movableObject.y, movableObject.width, movableObject.height);
            }
            catch (e) {
                console.warn("Error loading Image", e);
                console.warn("Could not load", movableObject.imgPath);
            }
        });
    }
    checkCollisionPickObjects(sharkieArray, objectArray) {
        sharkieArray.forEach((sharkie) => {
            objectArray.forEach((object) => {
                if (this.collisionBreakepointsObjectWithEnemy(sharkie, object)) {
                    objectArray.splice(objectArray.indexOf(object), 1);
                    this.level.statusBar.forEach((checkStatusBar) => {
                        if (checkStatusBar.name == "coin") {
                            this.level.statusBarValue[1].counterCoin++;
                        }
                    });
                }
            });
        });
    }
    checkCollisionEnemies(sharkieArray, objectArray) {
        sharkieArray.forEach((sharkie) => {
            objectArray.forEach((object) => {
                if (keyboard.D && !sharkie.isAttack && !sharkie.hasHurt) {
                    if (this.collisionBreakepointsSharkieObjectsFinSlap(sharkie, object)) {
                        sharkie.isAttack = true;
                        if (object.name != "EnemyFinalFish" && object.name == "EnemyPufferFish") {
                            object.isDead = true;
                            setTimeout(() => {
                                objectArray.splice(objectArray.indexOf(object), 1);
                            }, 2500);
                        }
                        else {
                            object.energy--;
                            this.level.statusBar[3].counterFinalFish--;
                            console.log(object.energy);
                        }
                        sharkie.checkHit = false;
                        setTimeout(() => {
                            if (sharkie.isDead != true) {
                                sharkie.checkHit = true;
                            }
                            sharkie.hasHurt = false;
                            sharkie.hasHurtElectric = false;
                            sharkie.isAttack = false;
                        }, 250);
                    }
                }
                else if (this.collisionBreakepointsObjectWithEnemy(sharkie, object)) {
                    if (sharkie.checkHit == true) {
                        console.log(object);
                        this.level.statusBar.forEach((checkStatusBar) => {
                            if (checkStatusBar.name == "life") {
                                this.level.statusBarValue[0].counterLife--;
                            }
                            if (checkStatusBar.name == "life" && this.level.statusBarValue[0].counterLife == 0) {
                                sharkie.isDead = true;
                            }
                        });
                        if (object.name == "EnemyPufferFish") {
                            sharkie.hasHurt = true;
                        }
                        else if (object.name == "EnemyJellyFishLila") {
                            sharkie.hasHurtElectric = true;
                        }
                        else {
                            sharkie.hasHurt = true;
                        }
                        sharkie.checkHit = false;
                        sharkie.hit();
                        // sharkie.isHurt();
                        setTimeout(() => {
                            if (sharkie.isDead != true) {
                                sharkie.checkHit = true;
                            }
                            sharkie.hasHurt = false;
                            sharkie.hasHurtElectric = false;
                        }, 2000);
                    }
                    if (sharkie.isDead == true) {
                        sharkie.checkHit = false;
                    }
                }
            });
        });
    }
    checkCollisionPickTransformObjects(sharkieArray, objectArray) {
        sharkieArray.forEach((sharkie) => {
            objectArray.forEach((object) => {
                if (sharkie.collisionPointX_LEFT < object.randomTranslate + 70 &&
                    sharkie.collisionPointX_LEFT + sharkie.collisionPointX_RIGHT > object.randomTranslate - 20 &&
                    sharkie.collisionPointY_TOP + sharkie.collisionPointY_BOTTOM > object.height + 205) {
                    object.randomTranslate = -1000;
                    this.level.statusBar.forEach((checkStatusBar) => {
                        if (checkStatusBar.name == "bubble") {
                            this.level.statusBarValue[2].counterBubble++;
                        }
                    });
                }
            });
        });
    }
    fireBubble(sharkieArray) {
        sharkieArray.forEach((sharkie) => {
            setInterval(() => {
                sharkie.fireBubble = true;
                if (keyboard.SPACE && sharkie.fireBubble) {
                    this.createFireBubble(sharkie);
                }
                else {
                    sharkie.fireBubble = false;
                }
            }, 500);
        });
    }
    createFireBubble(sharkie) {
        setTimeout(() => {
            if (keyboard.SPACE && sharkie.fireBubble == true) {
                this.bubble.push(new Bubble("Bubble", sharkie.x + sharkie.width / 1.3, sharkie.y + 100));
                sharkie.fireBubble = false;
                setTimeout(() => {
                    sharkie.fireBubble = true;
                }, 500);
            }
            else {
                sharkie.fireBubble = false;
            }
        }, 100);
    }
    bubbleCollisionWithEnemies(bubbles, enemies) {
        setInterval(() => {
            bubbles.forEach((bubble) => enemies.forEach((enemy) => {
                if (this.collisionBreakepointsObjectWithEnemy(bubble, enemy) == true) {
                    if (enemy.name == "EnemyJellyFishLila") {
                        console.log("JELLYFISH");
                        enemies.splice(enemies.indexOf(enemy), 1);
                    }
                    else if (enemy.name == "EnemyPufferFish") {
                        console.log("PUFFERFISH");
                        enemies.splice(enemies.indexOf(enemy), 1);
                    }
                    else {
                        console.log("FINALFISH");
                        enemies.splice(enemies.indexOf(enemy), 1);
                    }
                }
            }));
        }, 200);
    }
    collisionBreakepointsObjectWithEnemy(object, enemy) {
        return (object.collisionPointX_LEFT < enemy.collisionPointX_LEFT + enemy.collisionPointX_RIGHT &&
            object.collisionPointX_LEFT + object.collisionPointX_RIGHT > enemy.collisionPointX_LEFT &&
            object.collisionPointY_TOP + object.collisionPointY_BOTTOM > enemy.collisionPointY_TOP &&
            object.collisionPointY_TOP < enemy.collisionPointY_TOP + enemy.collisionPointY_BOTTOM);
    }
    collisionBreakepointsSharkieObjectsFinSlap(sharkie, object) {
        return (sharkie.collisionPointX_LEFT + 150 < object.collisionPointX_LEFT + object.collisionPointX_RIGHT &&
            sharkie.collisionPointX_LEFT + 150 + sharkie.collisionPointX_RIGHT - 130 > object.collisionPointX_LEFT &&
            sharkie.collisionPointY_TOP + sharkie.collisionPointY_BOTTOM > object.collisionPointY_TOP &&
            sharkie.collisionPointY_TOP < object.collisionPointY_TOP + object.collisionPointY_BOTTOM);
    }
}
