let score: number | string = 33; //the pipe sign "|" allows us toe assign two data types to one variable

score = 44;
score = '44';


type Users = {
    id: number;
    name: string
}

type Admin = {
    username: string;
    id : number
}

let historian: Users | Admin = { name: 'John', id: 1 }

historian = { username: 'superman', id: 2 }

function getUserID(id: number | string) {
    
    if(typeof id === "string"){
        id.toLowerCase();
    }

    console.log(id);
}
//array 
const data: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const data1: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
const data2: (string | number | boolean)[] = [3, 5, true,'1', '2', '3', '4', '5', '6', '7', '8', '9'];
let pi: 3.14 = 3.14;
let seatAllotment:  "new" | "old" | "current";
seatAllotment = "new";




getUserID(123);
getUserID('123');//they are bothe allowed

 