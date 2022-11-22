"use strict";
class Sharkie extends MovableClass {
    constructor() {
        super("Sharkie");
        this.setAllImagesInArray();
        this.checkDirectionOfMovement();
        this.loadInIntervallAllImg();
        this.loadInIntervallOneImg();
        this.width = 300;
        this.height = 250;
    }
    loadInIntervallOneImg() {
        setInterval(() => {
            this.loadOneImgFromCach();
        }, 150);
    }
    checkDirectionOfMovement() {
        setInterval(() => {
            //keyboard.LEFT ? this.moveLeft(10) : false;
            //keyboard.RIGHT ? this.moveRight(10) : false;
            keyboard.DOWN ? this.moveDown(10) : false;
            keyboard.UP ? this.moveUp(10) : false;
        }, 1000 / 30);
    }
    loadInIntervallAllImg() {
        setInterval(() => {
            this.loadAllImageArrayForCurrenttAnimation();
        }, 100);
    }
    arrayAllImages_IDLE = [];
    arrayAllImages_LONG_IDLE = [];
    arrayAllImages_SWIM = [];
    arrayAllImages_ATTACK_FIN_SLAP = [];
    arrayAllImages_ATTACK_INFLATE_POISONED_BUBBLE_FOR_WHALE = [];
    arrayAllImages_ATTACK_INFLATE_WHITE_BUBBLE_FOR_JELLY = [];
    loadAllImageArrayForCurrenttAnimation() {
        if (keyboard.LEFT || keyboard.RIGHT || keyboard.DOWN || keyboard.UP) {
            this.loadAllImgInCach(this.arrayAllImages_SWIM);
        }
        else if (keyboard.D) {
            this.loadAllImgInCach(this.arrayAllImages_ATTACK_FIN_SLAP);
        }
        else {
            this.loadAllImgInCach(this.arrayAllImages_IDLE);
        }
    }
    setAllImagesInArray() {
        this.arrayAllImages_IDLE = [
            "img/1.Sharkie/1.IDLE/1.png",
            "img/1.Sharkie/1.IDLE/2.png",
            "img/1.Sharkie/1.IDLE/3.png",
            "img/1.Sharkie/1.IDLE/4.png",
            "img/1.Sharkie/1.IDLE/5.png",
            "img/1.Sharkie/1.IDLE/6.png",
            "img/1.Sharkie/1.IDLE/7.png",
            "img/1.Sharkie/1.IDLE/8.png",
            "img/1.Sharkie/1.IDLE/9.png",
            "img/1.Sharkie/1.IDLE/10.png",
            "img/1.Sharkie/1.IDLE/11.png",
            "img/1.Sharkie/1.IDLE/12.png",
            "img/1.Sharkie/1.IDLE/13.png",
            "img/1.Sharkie/1.IDLE/14.png",
            "img/1.Sharkie/1.IDLE/15.png",
            "img/1.Sharkie/1.IDLE/16.png",
            "img/1.Sharkie/1.IDLE/17.png",
            "img/1.Sharkie/1.IDLE/18.png",
        ];
        this.arrayAllImages_LONG_IDLE = [
            "img/1.Sharkie/2.Long_IDLE/i1.png",
            "img/1.Sharkie/2.Long_IDLE/i2.png",
            "img/1.Sharkie/2.Long_IDLE/i3.png",
            "img/1.Sharkie/2.Long_IDLE/i4.png",
            "img/1.Sharkie/2.Long_IDLE/i5.png",
            "img/1.Sharkie/2.Long_IDLE/i6.png",
            "img/1.Sharkie/2.Long_IDLE/i7.png",
            "img/1.Sharkie/2.Long_IDLE/i8.png",
            "img/1.Sharkie/2.Long_IDLE/i9.png",
            "img/1.Sharkie/2.Long_IDLE/i10.png",
            "img/1.Sharkie/2.Long_IDLE/i11.png",
            "img/1.Sharkie/2.Long_IDLE/i12.png",
            "img/1.Sharkie/2.Long_IDLE/i13.png",
            "img/1.Sharkie/2.Long_IDLE/i14.png",
        ];
        this.arrayAllImages_SWIM = [
            "img/1.Sharkie/3.Swim/1.png",
            "img/1.Sharkie/3.Swim/2.png",
            "img/1.Sharkie/3.Swim/3.png",
            "img/1.Sharkie/3.Swim/4.png",
            "img/1.Sharkie/3.Swim/5.png",
            "img/1.Sharkie/3.Swim/6.png",
        ];
        this.arrayAllImages_ATTACK_FIN_SLAP = [
            "img/1.Sharkie/4.Attack/Fin_Slap/1.png",
            "img/1.Sharkie/4.Attack/Fin_Slap/2.png",
            "img/1.Sharkie/4.Attack/Fin_Slap/3.png",
            "img/1.Sharkie/4.Attack/Fin_Slap/4.png",
            "img/1.Sharkie/4.Attack/Fin_Slap/5.png",
            "img/1.Sharkie/4.Attack/Fin_Slap/6.png",
            "img/1.Sharkie/4.Attack/Fin_Slap/7.png",
            "img/1.Sharkie/4.Attack/Fin_Slap/8.png",
        ];
        this.arrayAllImages_ATTACK_INFLATE_POISONED_BUBBLE_FOR_WHALE = [
            "img/1.Sharkie/4.Attack/Bubble_Trap/For_Whale/1.png",
            "img/1.Sharkie/4.Attack/Bubble_Trap/For_Whale/2.png",
            "img/1.Sharkie/4.Attack/Bubble_Trap/For_Whale/3.png",
            "img/1.Sharkie/4.Attack/Bubble_Trap/For_Whale/4.png",
            "img/1.Sharkie/4.Attack/Bubble_Trap/For_Whale/5.png",
            "img/1.Sharkie/4.Attack/Bubble_Trap/For_Whale/6.png",
            "img/1.Sharkie/4.Attack/Bubble_Trap/For_Whale/7.png",
            "img/1.Sharkie/4.Attack/Bubble_Trap/For_Whale/8.png",
        ];
        this.arrayAllImages_ATTACK_INFLATE_WHITE_BUBBLE_FOR_JELLY = [
            "img/1.Sharkie/4.Attack/Bubble_Trap/For_Jelly/1.png",
            "img/1.Sharkie/4.Attack/Bubble_Trap/For_Jelly/2.png",
            "img/1.Sharkie/4.Attack/Bubble_Trap/For_Jelly/3.png",
            "img/1.Sharkie/4.Attack/Bubble_Trap/For_Jelly/4.png",
            "img/1.Sharkie/4.Attack/Bubble_Trap/For_Jelly/5.png",
            "img/1.Sharkie/4.Attack/Bubble_Trap/For_Jelly/6.png",
            "img/1.Sharkie/4.Attack/Bubble_Trap/For_Jelly/7.png",
            "img/1.Sharkie/4.Attack/Bubble_Trap/For_Jelly/8.png",
        ];
    }
}
