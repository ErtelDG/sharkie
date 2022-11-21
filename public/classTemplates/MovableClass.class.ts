class MovableClass extends BaseClass {
   constructor(name: string) {
      super("MovableClass");
      this.name = name;

      this.width = 100;
      this.height = 50;
      this.x = 10;
      this.y = 10;
   }

   moveLeft(speed: number) {
      if (keyboard.LEFT) {
         this.x -= speed;
      }
   }
   moveRight(speed: number) {
      if (keyboard.RIGHT) {
         this.x += speed;
      }
   }

   moveDown(speed: number) {
      if (keyboard.DOWN) {
         this.y += speed;
      }
   }
   moveUp(speed: number) {
      if (keyboard.UP) {
         this.y -= speed;
      }
   }
}
