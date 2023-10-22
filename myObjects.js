"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: 'John',
    age: 30,
    email: "john@yahoo.com",
    isActive: true,
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isActive;
}
var person = { name: "divine", isActive: true, title: "mr" }; //with assigning a variable you add multiple parameter in the main function
createUser(person); //this is the main function
function createCourse(user, email) {
    return {
        name: "".concat(user, "'sReact"),
        email: "for ".concat(email, "}"),
        price: 100,
        avalible: true,
    };
}
function createCustomUser(user) {
    // console.log(`${user.name} is ${user.isActive ? 'active' : 'inactive'}`);
    return {
        name: user.name,
        email: user.email,
        isActive: user.isActive,
    };
}
createCustomUser({ name: "Emma", email: "emma@e.com", isActive: true });
var myPoint = {
    _id: "1",
    name: "divine",
    email: "e@e.site",
    isLoggedIn: true,
};
myPoint.name = "daniel"; // this is allowed to be updated
