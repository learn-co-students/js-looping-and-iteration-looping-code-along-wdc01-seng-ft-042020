// Code your solutions in this file

// const array = ["Ada", "Brendan", "Ali"]
// const event = "birthday"

function writeCards(array, event) {
    let new_array = [];
    for (let i = 0; i < array.length; i++) {
        new_array.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
    }
    return new_array
}

function countDown(num) {
    let i = 0;
    while (i <= num) {
        console.log(i++)
    };
}