class StatusBarValue extends BaseClass {
   constructor(statusBarValueFor: string = "life" || "coin" || "bubble") {
      super("StatusBarValue");
      this.name = statusBarValueFor;
      this.width = 80;
      this.height = 80;
      this.y=60
      this.setCorrectValueForStatusBarInAllArray(this.name);
   }
   
   currentCounterForThisObject = 0;

   counterLife = 1;
   counterCoin = 2;
   counterBubble = 3;

   setCorrectValueForStatusBarInAllArray(whichStatusBar: string) {
      if (whichStatusBar == "life") {
         this.currentCounterForThisObject=this.counterLife
         this.x = 90;
               } else if (whichStatusBar == "coin") {
         this.currentCounterForThisObject = this.counterCoin;
         this.x = 260;
      } else if (whichStatusBar == "bubble") {
         this.currentCounterForThisObject = this.counterBubble;
         this.x = 420;
      } else {
         alert("Set for statusbar one the following parameters: life || coin || bubble!");
      }
   }
}
