class BaseClass {
   constructor(name: string) {
      this.name = name;
   }
   name: string;
   imgPath = new Image();
   imagesCach: any = [];
   arrayAllImages: string[] = [];
   width = 0;
   height = 0;
   y = 0;
   x = 0;
   

   async loadAllImgInCach(array: string[]) {
      array.forEach(async (path: string) => {
         let pathURL = path;
         await this.imagesCach.push(pathURL);
      });
   }

   counterForLoadOneImgFromCachArray = 0;

   async loadOneImgFromCach() {
      let positionArray = this.counterForLoadOneImgFromCachArray % this.imagesCach.length;
      this.imgPath.src = await this.imagesCach[positionArray];
      this.counterForLoadOneImgFromCachArray++;
   }

   animation(time: number) {
      setInterval(() => {
         this.loadOneImgFromCach();
      }, time);
   }

 
}
