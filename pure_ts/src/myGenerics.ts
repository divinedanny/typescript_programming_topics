const scores: Array<number> = []
const names: Array<string> = []



function identity1(val: boolean | number):
 boolean | number{
    return val;
}

//the issue with this the return type is any so it could cause inconsistency in the function
function identity2(val: any): any{
    return val;
}

function identity3<Type>(val: Type): Type{
    return val;
}
identity3(true)

//this is the same as the above function Identity3
// it means the name of the fuction type can be 
//anything but the return type must be the same as
// what it takes in
function identity4<T>(val: T): T{
    return val;
}

interface Bottle{
    brand: string;
    type: string;

}
//this is how to use the generic function for your custom created types
function identity5<Bottle>({}){}


//ARRAYS IN GENERICS
function getSearchProducts<T>(products: T[]): T{
    //some databse operations
    const index = 3
    return products[index];
}

//genrics with arrow functions
// the ',' after the type is to tell typescript that the function is not done yet and it is a genrics syntax
const getMoreSearchGoods = <T,>(goods: T[]): T => {
    //more database operations
    const index = 5;
    return goods[index];
}

// GENERIC Using Type Parameters in Generic Constraints

function anotherFunction<T, U extends number>(firstVal: T, secondVal: U): object{

    return {
        firstVal,
        secondVal
    }
}

anotherFunction(1, 3)

// extending an interface in a generic function
interface database{
    conn: string,
    username: string,
    password: string
}

function anotherDatabase<T, U extends database>(firstVal: T, secondVal: U): object {

    return {
        firstVal,
        secondVal
    }
}

anotherDatabase(1, {conn: "localhost", username: "daniel", password: "12345"})

// GENERIC CLASSES
interface Quiz{
    name: string,
    type: string,

}

interface Course{
    name: string,
    author: string,
    subject: string
}

class sellable<T>{
    public cart: T[] = []

    addToCart(item: T){
        this.cart.push(item);
    }
}