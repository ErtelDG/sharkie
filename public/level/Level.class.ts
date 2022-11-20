class Level extends BaseClass {
   constructor() {
      super("LevelClass");
      this.createNewBackground(10);
      this.createStaticObject(20, this.coins, Coin);
      this.createEnemies(10, EnemyPufferFish);
      this.createEnemies(10, EnemyJellyFishLila);
      this.createEnemies(1, EnemyFinalFish);
   }

   backgrounds: any[] = [];
   coins: any[] = [];
   enemies: any[] = [];

   createNewBackground(num: number) {
      let howManyElementsToBuild = num;
      let coordinateForBackgroundImg = 0;
      for (let i = 0; i < howManyElementsToBuild; i++) {
         this.backgrounds.push(new Background("img/3.Background/Layers/5.Water/D1.png", coordinateForBackgroundImg, 0)),
            this.backgrounds.push(new Background("img/3.Background/Layers/4.Fondo2/D1.png", coordinateForBackgroundImg, 0)),
            this.backgrounds.push(new Background("img/3.Background/Layers/3.Fondo1/D1.png", coordinateForBackgroundImg, 0)),
            this.backgrounds.push(new Background("img/3.Background/Layers/2.Floor/D1.png", coordinateForBackgroundImg, 0)),
            this.backgrounds.push(new Background("img/3.Background/Layers/1.Light/1.png", coordinateForBackgroundImg, 0)),
            (coordinateForBackgroundImg += 719);
         this.backgrounds.push(new Background("img/3.Background/Layers/5.Water/D2.png", coordinateForBackgroundImg, 0)),
            this.backgrounds.push(new Background("img/3.Background/Layers/4.Fondo2/D2.png", coordinateForBackgroundImg, 0)),
            this.backgrounds.push(new Background("img/3.Background/Layers/3.Fondo1/D2.png", coordinateForBackgroundImg, 0)),
            this.backgrounds.push(new Background("img/3.Background/Layers/2.Floor/D2.png", coordinateForBackgroundImg, 0)),
            this.backgrounds.push(new Background("img/3.Background/Layers/1.Light/2.png", coordinateForBackgroundImg, 0)),
            (coordinateForBackgroundImg += 719);
      }
   }

   createEnemies(quantity: number, enemieObjectType: typeof EnemyPufferFish | typeof EnemyJellyFishLila) {
      let howManyElementsToBuild = quantity;
      for (let i = 0; i < howManyElementsToBuild; i++) {
         this.enemies.push(new enemieObjectType());
      }
   }

   createStaticObject(quantity: number, arrayNameForCreateStaticObjectInLevel: Coin[], whichStaticObject: typeof Coin) {
      let howManyElementsToBuild = quantity;
      for (let i = 0; i < howManyElementsToBuild; i++) {
         arrayNameForCreateStaticObjectInLevel.push(new whichStaticObject());
      }
   }
}
