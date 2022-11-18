class GameWorld {
   ctx: any = ctx;
   level: any;
   sharkie: any;

   constructor() {
      this.level = level1;
      this.sharkie = [new Sharkie()];
      this.draw();
   }

   async draw() {
      if (this.ctx != null) {
         this.ctx.clearRect(0, 0, canvas.width, canvas.height);
         this.drawStaticObject(this.level.backgrounds);
         this.drawStaticObject(this.level.coins);
         this.drawMovableObject(this.sharkie);
         this.drawMovableObject(this.level.enemies);
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

   drawStaticObject(objectToDraw: any) {
      objectToDraw.forEach((objectElement: { imgPath: any; x: any; y: any; width: any; height: any }) => {
         this.ctx.drawImage(objectElement.imgPath, objectElement.x, objectElement.y, objectElement.width, objectElement.height);
      });
   }

   drawMovableObject(movableObjectArray: any) {
      movableObjectArray.forEach((movableObject: { imgPath: any; x: any; y: any; width: any; height: any }) => {
         this.ctx.drawImage(movableObject.imgPath, movableObject.x, movableObject.y, movableObject.width, movableObject.height);
      });
   }
}
