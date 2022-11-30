class EnemyClass extends MovableClass {
   constructor(name: string) {
      super("Enemy");
   }

   setAllImagesInArray(array: string[]) {
      return (this.arrayAllImages = array);
   }
  
}
