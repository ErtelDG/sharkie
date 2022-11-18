let Level = class Level extends StaticObjectsClass {
   constructor() {
      super();
      this.newBackground();
   }

   background: any[] = [];

   newBackground() {
      this.background = [new Background1(0, 0)];
   }
};
