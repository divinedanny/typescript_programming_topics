// here the enum key waord allows you to be able to rescrict the options actionanle without allowign the code to be affected as seen in the example below
const enum SeatChoice {
    AISLE = "aisle", // the opion can be valued as a string or an integer
    MIDDLE = "middle",
    WINDOW = 0 // myou can customise the incrementation of the enum by assigning a value to the first key word for each option
}

const SEAT_CHOICE = SeatChoice.AISLE;