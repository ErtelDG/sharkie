class Bubble extends BaseClass {
   constructor(imgPath: string, x: number, y: number) {
      super("Bubble");
      this.arrayAllImages = [      
         "img/4.Marcadores/PosionedBubble/Animada/1.png",
         "img/4.Marcadores/PosionedBubble/Animada/2.png",
         "img/4.Marcadores/PosionedBubble/Animada/3.png",
         "img/4.Marcadores/PosionedBubble/Animada/4.png",
         "img/4.Marcadores/PosionedBubble/Animada/5.png",
         "img/4.Marcadores/PosionedBubble/Animada/6.png",
         "img/4.Marcadores/PosionedBubble/Animada/7.png",
         "img/4.Marcadores/PosionedBubble/Animada/8.png",
      ];
      this.width = 80;
      this.height = 80;
      // this.x = Math.random() * (6000 - 500) + 500;
      // this.y = Math.random() * (300 - 280) + 280;
       ddthis.x = 400;
       ddthis.y = 100;


         this.loadAllImgInCach(this.arrayAllImages);
           setInterval(() => {
              this.loadOneImgFromCach();
           }, 100);
   }
}
