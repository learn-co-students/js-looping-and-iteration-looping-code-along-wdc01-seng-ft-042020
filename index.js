// Code your solutions in this file
function writeCards(people, event) {
    let arr = []
    for (let i = 0; i < people.length; i++){
        arr.push(`Thank you, ${people[i]}, for the wonderful ${event} gift!`);
    }

    return arr
}

function countDown(num) {
    let i = num;
    while (i >= 0) {
        console.log(i--);
    }
}

