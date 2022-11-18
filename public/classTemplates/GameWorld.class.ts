class GameWorld {
   ctx: CanvasRenderingContext2D | null = ctx;
   level = new Level();

   constructor() {
      this.draw();
   }

   draw() {
      console.log("Draw:");
      if (this.ctx != null) {
         this.ctx.clearRect(0, 0, 720, 400);
         this.ctx.drawImage(
            this.level.backgrounds[0].imgPath,
            this.level.backgrounds[0].x,
            this.level.backgrounds[0].y,
            this.level.backgrounds[0].width,
            this.level.backgrounds[0].height
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
