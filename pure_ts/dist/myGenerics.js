"use strict";
const scores = [];
const names = [];
function identity1(val) {
    return val;
}
//the issue with this the return type is any so it could cause inconsistency in the function
function identity2(val) {
    return val;
}
function identity3(val) {
    return val;
}
identity3(true);
//this is the same as the above function Identity3
// it means the name of the fuction type can be 
//anything but the return type must be the same as
// what it takes in
function identity4(val) {
    return val;
}
//this is how to use the generic function for your custom created types
function identity5({}) { }
//ARRAYS IN GENERICS
function getSearchProducts(products) {
    //some databse operations
    const index = 3;
    return products[index];
}
//genrics with arrow functions
// the ',' after the type is to tell typescript that the function is not done yet and it is a genrics syntax
const getMoreSearchGoods = (goods) => {
    //more database operations
    const index = 5;
    return goods[index];
};
// GENERIC Using Type Parameters in Generic Constraints
function anotherFunction(firstVal, secondVal) {
    return {
        firstVal,
        secondVal
    };
}
anotherFunction(1, 3);
function anotherDatabase(firstVal, secondVal) {
    return {
        firstVal,
        secondVal
    };
}
anotherDatabase(1, { conn: "localhost", username: "daniel", password: "12345" });
class sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(item) {
        this.cart.push(item);
    }
}
