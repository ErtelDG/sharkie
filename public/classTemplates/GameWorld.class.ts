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
         this.checkPositionMovableobjectIsInTheCorrectRange(this.sharkie, -50, 200);
         this.drawStaticObject(this.level.backgrounds);
         this.drawStaticObject(this.level.coins);

         this.drawStaticObject(this.level.statusBar);
         this.drawText(this.level.statusBarValue);
         keyboard.LEFT ? this.drawMirrowObjectToCanvas(this.sharkie) : this.drawMovableObject(this.sharkie);
         this.ctx.restore();
         keyboard.LEFT ? this.moveBackgroundToLeft() : keyboard.RIGHT ? this.moveBackgroundToRight() : false;

         this.drawMovableObject(this.level.enemies);
         this.drawRotateStaticObject(this.level.bubbleBottles);

         this.level.coins.forEach((coin: any) => {
            if (
               this.sharkie[0].collisionPointX_LEFT < coin.collisionPointX_LEFT + coin.collisionPointX_RIGHT &&
               this.sharkie[0].collisionPointX_LEFT + this.sharkie[0].collisionPointX_RIGHT > coin.collisionPointX_LEFT&&
               this.sharkie[0].collisionPointY_TOP + this.sharkie[0].collisionPointY_BOTTOM>coin.collisionPointY_TOP&&
               this.sharkie[0].collisionPointY_TOP < coin.collisionPointY_TOP+coin.collisionPointY_BOTTOM
            ) {
               console.log("COIN");
            }
         });

         //Rectangle DRAW!!
         this.drawRectangle(
            ctx,
            this.sharkie[0].collisionPointX_LEFT,
            this.sharkie[0].collisionPointY_TOP,
            this.sharkie[0].collisionPointX_RIGHT,
            this.sharkie[0].collisionPointY_BOTTOM
         );
         this.level.enemies.forEach(
            (enemie: { collisionPointX_LEFT: any; collisionPointY_TOP: any; collisionPointX_RIGHT: any; collisionPointY_BOTTOM: any }) => {
               this.drawRectangle(ctx, enemie.collisionPointX_LEFT, enemie.collisionPointY_TOP, enemie.collisionPointX_RIGHT, enemie.collisionPointY_BOTTOM);
            }
         );
         this.level.coins.forEach((coin: { collisionPointX_LEFT: any; collisionPointY_TOP: any; collisionPointX_RIGHT: any; collisionPointY_BOTTOM: any }) => {
            this.drawRectangle(ctx, coin.collisionPointX_LEFT, coin.collisionPointY_TOP, coin.collisionPointX_RIGHT, coin.collisionPointY_BOTTOM);
         });

         //END RECTANGLE DRAW!
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

   moveBackgroundToLeft() {
      if (this.level.backgrounds[0].x < 0) {
         this.level.backgrounds.forEach((background: { x: number }) => (background.x += 10));
         this.level.enemies.forEach((enemy: { x: number }) => (enemy.x += 10));
         this.level.coins.forEach((coin: { x: number }) => (coin.x += 10));
         this.level.bubbleBottles.forEach((bottle: { randomTranslate: number }) => (bottle.randomTranslate += 10));
      }
   }

   moveBackgroundToRight() {
      if (this.level.backgrounds[this.level.backgrounds.length - 1].x > 250) {
         this.level.backgrounds.forEach((background: { x: number }) => (background.x -= 10));
         this.level.enemies.forEach((enemy: { x: number }) => (enemy.x -= 10));
         this.level.coins.forEach((coin: { x: number }) => (coin.x -= 10));
         this.level.bubbleBottles.forEach((bottle: { randomTranslate: number }) => (bottle.randomTranslate -= 10));
      }
   }

   checkPositionMovableobjectIsInTheCorrectRange(movableObjectsInArray: any[], maxTopY: number, maxBottemY: number) {
      movableObjectsInArray.forEach((currentMovableObject) => currentMovableObject.checkLimitPositionXandY(currentMovableObject, maxTopY, maxBottemY));
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
      objectToDraw.forEach((objectElement: { imgPath: any; x: any; y: any; width: any; height: any }) =>
         this.ctx.drawImage(objectElement.imgPath, objectElement.x, objectElement.y, objectElement.width, objectElement.height)
      );
   }

   drawRotateStaticObject(objectToDraw: any) {
      let counterForSetImgToLeftRight = 0;
      objectToDraw.forEach((objectElement: { randomTranslate: any; imgPath: any; x: any; y: any; width: any; height: any }) => {
         let value = counterForSetImgToLeftRight % 2 ? true : false;
         objectElement.y = value ? (objectElement.y = -45) : false;
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
