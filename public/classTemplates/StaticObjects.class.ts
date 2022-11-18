class StaticObjectsClass {
   constructor() {}
   imgPath: any;
   imageCach: any = [];
   arrayAllImages: string[] = [];
   width = 0;
   height = 0;
   y = 0;
   x = 0;

   async loadAllImgInCach(array: string[]) {
      array.forEach(async (path: string) => {
         let pathURL = path;
       await this.imageCach.push(pathURL);
         console.log(this.imageCach);
      });
   }

   async loadOneImgFromCach(imageCach: any) {
      this.imgPath = new Image();
      this.imgPath.src =await imageCach;
      console.log(this.imgPath);
   }
}
