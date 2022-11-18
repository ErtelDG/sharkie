class Enemy extends MovableClass {
   constructor() {
      super("Enemy");
      this.setAllImagesInArray();
      this.loadAllImgInCach(this.arrayAllImages);
      setInterval(() => {
         this.loadOneImgFromCach();
         this.moveLeft(Math.random() * 12);
      }, 50);
      this.width = 100;
      this.height = 80;
      this.x = Math.random() * 6000;
      this.y = Math.random() * 300;
   }

   setAllImagesInArray() {
      return (this.arrayAllImages = [
         "img/2.Enemy/1.PufferFish/1.Swim/3.swim1.png",
         "img/2.Enemy/1.PufferFish/1.Swim/3.swim2.png",
         "img/2.Enemy/1.PufferFish/1.Swim/3.swim3.png",
         "img/2.Enemy/1.PufferFish/1.Swim/3.swim4.png",
         "img/2.Enemy/1.PufferFish/1.Swim/3.swim5.png",
      ]);
   }
}
