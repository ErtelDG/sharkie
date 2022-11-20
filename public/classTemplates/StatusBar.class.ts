class StatusBar extends BaseClass {
   constructor(statusBarFor: string = "life" || "coin" || "bubble" || "finalFish") {
      super("StatusBar");
      this.name = statusBarFor;
      this.setCorrectImageForStatusBarInAllArray(this.name);
      this.width = 120;
      this.height = 60;
      this.y = 10;
      this.loadAllImgInCach(this.arrayAllImages);
      this.loadOneImgFromCach();
   }

   setCorrectImageForStatusBarInAllArray(whichStatusBar: string) {
      if (whichStatusBar == "life") {
         this.arrayAllImages = this.imgStatusBarLife;
         this.x = 10;
      } else if (whichStatusBar == "coin") {
         this.arrayAllImages = this.imgStatusBarCoin;
         this.x = 140;
      } else if (whichStatusBar == "bubble") {
         this.arrayAllImages = this.imgStatusBarBubble;
         this.x = 270;
      } else {
         this.arrayAllImages = this.imgStatusFinalFish;
         this.x = 400;
      }
   }

   imgStatusBarLife = [
      "img/4.Marcadores/green/Life/0_copia.png",
      "img/4.Marcadores/green/Life/20_copia.png",
      "img/4.Marcadores/green/Life/40_copia.png",
      "img/4.Marcadores/green/Life/60_copia.png",
      "img/4.Marcadores/green/Life/80_copia.png",
      "img/4.Marcadores/green/Life/100_copia.png",
   ];

   imgStatusBarCoin = [
      "img/4.Marcadores/green/Coin/0_copia.png",
      "img/4.Marcadores/green/Coin/20_copia.png",
      "img/4.Marcadores/green/Coin/40_copia.png",
      "img/4.Marcadores/green/Coin/60_copia.png",
      "img/4.Marcadores/green/Coin/80_copia.png",
      "img/4.Marcadores/green/Coin/100_copia.png",
   ];

   imgStatusBarBubble = [
      "img/4.Marcadores/green/poisoned_bubbles/0_copia.png",
      "img/4.Marcadores/green/poisoned_bubbles/20_copia.png",
      "img/4.Marcadores/green/poisoned_bubbles/40_copia.png",
      "img/4.Marcadores/green/poisoned_bubbles/60_copia.png",
      "img/4.Marcadores/green/poisoned_bubbles/80_copia.png",
      "img/4.Marcadores/green/poisoned_bubbles/100_copia.png",
   ];

   imgStatusFinalFish = [
      "img/4.Marcadores/green/FinalFish/0_copia.png",
      "img/4.Marcadores/green/FinalFish/20_copia.png",
      "img/4.Marcadores/green/FinalFish/40_copia.png",
      "img/4.Marcadores/green/FinalFish/60_copia.png",
      "img/4.Marcadores/green/FinalFish/80_copia.png",
      "img/4.Marcadores/green/FinalFish/100_copia.png",
   ];
}
