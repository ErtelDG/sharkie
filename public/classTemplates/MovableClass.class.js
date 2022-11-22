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
    setLimitPositionXandY(movableObject) {
        if (movableObject.y < 10) {
            movableObject.y = 0;
        }
        else if (movableObject.y > 200) {
            movableObject.y = 200;
        }
        else {
            false;
        }
    }
}
