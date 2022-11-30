"use strict";
class Bubble extends BaseClass {
    constructor(name) {
        super("BubbleClass");
        this.arrayAllImages = ["img/1.Sharkie/4.Attack/Bubble_Trap/Bubble.png"];
        this.width = 100;
        this.height = 100;
        this.x = 200;
        this.y = 200;
        this.loadAllImgInCach(this.arrayAllImages);
        this.animation(100);
        this.setColissionPointsObject(5, 5, 10, 10);
    }
}
