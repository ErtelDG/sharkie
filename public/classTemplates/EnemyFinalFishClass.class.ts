"use strict";
class EnemyFinalFish extends EnemyClass {
   constructor() {
      super("EnemyFinalFish");
      this.setAllImagesInArray(this.movableImages);
      this.loadAllImgInCach(this.arrayAllImages);
      this.loadCorrectImageArray();
      this.switchStatusFinalFish();
      this.width = 400;
      this.height = 400;
      this.x = 1500;
      this.y = 0;
      this.setColissionPointsObject(140, 30, 210, 80);
      this.name = "EnemyFinalFish";
      this.loadImageIsDeadOrNot(this.deadImages);
   }

   switchStatusFinalFish() {
      setInterval(() => {
         if (!this.isDead && !this.hasHurt && !this.isAttack) {
            this.isAttack = true;
            setTimeout(() => {
               this.isAttack = false;
            }, 1000);
         }
      }, 2000);
   }

   loadCorrectImageArray() {
      setInterval(() => {
         if (this.isDead) {
            this.loadAllImgInCach(this.deadImages);
         } else if (this.hasHurt) {
            this.loadAllImgInCach(this.hurtImages);
            this.autoMoveLeft(-22);
         } else if (this.isAttack) {
            this.loadAllImgInCach(this.attackImages);
            this.autoMoveLeft(25);
         } else {
            this.loadAllImgInCach(this.movableImages);
            this.autoMoveLeft(16);
         }
         this.loadOneImgFromCach();
      }, 100);
   }

   movableImages = [
      "img/2.Enemy/3FinalEnemy/2.floating/1.png",
      "img/2.Enemy/3FinalEnemy/2.floating/2.png",
      "img/2.Enemy/3FinalEnemy/2.floating/3.png",
      "img/2.Enemy/3FinalEnemy/2.floating/4.png",
      "img/2.Enemy/3FinalEnemy/2.floating/5.png",
      "img/2.Enemy/3FinalEnemy/2.floating/6.png",
      "img/2.Enemy/3FinalEnemy/2.floating/7.png",
      "img/2.Enemy/3FinalEnemy/2.floating/8.png",
      "img/2.Enemy/3FinalEnemy/2.floating/9.png",
      "img/2.Enemy/3FinalEnemy/2.floating/10.png",
      "img/2.Enemy/3FinalEnemy/2.floating/11.png",
      "img/2.Enemy/3FinalEnemy/2.floating/12.png",
      "img/2.Enemy/3FinalEnemy/2.floating/13.png",
   ];

   deadImages = [
      "img/2.Enemy/3FinalEnemy/Dead/dead1.png",
      "img/2.Enemy/3FinalEnemy/Dead/dead2.png",
      "img/2.Enemy/3FinalEnemy/Dead/dead3.png",
      "img/2.Enemy/3FinalEnemy/Dead/dead4.png",
      "img/2.Enemy/3FinalEnemy/Dead/dead5.png",
      "img/2.Enemy/3FinalEnemy/Dead/dead6.png",
   ];

   hurtImages = [
      "img/2.Enemy/3FinalEnemy/Hurt/1.png",
      "img/2.Enemy/3FinalEnemy/Hurt/2.png",
      "img/2.Enemy/3FinalEnemy/Hurt/3.png",
      "img/2.Enemy/3FinalEnemy/Hurt/4.png",
   ];

   attackImages = [
      "img/2.Enemy/3FinalEnemy/Attack/1.png",
      "img/2.Enemy/3FinalEnemy/Attack/2.png",
      "img/2.Enemy/3FinalEnemy/Attack/3.png",
      "img/2.Enemy/3FinalEnemy/Attack/4.png",
      "img/2.Enemy/3FinalEnemy/Attack/5.png",
      "img/2.Enemy/3FinalEnemy/Attack/6.png",
   ];
}
