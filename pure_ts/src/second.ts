interface TakePhoto {
    cameraMode: string,
    filter: string,
    burst: number
}

interface Story{
    createStory(): void;
}

class Instagram implements TakePhoto, Story{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){}
    createStory(): void {
        console.log("Creating story");
    }
}

class Youtube implements TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public shorts: string,
    ){}
}

