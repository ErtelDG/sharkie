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
    moveLeft(speed) {
        if (keyboard.LEFT) {
            this.x -= speed;
        }
    }
    moveRight(speed) {
        if (keyboard.RIGHT) {
            this.x += speed;
        }
    }
    moveDown(speed) {
        if (keyboard.DOWN) {
            this.y += speed;
        }
    }
    moveUp(speed) {
        if (keyboard.UP) {
            this.y -= speed;
        }
    }
}
