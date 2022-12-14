"use strict";
class Sharkie extends MovableClass {
    constructor() {
        super("Sharkie");
        this.width = 300;
        this.height = 250;
        this.loadImage("img/1.Sharkie/1.IDLE/1-min.png");
        this.setAllImagesInArray();
        this.loadAllImgInCorrectCach(this.arrayAllImages_ATTACK_FIN_SLAP, this.cach_ATTACK_FIN_SLAP);
        this.loadAllImgInCorrectCach(this.arrayAllImages_ATTACK_INFLATE_POISONED_BUBBLE_FOR_WHALE, this.cach_ATTACK_INFLATE_POISONED_BUBBLE_FOR_WHALE);
        this.loadAllImgInCorrectCach(this.arrayAllImages_ATTACK_INFLATE_WHITE_BUBBLE_FOR_JELLY, this.cach_ATTACK_INFLATE_WHITE_BUBBLE_FOR_JELLY);
        this.loadAllImgInCorrectCach(this.arrayAllImages_HAS_HURT, this.cach_HAS_HURT);
        this.loadAllImgInCorrectCach(this.arrayAllImages_HAS_HURT_ELECTRIC, this.cach_HAS_HURT_ELECTRIC);
        this.loadAllImgInCorrectCach(this.arrayAllImages_IDLE, this.cach_IDLE);
        this.loadAllImgInCorrectCach(this.arrayAllImages_IS_DEAD, this.cach_IS_DEAD);
        this.loadAllImgInCorrectCach(this.arrayAllImages_LONG_IDLE, this.cach_LONG_IDLE);
        this.loadAllImgInCorrectCach(this.arrayAllImages_SWIM, this.cach_SWIM);
        this.loadInIntervallAllImg();
        this.checkDirectionOfMovement();
        this.setColissionPointsObject(120, 60, 180, 120);
        this.checkIsDead();
        this.startTimerForIdleTime();
        this.breatheAnimation();
        this.pressSpace();
        this.loadInIntervallOneImg();
    }
    timeOver = true;
    fireBubble = false;
    pressSpace() {
        setInterval(() => (keyboard.SPACE == true ? (this.timeOver = false) : (this.timeOver = true)), 120);
    }
    loadInIntervallOneImg() {
        setInterval(() => (!this.isDead ? this.loadOneImgFromCach(this.imagesCach) : this.loadSharkieDeadImages()), 120);
    }
    checkDirectionOfMovement() {
        setInterval(() => {
            if (keyboard.DOWN)
                this.moveDown(10);
            if (keyboard.UP)
                this.moveUp(10);
        }, 1000 / 30);
    }
    loadInIntervallAllImg() {
        setInterval(() => (keyboard.SPACE == false ? this.loadAllImageArrayForCurrenttAnimation() : false), 1000 / 30);
    }
    cach_IDLE = [];
    cach_LONG_IDLE = [];
    cach_SWIM = [];
    cach_ATTACK_FIN_SLAP = [];
    cach_ATTACK_INFLATE_POISONED_BUBBLE_FOR_WHALE = [];
    cach_ATTACK_INFLATE_WHITE_BUBBLE_FOR_JELLY = [];
    cach_HAS_HURT = [];
    cach_IS_DEAD = [];
    cach_HAS_HURT_ELECTRIC = [];
    arrayAllImages_IDLE = [];
    arrayAllImages_LONG_IDLE = [];
    arrayAllImages_SWIM = [];
    arrayAllImages_ATTACK_FIN_SLAP = [];
    arrayAllImages_ATTACK_INFLATE_POISONED_BUBBLE_FOR_WHALE = [];
    arrayAllImages_ATTACK_INFLATE_WHITE_BUBBLE_FOR_JELLY = [];
    arrayAllImages_HAS_HURT = [];
    arrayAllImages_IS_DEAD = [];
    arrayAllImages_HAS_HURT_ELECTRIC = [];
    sharkieLastImagesCounter = 0;
    sharkieLastImages = this.arrayAllImages_IS_DEAD.length;
    isIdle = false;
    timerForIdleTime = 15;
    endFirCounter = 0;
    fireCounter = 0;
    startTimerForIdleTime() {
        setInterval(() => (this.isIdle ? this.timerForIdleTime-- : this.resetTimerForIdle()), 1000);
    }
    breatheAnimation() {
        setInterval(() => {
            if (keyboard.SPACE || (keyboard.F && gameworld.level.statusBarValue[2].counterBubble > 0)) {
                this.endFirCounter = keyboard.SPACE
                    ? this.arrayAllImages_ATTACK_INFLATE_WHITE_BUBBLE_FOR_JELLY.length
                    : this.arrayAllImages_ATTACK_INFLATE_POISONED_BUBBLE_FOR_WHALE.length;
                this.isIdle = false;
                this.endFirCounter > this.fireCounter ? this.loadImagesForBreathPoisonedBubbles() : this.resetFireCounter();
            }
        }, 75);
    }
    loadImagesForBreathPoisonedBubbles() {
        this.imagesCach = [];
        let img = new Image();
        img.src = keyboard.SPACE
            ? this.arrayAllImages_ATTACK_INFLATE_WHITE_BUBBLE_FOR_JELLY[this.fireCounter]
            : this.arrayAllImages_ATTACK_INFLATE_POISONED_BUBBLE_FOR_WHALE[this.fireCounter];
        this.imagesCach.push(img);
        this.fireCounter++;
    }
    resetFireCounter() {
        this.fireCounter = 0;
        this.fireBubble = false;
    }
    loadAllImageArrayForCurrenttAnimation() {
        if (this.hasHurt && !this.isDead) {
            this.isIdle = false;
            this.imagesCach = this.cach_HAS_HURT;
        }
        else if (this.hasHurtElectric == true) {
            this.isIdle = false;
            this.imagesCach = this.cach_HAS_HURT_ELECTRIC;
        }
        else if (this.isDead == true) {
            this.isIdle = false;
            this.imagesCach = this.cach_IS_DEAD;
        }
        else if (keyboard.LEFT || keyboard.RIGHT || keyboard.DOWN || keyboard.UP) {
            this.isIdle = false;
            this.imagesCach = this.cach_SWIM;
        }
        else if (keyboard.D && this.isAttack != true) {
            this.isIdle = false;
            this.imagesCach = this.cach_ATTACK_FIN_SLAP;
        }
        else if (this.timerForIdleTime <= 0) {
            this.imagesCach = this.cach_LONG_IDLE;
        }
        else if (this.isIdle == true) {
            this.imagesCach = this.cach_IDLE;
        }
    }
    setAllImagesInArray() {
        this.arrayAllImages_IDLE = [
            "img/1.Sharkie/1.IDLE/1-min.png",
            "img/1.Sharkie/1.IDLE/2-min.png",
            "img/1.Sharkie/1.IDLE/3-min.png",
            "img/1.Sharkie/1.IDLE/4-min.png",
            "img/1.Sharkie/1.IDLE/5-min.png",
            "img/1.Sharkie/1.IDLE/6-min.png",
            "img/1.Sharkie/1.IDLE/7-min.png",
            "img/1.Sharkie/1.IDLE/8-min.png",
            "img/1.Sharkie/1.IDLE/9-min.png",
            "img/1.Sharkie/1.IDLE/10-min.png",
            "img/1.Sharkie/1.IDLE/11-min.png",
            "img/1.Sharkie/1.IDLE/12-min.png",
            "img/1.Sharkie/1.IDLE/13-min.png",
            "img/1.Sharkie/1.IDLE/14-min.png",
            "img/1.Sharkie/1.IDLE/15-min.png",
            "img/1.Sharkie/1.IDLE/16-min.png",
            "img/1.Sharkie/1.IDLE/17-min.png",
            "img/1.Sharkie/1.IDLE/18-min.png",
        ];
        this.arrayAllImages_LONG_IDLE = [
            "img/1.Sharkie/2.Long_IDLE/I1-min.png",
            "img/1.Sharkie/2.Long_IDLE/I2-min.png",
            "img/1.Sharkie/2.Long_IDLE/I3-min.png",
            "img/1.Sharkie/2.Long_IDLE/I4-min.png",
            "img/1.Sharkie/2.Long_IDLE/I5-min.png",
            "img/1.Sharkie/2.Long_IDLE/I6-min.png",
            "img/1.Sharkie/2.Long_IDLE/I7-min.png",
            "img/1.Sharkie/2.Long_IDLE/I8-min.png",
            "img/1.Sharkie/2.Long_IDLE/I9-min.png",
            "img/1.Sharkie/2.Long_IDLE/I10-min.png",
            "img/1.Sharkie/2.Long_IDLE/I11-min.png",
            "img/1.Sharkie/2.Long_IDLE/I12-min.png",
            "img/1.Sharkie/2.Long_IDLE/I13-min.png",
            "img/1.Sharkie/2.Long_IDLE/I14-min.png",
        ];
        this.arrayAllImages_SWIM = [
            "img/1.Sharkie/3.Swim/1-min.png",
            "img/1.Sharkie/3.Swim/2-min.png",
            "img/1.Sharkie/3.Swim/3-min.png",
            "img/1.Sharkie/3.Swim/4-min.png",
            "img/1.Sharkie/3.Swim/5-min.png",
            "img/1.Sharkie/3.Swim/6-min.png",
        ];
        this.arrayAllImages_ATTACK_FIN_SLAP = [
            "img/1.Sharkie/4.Attack/Fin_Slap/1-min.png",
            "img/1.Sharkie/4.Attack/Fin_Slap/2-min.png",
            "img/1.Sharkie/4.Attack/Fin_Slap/3-min.png",
            "img/1.Sharkie/4.Attack/Fin_Slap/4-min.png",
            "img/1.Sharkie/4.Attack/Fin_Slap/5-min.png",
            "img/1.Sharkie/4.Attack/Fin_Slap/6-min.png",
            "img/1.Sharkie/4.Attack/Fin_Slap/7-min.png",
            "img/1.Sharkie/4.Attack/Fin_Slap/8-min.png",
        ];
        this.arrayAllImages_ATTACK_INFLATE_POISONED_BUBBLE_FOR_WHALE = [
            "img/1.Sharkie/4.Attack/Bubble_Trap/For_Whale/1-min.png",
            "img/1.Sharkie/4.Attack/Bubble_Trap/For_Whale/2-min.png",
            "img/1.Sharkie/4.Attack/Bubble_Trap/For_Whale/3-min.png",
            "img/1.Sharkie/4.Attack/Bubble_Trap/For_Whale/4-min.png",
            "img/1.Sharkie/4.Attack/Bubble_Trap/For_Whale/5-min.png",
            "img/1.Sharkie/4.Attack/Bubble_Trap/For_Whale/6-min.png",
            "img/1.Sharkie/4.Attack/Bubble_Trap/For_Whale/7-min.png",
            "img/1.Sharkie/4.Attack/Bubble_Trap/For_Whale/8-min.png",
        ];
        this.arrayAllImages_ATTACK_INFLATE_WHITE_BUBBLE_FOR_JELLY = [
            "img/1.Sharkie/4.Attack/Bubble_Trap/For_Jelly/1-min.png",
            "img/1.Sharkie/4.Attack/Bubble_Trap/For_Jelly/1-min.png",
            "img/1.Sharkie/4.Attack/Bubble_Trap/For_Jelly/2-min.png",
            "img/1.Sharkie/4.Attack/Bubble_Trap/For_Jelly/3-min.png",
            "img/1.Sharkie/4.Attack/Bubble_Trap/For_Jelly/4-min.png",
            "img/1.Sharkie/4.Attack/Bubble_Trap/For_Jelly/5-min.png",
            "img/1.Sharkie/4.Attack/Bubble_Trap/For_Jelly/6-min.png",
            "img/1.Sharkie/4.Attack/Bubble_Trap/For_Jelly/7-min.png",
            "img/1.Sharkie/4.Attack/Bubble_Trap/For_Jelly/8-min.png",
        ];
        this.arrayAllImages_HAS_HURT = [
            "img/1.Sharkie/5.Hurt/1.Poisoned/2-min.png",
            "img/1.Sharkie/5.Hurt/1.Poisoned/3-min.png",
            "img/1.Sharkie/5.Hurt/1.Poisoned/4-min.png",
            "img/1.Sharkie/5.Hurt/1.Poisoned/5-min.png",
        ];
        this.arrayAllImages_HAS_HURT_ELECTRIC = [
            "img/1.Sharkie/5.Hurt/2.ElectricShock/1-min.png",
            "img/1.Sharkie/5.Hurt/2.ElectricShock/2-min.png",
            "img/1.Sharkie/5.Hurt/2.ElectricShock/3-min.png",
        ];
        this.arrayAllImages_IS_DEAD = [
            "img/1.Sharkie/6.dead/1.Poisoned/1-min.png",
            "img/1.Sharkie/6.dead/1.Poisoned/2-min.png",
            "img/1.Sharkie/6.dead/1.Poisoned/3-min.png",
            "img/1.Sharkie/6.dead/1.Poisoned/4-min.png",
            "img/1.Sharkie/6.dead/1.Poisoned/5-min.png",
            "img/1.Sharkie/6.dead/1.Poisoned/6-min.png",
            "img/1.Sharkie/6.dead/1.Poisoned/7-min.png",
            "img/1.Sharkie/6.dead/1.Poisoned/8-min.png",
            "img/1.Sharkie/6.dead/1.Poisoned/9-min.png",
            "img/1.Sharkie/6.dead/1.Poisoned/10-min.png",
            "img/1.Sharkie/6.dead/1.Poisoned/11-min.png",
            "img/1.Sharkie/6.dead/1.Poisoned/12-min.png",
        ];
    }
    resetTimerForIdle() {
        this.timerForIdleTime = 5;
        this.isIdle = true;
    }
    loadSharkieDeadImages() {
        this.sharkieLastImages = this.cach_IS_DEAD.length;
        if (this.sharkieLastImagesCounter < this.sharkieLastImages) {
            this.sharkieLastImagesCounter++;
            this.loadOneImgFromCach(this.imagesCach);
        }
        else {
            this.stopAllIntervals();
            secondContain?.classList.add("hidden");
            secondContain?.classList.remove("flex");
            thirdContain?.classList.remove("hidden");
            thirdContain?.classList.add("grid");
            imageYouWin?.classList.add("hidden");
            imageGameOver?.classList.remove("hidden");
        }
    }
}
