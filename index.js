// Code your solutions in this file
var array = []
function writeCards(names, event) {
    for (let i = 0; i < names.length; i++) {
        array.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return array;
}

function countDown(num) {
    let i = num; 
    while (num >= 0) {
        console.log(num--);
    }
}
