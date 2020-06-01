// Code your solutions in this file
// writeCards(["Ada", "Brendan", "Ali"], "birthday");

let ret = []
function writeCards(ary, str) {
    for (let ind = 0; ind < ary.length; ind++) {
        let sent = `Thank you, ${ary[ind]}, for the wonderful ${str} gift!`;
        ret.push(sent);
    }

    return ret;
}
// console.log(writeCards(["Ada", "Brendan", "Ali"], "birthday"));


function countDown(nat) {
    let count = nat
    while (count >= 0) {
        console.log(count)
        count--
    }
}
