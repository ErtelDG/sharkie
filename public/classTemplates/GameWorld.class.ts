class GameWorld {
   ctx: any = ctx;
   level: any;

   constructor() {
      this.level = level1;
      this.draw();
   }

   async draw() {
     
      if (this.ctx != null) {
         this.ctx.clearRect(0, 0, canvas.width, canvas.height);
         this.drawStaticObject(this.level.backgrounds);
        this.drawStaticObject(this.level.coins);
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
}
