class GameWorld {
   ctx: any = ctx;
   level = new Level();

   constructor() {
      this.draw();
   }

   draw() {
      console.log("Draw:");
      if (this.ctx != null) {
         this.ctx.clearRect(0, 0, 720, 400);
         this.ctx.drawImage(
            this.level.background[0].arrayAllImages[0],
            this.level.background[0].x,
            this.level.background[0].y,
            this.level.background[0].width,
            this.level.background[0].height
         );
         this.requestAnimation();
      }
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
}
