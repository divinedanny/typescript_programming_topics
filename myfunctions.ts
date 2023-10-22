const heros = ["odin", "Hulk", "Hawkeye"];

heros.map((hero): string => {
    return `Hello ${hero}!`;
})

function consoleError(errorMsg: string): void{
    console.log(errorMsg);
}

function handleError(errorMsg: string): never{
    throw new Error(errorMsg);
}

