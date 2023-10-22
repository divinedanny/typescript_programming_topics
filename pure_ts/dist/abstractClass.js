"use strict";
class TakePhotos {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getReelTime() {
        return 10;
    }
}
//in abstract class where it is the blueprint, you can not create an object from it much like the interface
// const daniel = new TakePhoto("portrait", "black and white", 3);
//It is the responsibility of the class that extends the abstract class to creat an ubject from that
class Instagrams extends TakePhotos {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter, burst);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("Getting sepia");
    }
}
const daniel = new Instagrams("portrait", "black and white", 3);
