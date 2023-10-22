"use strict";
// class User{
//     public email: string;
//     name: string;
//     //with the private keyword,
//     //the property cannot be accessed outside the class
//     private readonly city: string = "Lagos";
//     constructor(email: string, name: string){
//         this.email = email;
//         this.name = name;
//         this.city
//     }
// }
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        // public email: string;
        // name: string;
        //with the private keyword,
        //the property cannot be accessed outside the class
        // private _courseCount: number = 1;
        // with the protected keyword, the variable is accessible by the class and its sub classes
        this._courseCount = 1;
        this.city = "Lagos";
    }
    deleteToken() {
        console.log("Deleting token");
    }
    // the getter is used to hide the implementation of the method
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    // the setter is used to hide the implementation of the method
    set courseCount(courseNumber) {
        if (courseNumber <= 1) {
            throw new Error("Course count should be more than 1");
        }
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4; // the courseCount property is accessible here because it is protected
    }
}
const divine = new User("d@d.com", "Divine");
// divine.city // here the city property cannot be accessed
divine.email;
// divine.deleteToken() // here the deleteToken method cannot be accessed
