var total = 0;
function handleRandom(count) {
    var randomNumber = Math.random();
    var message = "".concat(count, ":").concat(randomNumber);
    total = total + count;
    console.log(message);
}
function start(callback) {
    var count = 0;
    var timer = setInterval(function () {
        count++;
        if (count >= 5)
            clearInterval(timer);
        console.log(total);
        callback(count);
    }, 1000);
}
start(handleRandom);
