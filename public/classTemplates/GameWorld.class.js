"use strict";
class GameWorld {
    ctx = ctx;
    level;
    constructor() {
        this.level = level1;
        this.draw();
    }
    async draw() {
        console.log("Draw:");
        if (this.ctx != null) {
            this.level.background.forEach((backgroundElement) => {
                this.ctx.drawImage(backgroundElement.imgPath, backgroundElement.x, backgroundElement.y, backgroundElement.width, backgroundElement.height);
            });
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
}
