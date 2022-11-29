class StatusBar extends BaseClass {
   constructor(statusBarFor: string = "life" || "coin" || "bubble" || "finalFish") {
      super("StatusBar");
      this.name = statusBarFor;
      this.width = 80;
      this.height = 80;
      this.setCorrectImageForStatusBarInAllArray(this.name);
      this.loadAllImgInCach(this.arrayAllImages);
      this.loadOneImgFromCach();
   }

   counterFinalFish = 5;

   setCorrectImageForStatusBarInAllArray(whichStatusBar: string) {
      if (whichStatusBar == "life") {
         this.arrayAllImages = this.imgStatusBarLife;
         this.x = 10;
         this.y = -3;
      } else if (whichStatusBar == "coin") {
         this.arrayAllImages = this.imgStatusBarCoin;
         this.x = 180;
         this.y = 5;
      } else if (whichStatusBar == "bubble") {
         this.arrayAllImages = this.imgStatusBarBubble;
         this.x = 350;
      } else if (whichStatusBar == "finalFish") {
         this.arrayAllImages = [];
         this.arrayAllImages.push(this.imgStatusFinalFish[this.counterFinalFish]);
         this.x = 520;
         this.width = 200;
      } else {
         alert("Set for statusbar one the following parameters: life || coin || bubble || finalFish!");
      }
   }

   imgStatusBarLife = ["img/4.Marcadores/green/100_copia_hp.png"];

   imgStatusBarCoin = ["img/4.Marcadores/green/100_copia_coin.png"];

   imgStatusBarBubble = ["img/4.Marcadores/green/100_copia_poisoned_bubble.png"];

   imgStatusFinalFish = [
      "img/4.Marcadores/green/FinalFish/0_copia.png",
      "img/4.Marcadores/green/FinalFish/20_copia.png",
      "img/4.Marcadores/green/FinalFish/40_copia.png",
      "img/4.Marcadores/green/FinalFish/60_copia.png",
      "img/4.Marcadores/green/FinalFish/80_copia.png",
      "img/4.Marcadores/green/FinalFish/100_copia.png",
   ];
}
