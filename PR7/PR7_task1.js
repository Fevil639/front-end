function callback1(){
    console.log("callback1");
}

function callback2(){
    console.log("callback2");
}

function main(callback1, callback2){
    setTimeout(callback1,2000);

    let timerId = setInterval(() => {callback2()}, 1000)
    setTimeout(() => { clearInterval(timerId)},4000)
}

main(callback1, callback2);
