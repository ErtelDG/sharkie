class Bubble extends BaseClass {
   constructor(name: string, x: number, y: number) {
      super("BubbleClass");
      this.arrayAllImages = ["img/1.Sharkie/4.Attack/Bubble_Trap/Bubble.png"];
      this.width = 60;
      this.height = 60;
      this.x = x;
      this.y = y;
      this.loadAllImgInCach(this.arrayAllImages);
      this.animation(100);
      this.setColissionPointsObject(5, 5, 10, 10);
      this.moveBubble();
   }

   moveBubble() {
      setInterval(() => {
         this.x += 10;
      }, 50);
   }
}
