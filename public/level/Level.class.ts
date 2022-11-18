class Level extends StaticObjectsClass {
   constructor() {
      super();
      this.newBackground();
   }

   background: any[] = [];

   newBackground() {
      this.background = [
         new Background("img/3.Background/Layers/5.Water/D1.png", 0, 0),
         new Background("img/3.Background/Layers/4.Fondo2/D1.png", 0, 0),
         new Background("img/3.Background/Layers/3.Fondo1/D1.png", 0, 0),
         new Background("img/3.Background/Layers/2.Floor/D1.png", 0, 0),
         new Background("img/3.Background/Layers/1.Light/1.png", 0, 0),
         new Background("img/3.Background/Layers/5.Water/D2.png", 719, 0),
         new Background("img/3.Background/Layers/4.Fondo2/D2.png", 719, 0),
         new Background("img/3.Background/Layers/3.Fondo1/D2.png", 719, 0),
         new Background("img/3.Background/Layers/2.Floor/D2.png", 719, 0),
         new Background("img/3.Background/Layers/1.Light/2.png", 719, 0),
      ];
   }
}
