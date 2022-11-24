"use strict";
class StatusBarValue extends BaseClass {
    constructor(statusBarValueFor = "life" || "coin" || "bubble") {
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
    setCorrectValueForStatusBarInAllArray(whichStatusBar) {
        setInterval(() => {
            if (whichStatusBar == "life") {
                this.currentCounterForThisObject = this.counterLife;
                this.x = 90;
            }
            else if (whichStatusBar == "coin") {
                this.currentCounterForThisObject = this.counterCoin;
                this.x = 260;
            }
            else if (whichStatusBar == "bubble") {
                this.currentCounterForThisObject = this.counterBubble;
                this.x = 420;
            }
            else {
                alert("Set for statusbar one the following parameters: life || coin || bubble!");
            }
        }, 500);
    }
}
