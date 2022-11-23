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
    objectBreakePointTop = 0;
    objectBreakePointBottom = 0;
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
            movableObject.collisionPointY_TOP = movableObject.objectBreakePointTop;
        }
        else if (movableObject.y > maxBottemY) {
            movableObject.y = maxBottemY;
            movableObject.collisionPointY_TOP = movableObject.objectBreakePointBottom;
        }
        else {
            false;
        }
    }
}
