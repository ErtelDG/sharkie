class EnemyClass extends MovableClass {
   constructor(name: string) {
      super("Enemy");
   }

   setAllImagesInArray(array: string[]) {
      return (this.arrayAllImages = array);
   }

   loadImageIsDeadOrNot(loadDeadImages: string[]) {
      setInterval(() => {
         if (!this.isDead) {
            this.autoMoveLeft(Math.random() * 6);
         } else {
            this.x += 15;
            this.y -= 15;
            this.loadAllImgInCach(loadDeadImages);
         }
         this.loadOneImgFromCach();
      }, 50);
   }
}
