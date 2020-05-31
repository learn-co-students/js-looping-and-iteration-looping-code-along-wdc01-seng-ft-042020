// Code your solutions in this file

function writeCards(arrOfNames, eventName) {
    const messagesArray = [];
    for (let i = 0; i < arrOfNames.length; i++ ) {
        messagesArray.push(`Thank you, ${arrOfNames[i]}, for the wonderful ${eventName} gift!`);
    }
    return messagesArray;
}

function countDown(positiveInt) {
    while (positiveInt >= 0) {
        console.log(positiveInt)
        positiveInt--;;
    }
}