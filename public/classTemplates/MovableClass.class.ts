class MovableClass extends BaseClass {
   constructor(name: string) {
      super("MovableClass");
      this.name = name;
      this.width = 100;
      this.height = 50;
      this.x = 10;
      this.y = 10;
   }

   speedStandard = 10;

   autoMoveLeft(speedObject: number) {
      this.x -= speedObject;
   }

   moveLeft(speedObject: number) {
      this.x -= speedObject;
   }

   moveRight(speedObject: number) {
      this.x += speedObject;
   }

   moveDown(speedObject: number) {
      this.y += speedObject;
   }
   moveUp(speedObject: number) {
      this.y -= speedObject;
   }

   setLimitPositionXandY(movableObject: this) {
      if (movableObject.y < 10) {
         movableObject.y = 0;
      } else if (movableObject.y > 200) {
         movableObject.y = 200;
      } else {
         false;
      }
   }
}
