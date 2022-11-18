class Background1 extends StaticObjectsClass {
   constructor() {
      super();
      this.imgPath = [];
      this.arrayAllImages = ["img/3.Background/Layers/5.Water/D1.png", "img/3.Background/Legacy/Layers/3.Fondo1/D1.png"];
      this.width = 720;
      this.height = 400;
      this.x = 720;
      this.y = 400;
      this.loadAllImgInCach(this.arrayAllImages);
      this.loadOneImgFromCach(this.imageCach);
   }
}
