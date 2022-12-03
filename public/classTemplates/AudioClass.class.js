"use strict";
class AudioSounds {
    constructor() {
        this.setAudioVolume();
    }
    winSound = [new Audio("audio/win.mp3")];
    setAudioVolume() {
        this.winSound.forEach((audioFile) => {
            audioFile.volume = 0.02;
        });
    }
}
