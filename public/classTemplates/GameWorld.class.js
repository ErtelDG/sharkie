"use strict";
class GameWorld {
    ctx = ctx;
    level;
    constructor() {
        this.level = level1;
        this.draw();
    }
    async draw() {
        if (this.ctx != null) {
            this.drawStaticObject(this.level.backgrounds);
            this.drawStaticObject(this.level.coins);
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
}
