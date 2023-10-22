"use strict";
function detectType(val) {
    if (typeof val === "number") {
        console.log("It is a number");
    }
    return val + " is a string";
}
function provideId(vall) {
    if (!vall) {
        console.log("please provide an id");
    }
}
function printAll(strs) {
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
function isAdminAccount(user) {
    if ('isAdmin' in user) {
        return user.isAdmin;
    }
    return false;
}
//the instanceOf operator
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "Fish";
    }
    else {
        pet;
        return "Bird";
    }
}
function getTrueShape(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    else if (shape.kind === "rectangle") {
        return shape.width * shape.height;
    }
    else {
        return shape.sideLength ** 2;
    }
}
// the never type exhaustiveness checking
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "rectangle":
            return shape.width * shape.height;
        case "square":
            return shape.sideLength ** 2;
        default:
            const _defaultshape = shape;
            return _defaultshape;
    }
}
