class EnemyClass extends MovableClass {
   constructor(name: string) {
      super("Enemy");
   }

   cach_DEAD_IMAGES = [];

   setAllImagesInArray(array: string[]) {
      return (this.arrayAllImages = array);
   }

   loadImageIsDeadOrNot(cach_DEAD_IMAGES: string[]) {
      setInterval(() => {
         !this.isDead ? this.autoMoveLeft(Math.random() * 6) : this.getDeadAnimation(cach_DEAD_IMAGES);
         this.loadOneImgFromCach(this.imagesCach);
      }, 120);
   }

   getDeadAnimation(cach_DEAD_IMAGES: string[]) {
      this.x += 20;
      this.y -= 20;
      this.imagesCach = cach_DEAD_IMAGES;
   }
}
