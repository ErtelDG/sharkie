class Background1 extends StaticObjectsClass {
   constructor(x: number, y: number) {
      super();
      this.imgPath = [];
      this.arrayAllImages = ["img/3.Background/Layers/5.Water/D1.png"];
      this.width = 720;
      this.height = 400;
      this.x = x;
      this.y = y;
      this.loadAllImgInCach(this.arrayAllImages);
      this.loadOneImgFromCach(this.imageCach);
   }

   // "img/3.Background/Layers/4.Fondo2/D1.png",
   // "img/3.Background/Legacy/Layers/3.Fondo1/D1.png",
   // "img/3.Background/Layers/2.Floor/D1.png",
   // "img/3.BackgroundLayers/1.Light/1.png",
}
