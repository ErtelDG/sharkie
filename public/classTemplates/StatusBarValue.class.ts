class StatusBarValue extends BaseClass {
   constructor(statusBarValueFor: string = "life" || "coin" || "bubble") {
      super("StatusBarValue");
      this.name = statusBarValueFor;
      this.width = 80;
      this.height = 80;
      this.y = 60;
      this.setCorrectValueForStatusBarInAllArray(this.name);
   }

   currentCounterForThisObject = 0;

   counterLife = 5;
   counterCoin = 0;
   counterBubble = 0;
   counterFinalFish = 5;

   setCorrectValueForStatusBarInAllArray(whichStatusBar: string) {
      setInterval(() => {
         if (whichStatusBar == "life") {
            this.currentCounterForThisObject = this.counterLife;
            this.x = 90;
         } else if (whichStatusBar == "coin") {
            this.currentCounterForThisObject = this.counterCoin;
            this.x = 260;
         } else if (whichStatusBar == "bubble") {
            this.currentCounterForThisObject = this.counterBubble;
            this.x = 420;
         } else {
            this.currentCounterForThisObject = this.counterFinalFish;
            this.x = 600;
         }
      }, 500);
   }
}
