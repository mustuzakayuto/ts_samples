var total:number=0

function handleRandom(count:number){
    const randomNumber = Math.random();
    const message = `${count}:${randomNumber}`
    total=total+count;
    console.log(message)
}
function start(callback:(count:number)=>void){
    var count = 0;
    const timer = setInterval(()=>{
        count++
        if(count>=5) clearInterval(timer);
        console.log(total)
        callback(count)
    },1000);
    
}
start(handleRandom)
