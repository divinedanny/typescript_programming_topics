type UserPerson = {
    name: string,
    email: string,
    isActive: boolean,
};
type ID = string | number; // this allows the type of ID in the fucntion it is used in to be either a string or a number

function createCustomUser(user: UserPerson): UserPerson {
    // console.log(`${user.name} is ${user.isActive ? 'active' : 'inactive'}`);
    return {
        name: user.name,
        email: user.email,
        isActive: user.isActive,
    }
}

createCustomUser({ name: "Emma", email: "emma@e.com", isActive: true });

type Point = {
    readonly _id: string | number // this makes the id read only and no one can touch the id further down the line in the code
    name: string
    email: string
    isLoggedIn: boolean
    credit_details?: number // this makes the credit details optional because of the "?"
}

let myPoint: Point = {
    _id: "1",
    name: "divine",
    email: "e@e.site",
    isLoggedIn: true,
}

myPoint.name = "daniel" // this is allowed to be updated
//myPoint._id = "2" // this is not allowed to be updated because of the readonly keyword

type CardNumber = {
    cardNumber: number,
}

type CardDate = {
    cardDate: string,
}

type CardDetails = CardNumber & CardDate & {
    cvv: number,
}// this is a union of the two types and add in the custom for this type added to the other two types

function getCardDetails(card: CardDetails): CardDetails {
    return {
        cardNumber: card.cardNumber,
        cardDate: card.cardDate,
        cvv: card.cvv
    }
}

getCardDetails({
    cardNumber: 234567890,
    cardDate: "15/12/2023",
    cvv: 900,
})

//ARRAYSSS
