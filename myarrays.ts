//arrays

const heroes: string[] = []

const heroes2: Array<string> = []

heroes.push('Flash');

type User = {
    name: string,
    isActive: boolean,
}

const allUser: User[] = []

//her we pushing arrays tot he specified type we declared
allUser.push({
    name: 'John',
    isActive: true,
},
{
    name: 'Mary',
    isActive: false,
})

//The declaration of a nested array is similar to the declaration of a two-dimensional array in JavaScript.
const MLModels: number[][] = [
    [255,255,255],
    [0,0,0]
]

//union types
