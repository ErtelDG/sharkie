"use strict";
class EnemyFinalFish extends EnemyClass {
    constructor() {
        super("EnemyFinalFish");
        this.loadAllImgInCorrectCach(this.movableImages, this.cach_MOVABLE_IMAGES);
        this.loadAllImgInCorrectCach(this.deadImages, this.cach_DEAD_IMAGES);
        this.loadAllImgInCorrectCach(this.hurtImages, this.cach_HURT_IMAGES);
        this.loadAllImgInCorrectCach(this.attackImages, this.cach_ATTACK_IMAGES);
        this.loadCorrectImageArray();
        this.switchStatusFinalFish();
        this.width = 400;
        this.height = 400;
        this.x = 1500;
        this.y = 0;
        this.setColissionPointsObject(140, 30, 210, 80);
        this.name = "EnemyFinalFish";
        this.loadImageIsDeadOrNot(this.cach_DEAD_IMAGES);
        this.checkIsDead();
    }
    switchStatusFinalFish() {
        setInterval(() => {
            if (!this.isDead && !this.hasHurt && !this.isAttack) {
                this.isAttack = true;
                setTimeout(() => !this.isAttack, 1000);
            }
        }, 2000);
    }
    loadCorrectImageArray() {
        setInterval(() => {
            if (this.isDead) {
                this.winAnimationSharkie();
            }
            else if (this.hasHurt) {
                this.hasHurtAnimation();
            }
            else if (this.isAttack) {
                this.atAttackAnimation();
            }
            else {
                this.movableAnimation();
            }
            this.loadOneImgFromCach(this.imagesCach);
        }, 120);
    }
    movableAnimation() {
        this.imagesCach = this.cach_MOVABLE_IMAGES;
        this.autoMoveLeft(10);
    }
    atAttackAnimation() {
        this.imagesCach = this.cach_ATTACK_IMAGES;
        this.autoMoveLeft(15);
    }
    hasHurtAnimation() {
        this.imagesCach = this.cach_HURT_IMAGES;
        this.autoMoveLeft(-22);
    }
    async winAnimationSharkie() {
        this.imagesCach = await this.cach_DEAD_IMAGES;
        setTimeout(() => {
            this.stopAllIntervals();
            this.getEndImages();
        }, 1000);
    }
    getEndImages() {
        secondContain?.classList.add("hidden");
        secondContain?.classList.remove("flex");
        thirdContain?.classList.remove("hidden");
        thirdContain?.classList.add("grid");
        imageYouWin?.classList.remove("hidden");
        imageGameOver?.classList.add("hidden");
        this.sounds.winSound.play();
    }
    cach_MOVABLE_IMAGES = [];
    movableImages = [
        "img/2.Enemy/3FinalEnemy/2.floating/1-min.png",
        "img/2.Enemy/3FinalEnemy/2.floating/2-min.png",
        "img/2.Enemy/3FinalEnemy/2.floating/3-min.png",
        "img/2.Enemy/3FinalEnemy/2.floating/4-min.png",
        "img/2.Enemy/3FinalEnemy/2.floating/5-min.png",
        "img/2.Enemy/3FinalEnemy/2.floating/6-min.png",
        "img/2.Enemy/3FinalEnemy/2.floating/7-min.png",
        "img/2.Enemy/3FinalEnemy/2.floating/8-min.png",
        "img/2.Enemy/3FinalEnemy/2.floating/9-min.png",
        "img/2.Enemy/3FinalEnemy/2.floating/10-min.png",
        "img/2.Enemy/3FinalEnemy/2.floating/11-min.png",
        "img/2.Enemy/3FinalEnemy/2.floating/12-min.png",
        "img/2.Enemy/3FinalEnemy/2.floating/13-min.png",
    ];
    cach_DEAD_IMAGES = [];
    deadImages = [
        "img/2.Enemy/3FinalEnemy/Dead/dead1-min.png",
        "img/2.Enemy/3FinalEnemy/Dead/dead2-min.png",
        "img/2.Enemy/3FinalEnemy/Dead/dead3-min.png",
        "img/2.Enemy/3FinalEnemy/Dead/dead4-min.png",
        "img/2.Enemy/3FinalEnemy/Dead/dead5-min.png",
        "img/2.Enemy/3FinalEnemy/Dead/dead6-min.png",
    ];
    cach_HURT_IMAGES = [];
    hurtImages = [
        "img/2.Enemy/3FinalEnemy/Hurt/1-min.png",
        "img/2.Enemy/3FinalEnemy/Hurt/2-min.png",
        "img/2.Enemy/3FinalEnemy/Hurt/3-min.png",
        "img/2.Enemy/3FinalEnemy/Hurt/4-min.png",
    ];
    cach_ATTACK_IMAGES = [];
    attackImages = [
        "img/2.Enemy/3FinalEnemy/Attack/1-min.png",
        "img/2.Enemy/3FinalEnemy/Attack/2-min.png",
        "img/2.Enemy/3FinalEnemy/Attack/3-min.png",
        "img/2.Enemy/3FinalEnemy/Attack/4-min.png",
        "img/2.Enemy/3FinalEnemy/Attack/5-min.png",
        "img/2.Enemy/3FinalEnemy/Attack/6-min.png",
    ];
}
