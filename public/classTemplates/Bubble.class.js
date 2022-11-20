"use strict";
class Bubble extends BaseClass {
    constructor(imgPath, x, y) {
        super("Bubble");
        this.arrayAllImages = [
            "img/4.Marcadores/PosionedBubble/Animada/1.png",
            "img/4.Marcadores/PosionedBubble/Animada/2.png",
            "img/4.Marcadores/PosionedBubble/Animada/3.png",
            "img/4.Marcadores/PosionedBubble/Animada/4.png",
            "img/4.Marcadores/PosionedBubble/Animada/5.png",
            "img/4.Marcadores/PosionedBubble/Animada/6.png",
            "img/4.Marcadores/PosionedBubble/Animada/7.png",
            "img/4.Marcadores/PosionedBubble/Animada/8.png",
        ];
        this.width = 80;
        this.height = 80;
        // this.x = Math.random() * (6000 - 500) + 500;
        // this.y = Math.random() * (300 - 280) + 280;
        this.x = 400;
        this.y = 100;
        this.loadAllImgInCach(this.arrayAllImages);
        setInterval(() => {
            this.loadOneImgFromCach();
        }, 100);
    }
}
