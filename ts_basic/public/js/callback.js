"use strict";
var total = 0;
function handleRandom(count) {
    const randomNumber = Math.random();
    const message = `${count}:${randomNumber}`;
    total = total + count;
    console.log(message);
}
function start(callback) {
    var count = 0;
    const timer = setInterval(() => {
        count++;
        if (count >= 5)
            clearInterval(timer);
        console.log(total);
        callback(count);
    }, 1000);
}
start(handleRandom);
