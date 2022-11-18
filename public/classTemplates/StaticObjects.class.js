"use strict";
class StaticObjectsClass {
    constructor() { }
    imgPath;
    imageCach = [];
    arrayAllImages = [];
    width = 0;
    height = 0;
    y = 0;
    x = 0;
    async loadAllImgInCach(array) {
        array.forEach(async (path) => {
            let pathURL = path;
            await this.imageCach.push(pathURL);
        });
    }
    async loadOneImgFromCach(imageFromCach) {
        this.imgPath = new Image();
        this.imgPath.src = await imageFromCach;
        console.log("Created loadOneImgFromCach Static Objects", this.imgPath);
        console.log("counterForLoadImagesFromCachToPath", this.imgPath);
    }
}
