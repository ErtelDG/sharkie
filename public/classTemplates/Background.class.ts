class Background extends StaticObjectsClass {
   constructor(imgPath: string, x: number, y: number) {
      super();
      this.arrayAllImages = [imgPath];
      this.width = 720;
      this.height = 400;
      this.x = x;
      this.y = y;
      this.loadAllImgInCach(this.arrayAllImages);
      this.loadOneImgFromCach(this.imageCach);
   }
}
