const User = {
    name: 'John',
    age: 30,
    email: "john@yahoo.com",
    isActive : true,
}

function createUser({name: string, isActive: boolean}){}

let person = { name: "divine", isActive: true, title: "mr" }//with assigning a variable you add multiple parameter in the main function
createUser(person);//this is the main function

function createCourse(user: string, email: string): { name: string, email: string, price: number, avalible: boolean }{
    return {
        name: `${user}'sReact`,
        email: `for ${email}}`,
        price: 100,
        avalible: true, 
    }
}

//TYPE ALIASES



export {}