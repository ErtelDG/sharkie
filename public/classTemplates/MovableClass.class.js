"use strict";
class MovableClass extends BaseClass {
    constructor(name) {
        super("MovableClass");
        this.name = name;
        this.width = 100;
        this.height = 50;
        this.x = 10;
        this.y = 10;
    }
    speedStandard = 10;
    energy = 5;
    lastHit = 0;
    checkHit = true;
    hasHurt = false;
    hasHurtElectric = false;
    isDead = false;
    autoMoveLeft(speedObject) {
        this.x -= speedObject;
    }
    moveLeft(speedObject) {
        this.x -= speedObject;
    }
    moveRight(speedObject) {
        this.x += speedObject;
    }
    moveDown(speedObject) {
        this.y += speedObject;
    }
    moveUp(speedObject) {
        this.y -= speedObject;
    }
    checkLimitPositionXandY(movableObject, maxTopY, maxBottemY) {
        if (movableObject.y < maxTopY) {
            movableObject.y = maxTopY;
        }
        else if (movableObject.y > maxBottemY) {
            movableObject.y = maxBottemY;
        }
        else {
            false;
        }
    }
    /**
     * function => when user with enemy collision, reduce lives user character and end the game when energy/lives is null
     */
    hit() {
        this.energy -= 1;
        if (this.energy < 0) {
            console.log("gameover");
            //   HIER GAME OVER ANIMATION
        }
        else {
            this.lastHit = new Date().getTime();
        }
    }
    checkIsDead() {
        setInterval(() => {
            if (this.energy <= 0) {
                this.isDead = true;
            }
        }, 50);
    }
    /**
     * set colldown passed time for next hurt time
     */
    isHurt() {
        let timepassed = (new Date().getTime() - this.lastHit) / 1000;
        return timepassed < 1;
    }
}
