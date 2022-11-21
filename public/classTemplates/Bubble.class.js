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
        this.randomTranslate = this.randomTranslate;
        this.width = 80;
        this.height = 80;
        this.x = 0;
        this.y = 0;
        this.loadAllImgInCach(this.arrayAllImages);
        setInterval(() => {
            this.loadOneImgFromCach();
        }, 100);
    }
    randomTranslate = Math.random() * (6000 - 500) + 500;
}
