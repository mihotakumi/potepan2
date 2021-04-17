const time = document.getElementById('time');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

let elapsed = 0;

let intervalId = null;

let timeToAdd = 0;

function updateTime(){
    let ms = elapsed % 1000;
    const s = Math.floor(elapsed / 1000) % 60;
    const m = Math.floor(elapsed / (1000*60)) % 60;
    const h = Math.floor(elapsed / (1000*60*60));

    if (ms < 100){
        ms = 0;
    }

    const msStr = ms.toString().slice(0, 1);
    const sStr = s.toString().slice(0, 2);
    const mStr = m.toString().slice(0, 2);
    const hStr = h.toString().slice(0, 1);
    
    const timeStr = hStr + ":" + mStr + ":" + sStr + ":" + msStr;
    document.getElementById("time").innerHTML = timeStr;
}

start.addEventListener('click', function(e) {
    if (intervalId !== null){ return;}
    let pre = new Date();
    intervalId = setInterval(function(){
        const now = new Date();
        elapsed += now - pre;
        pre = now;
        updateTime();
    }, 10);
    start.disabled = true;
　  stop.disabled = false;
　  reset.disabled = false;
});

stop.addEventListener('click', function(e){
    clearInterval(intervalId)
    intervalId = null;
    start.disabled = false;
　  stop.disabled = true;
});

reset.addEventListener('click', function(e){
    start.disabled = false;
    reset.disabled = true;
    elapsed = 0;
    timeToAdd = 0;
    updateTime();
});