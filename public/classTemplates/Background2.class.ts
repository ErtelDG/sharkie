class Background2 extends StaticObjectsClass {
   constructor() {
      super();
      this.imgPath = [];
      this.arrayAllImages = [];
      this.width = 720;
      this.height = 400;
      this.x = 720;
      this.y = 400;
      this.loadAllImgInCach(this.arrayAllImages);
      this.loadOneImgFromCach(this.imageCach);
   }
}
