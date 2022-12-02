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
            this.x += 20;
            this.y -= 20;
            this.loadAllImgInCach(loadDeadImages);
         }
         this.loadOneImgFromCach();
      }, 50);
   }
}
