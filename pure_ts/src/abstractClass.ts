abstract class TakePhotos{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){}

    abstract getSepia(): void
    getReelTime(): number{
        return 10;
    }
}

//in abstract class where it is the blueprint, you can not create an object from it much like the interface
// const daniel = new TakePhoto("portrait", "black and white", 3);

//It is the responsibility of the class that extends the abstract class to creat an ubject from that
class Instagrams extends TakePhotos{

    constructor (
        public cameraMode: string,
        public filter: string,
        public burst: number,
    ){
        super(cameraMode, filter, burst);
    }
    getSepia(): void {
        console.log("Getting sepia");
    }
}


const daniel = new Instagrams("portrait", "black and white", 3);
