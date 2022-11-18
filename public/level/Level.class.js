"use strict";
class Level extends BaseClass {
    constructor() {
        super("LevelClass");
        this.createNewBackground(10);
        this.createStaticObject();
        this.createEnemies(15);
    }
    backgrounds = [];
    coins = [];
    enemies = [];
    createNewBackground(num) {
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
    createEnemies(num) {
        let howManyElementsToBuild = num;
        for (let i = 0; i < howManyElementsToBuild; i++) {
            this.enemies.push(new Enemy());
        }
    }
    createStaticObject() {
        let howManyElementsToBuild = 20;
        for (let i = 0; i < howManyElementsToBuild; i++) {
            this.coins.push(new Coin());
        }
    }
}
