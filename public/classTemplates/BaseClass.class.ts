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
   img: any;

   y = 0;
   x = 0;

   collisionPointY_TOP = 0;
   collisionPointX_LEFT = 0;
   collisionPointY_BOTTOM = 0;
   collisionPointX_RIGHT = 0;

   loadAllImgInCach(array: string[]) {
      this.imagesCach = [];
      array.forEach((path: string) => {
         let img = new Image();
         img.src = path;
         this.imagesCach.push(img);
      });
   }

   counterForLoadOneImgFromCachArray = 0;

   // loadImage ('img/test.png')
   loadImage(path: string) {
      this.img = new Image(); //Image() analog=> this.img = document.getElementById('image') <img id="image" src>
      this.img.src = path;
   }

   loadOneImgFromCach(chach: any) {
      let positionArray = this.counterForLoadOneImgFromCachArray % this.imagesCach.length;

      this.img = new Image();
      try {
         this.img = chach[positionArray];
      } catch (e) {
         console.log("STOP", chach[positionArray]);
         debugger;
      }

      this.counterForLoadOneImgFromCachArray++;
   }

   animation(time: number) {
      setInterval(() => {
         this.loadOneImgFromCach(this.imagesCach);
      }, time);
   }

   setColissionPointsObject(TOP: number, LEFT: number, BOTTOM: number, RIGHT: number) {
      setInterval(() => {
         this.updateColissionPointsObject(TOP, LEFT, BOTTOM, RIGHT);
      }, 1000 / 30);
   }

   updateColissionPointsObject(collisionPointY_TOP: number, collisionPointX_LEFT: number, collisionPointY_BOTTOM: number, collisionPointX_RIGHT: number) {
      this.collisionPointY_TOP = this.y + collisionPointY_TOP;
      this.collisionPointX_LEFT = this.x + collisionPointX_LEFT;
      this.collisionPointY_BOTTOM = this.height - collisionPointY_BOTTOM;
      this.collisionPointX_RIGHT = this.width - collisionPointX_RIGHT;
   }

   stopAllIntervals() {
      let highestTimeoutId = setTimeout(";");
      for (let i = 0; i < highestTimeoutId; i++) {
         clearTimeout(i);
      }
   }
}
