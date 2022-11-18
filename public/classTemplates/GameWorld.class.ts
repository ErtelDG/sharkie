class GameWorld {
   ctx: any = ctx;
   level: any;

   constructor() {
      this.level = level1;
      this.draw();
   }

   async draw() {
      console.log("Draw:");
      if (this.ctx != null) {
         
         this.level.background.forEach((backgroundElement: { imgPath: any; x: any; y: any; width: any; height: any; }) => {
         this.ctx.drawImage(
            backgroundElement.imgPath,
            backgroundElement.x,
            backgroundElement.y,
            backgroundElement.width,
            backgroundElement.height
         );   
         });
         
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
}
