class GameWorld {
   ctx: any = ctx;
   level;
   sharkie;

   constructor() {
      this.ctx.font = "48px MyWebFont";
      this.ctx.fillStyle = "white";
      this.level = level1;

      this.sharkie = [new Sharkie()];
      this.draw();
   }

   async draw() {
      if (this.ctx != null) {
         this.ctx.clearRect(0, 0, canvas.width, canvas.height);
         this.checkPositionMovableobjectIsInTheCorrectRange(this.sharkie);
         this.drawStaticObject(this.level.backgrounds);
         this.drawStaticObject(this.level.coins);
         this.drawRotateStaticObject(this.level.bubbleBottles);
         this.drawStaticObject(this.level.statusBar);
         this.drawText(this.level.statusBarValue);
         keyboard.LEFT ? this.drawMirrowObjectToCanvas(this.sharkie) : this.drawMovableObject(this.sharkie);
         this.ctx.restore();
         this.drawMovableObject(this.level.enemies);

         this.drawRectangle(ctx, this.sharkie[0].x + 60, this.sharkie[0].y + 120, this.sharkie[0].width - 120, this.sharkie[0].height - 180);
         for (let pufferFish = 0; pufferFish < 10; pufferFish++) {
            const pufferFi = this.level.enemies[pufferFish];
            this.drawRectangle(ctx, pufferFi.x, pufferFi.y, pufferFi.width - 10, pufferFi.height - 20);
         }
         for (let jellyFish = 11; jellyFish < 20; jellyFish++) {
            const jellyFi = this.level.enemies[jellyFish];
            this.drawRectangle(ctx, jellyFi.x + 10, jellyFi.y + 15, jellyFi.width - 15, jellyFi.height - 25);
         }
         for (let i = 0; i < this.level.coins.length; i++) {
            const coin = this.level.coins[i];
            this.drawRectangle(ctx, coin.x + 5, coin.y + 5, coin.width - 10, coin.height - 10);
         }
      }

      this.requestAnimation();
   }

   drawRectangle(context: any, x: any, y: any, width: any, height: any) {
      context.strokeRect(x, y, width, height);
      context.lineWidth = 4;
      context.strokeStyle = "white";
      context.stroke();
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

   checkPositionMovableobjectIsInTheCorrectRange(movableObjectsInArray: any[]) {
      movableObjectsInArray.forEach((currentMovableObject: { setLimitPositionXandY: (arg0: any) => void }) => {
         currentMovableObject.setLimitPositionXandY(currentMovableObject);
      });
   }

   drawMirrowObjectToCanvas(objectsToDraw: any[]) {
      objectsToDraw.forEach((objectX: { imgPath: any; x: number; y: any; width: number; height: any }) => {
         this.ctx.save();
         this.ctx.scale(-1, 1);
         this.ctx.drawImage(objectX.imgPath, objectX.x * -1, objectX.y, objectX.width * -1, objectX.height);
         this.ctx.restore();
      });
   }

   loadImage() {
      this.level.background[0].loadOneImgFromCach(this.level.background[0].imageCach);
   }

   drawStaticObject(objectToDraw: any) {
      objectToDraw.forEach((objectElement: { imgPath: any; x: any; y: any; width: any; height: any }) => {
         this.ctx.drawImage(objectElement.imgPath, objectElement.x, objectElement.y, objectElement.width, objectElement.height);
      });
   }

   drawRotateStaticObject(objectToDraw: any) {
      let counterForSetImgToLeftRight = 0;
      objectToDraw.forEach((objectElement: { randomTranslate: any; imgPath: any; x: any; y: any; width: any; height: any }) => {
         let value = counterForSetImgToLeftRight % 2 ? true : false;
         objectElement.x = value ? objectElement.x : (objectElement.x = -45);
         let rotate = value ? 45 : 315;
         counterForSetImgToLeftRight++;
         this.drawTheRotateStaticObject(objectElement, rotate);
      });
   }

   drawTheRotateStaticObject(objectElement: { randomTranslate: any; imgPath: any; x: any; y: any; width: any; height: any }, rotate: number) {
      this.ctx.save();
      this.ctx.translate(objectElement.randomTranslate, 300);
      this.ctx.rotate((rotate * Math.PI) / 180);
      this.ctx.drawImage(objectElement.imgPath, objectElement.x, objectElement.y, objectElement.width, objectElement.height);
      this.drawRectangle(ctx, objectElement.x + 10, objectElement.y + 10, objectElement.width - 20, objectElement.height - 20);
      this.ctx.restore();
   }

   drawText(objectToDraw: any) {
      objectToDraw.forEach((objectElement: { currentCounterForThisObject: any; x: any; y: any }) => {
         this.ctx.fillText(objectElement.currentCounterForThisObject, objectElement.x, objectElement.y);
      });
   }

   drawMovableObject(movableObjectArray: any) {
      movableObjectArray.forEach((movableObject: { imgPath: any; x: any; y: any; width: any; height: any }) => {
         this.ctx.drawImage(movableObject.imgPath, movableObject.x, movableObject.y, movableObject.width, movableObject.height);
      });
   }
}
