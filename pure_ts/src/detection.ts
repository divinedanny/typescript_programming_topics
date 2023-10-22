function detectType(val: number | string){
    if (typeof val === "number"){
        console.log("It is a number");
    }
    return val + " is a string";
}

function provideId(vall: string | null){
    if(!vall){
        console.log("please provide an id");
    }
}

function printAll(strs: string | string[] | null) {
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        } else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}

//the IN operation

interface User{
    name: string,
    email: string,
}
interface Admin{
    name: string,
    email: string,
    isAdmin: boolean
}

function isAdminAccount(user: User | Admin){
    if('isAdmin' in user){
        return user.isAdmin;
    }
    return false;
}

//the instanceOf operator
function logValue(x: Date | string){
    if(x instanceof Date){
        console.log(x.toUTCString());
    }else{
        console.log(x.toUpperCase());
    }
}

//type predicates

type Fish = { swim: () => void };
type Bird = {fly: () => void};
function isFish(pet: Fish | Bird): pet is Fish{
    return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird){
    if(isFish(pet)){
        pet
        return "Fish";
    }
    else{
        pet
        return "Bird";
    }
}

//discriminated union
interface Circle{
    kind: "circle",
    radius: number
}

interface Square{
    kind: "square",
    sideLength: number
}

interface Rectangle{
    kind: "rectangle",
    width: number,
    height: number
}

type Shape = Circle | Square | Rectangle;

function getTrueShape(shape: Shape){
    if(shape.kind === "circle"){
        return Math.PI * shape.radius ** 2;
    }
    else if(shape.kind === "rectangle"){
        return shape.width * shape.height;
    }
    else{
        return shape.sideLength ** 2;
    }
}

// the never type exhaustiveness checking
function getArea(shape: Shape){
    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "rectangle":
            return shape.width * shape.height;
        case "square":
            return shape.sideLength ** 2;
        default:
            const _defaultshape: never = shape;
            return _defaultshape;
    }
}