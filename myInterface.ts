interface User {
    readonly dbid: number,
    email: string,
    userId: number,
    googeleId?: string, 
    // startTrial: () => string
    startTrial(): string,
    getCoupon(coupon_name:string, value: number): number

}

//Reopening of the interface
interface User {
    githubToken: string
}

//Inheritance of an interface 
interface Admin extends User {
    adminSince: Date,
    roles: "admin " | "CMO" | "CEO"
}

const divine: Admin = { dbid: 1234, email: "divine@gmail.com", userId:123,
startTrial: () => {
    return "trial started";
},
getCoupon: (name: "divinedaniel", off: 20) => {
    return 12345;
},
githubToken: "1234567890",
adminSince: new Date(),
roles: "CMO"
};


// divine.dbid = 12345; // this will throw an error because the dbid is readonly