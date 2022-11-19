"use strict";
class EnemyClass extends MovableClass {
    constructor(name) {
        super("Enemy");
    }
    setAllImagesInArray(array) {
        return (this.arrayAllImages = array);
    }
}
