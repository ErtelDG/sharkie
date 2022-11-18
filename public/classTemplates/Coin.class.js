"use strict";
class Coin extends StaticObjectsClass {
    constructor() {
        super("CoinClass");
        this.arrayAllImages = [
            "img/4.Marcadores/1.Coins/1.png",
            "img/4.Marcadores/1.Coins/2.png",
            "img/4.Marcadores/1.Coins/3.png",
            "img/4.Marcadores/1.Coins/3.png",
        ];
        this.width = 50;
        this.height = 50;
        this.x = Math.random() * 6000;
        this.y = Math.random() * 300;
        this.loadAllImgInCach(this.arrayAllImages);
        this.animation(100);
    }
}
