// Code your solutions in this file

for (let age = 30; age < 40; age++){
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}

let gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts){
    for (let i = 0; i <gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`)
    }
    return gifts
}
wrapGifts(gifts)


array = ["Ada", "Brendan", "Ali"]
event = "birthday"
function writeCards(array, event){
    for (let i = 0; i < 3; i++){
        console.log(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
    }
}

writeCards(array, event);

const g = ["teddy bear", "drone", "doll"];

function wrapGifts(g){
    let i = 0;
    while (i <g.length){
        console.log(`Wrapped ${g[i]} and added a bow!`);
        i++;
    }
    return g
}

wrapGifts(g);

function countDown(num){
    countdown = num 
    while ( -1 < countdown){
        console.log(countdown);
        countdown--;
    } 
}

countDown(10)

