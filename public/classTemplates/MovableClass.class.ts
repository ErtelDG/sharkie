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
   objectBreakePointTop = 0;
   objectBreakePointBottom = 0;

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

   checkLimitPositionXandY(movableObject: any, maxTopY: number, maxBottemY: number) {
      if (movableObject.y < maxTopY) {
         movableObject.y = maxTopY;
         movableObject.collisionPointY_TOP = movableObject.objectBreakePointTop;
      } else if (movableObject.y > maxBottemY) {
         movableObject.y = maxBottemY;
         movableObject.collisionPointY_TOP = movableObject.objectBreakePointBottom;
      } else {
         false;
      }
   }
}
