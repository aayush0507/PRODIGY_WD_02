let hour = 0;
let min = 0;
let sec = 0;
let count = 0;
let timer = false;

function start() {
    timer = true;
    stopwatch();
}

function stop() {
    timer = false;
}

function reset() {
    timer = false;
    hour = 0;
    min = 0;
    sec = 0;
    count = 0;
    document.getElementById("hr").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("count").innerHTML = "00";
    document.getElementById("lap-list").innerHTML = "";
}

function lap() {
    let lapTime = `${formatTime(hour)}:${formatTime(min)}:${formatTime(sec)}:${formatTime(count)}`;
    let lapList = document.getElementById("lap-list");
    let lapItem = document.createElement("li");
    lapItem.textContent = lapTime;
    lapList.appendChild(lapItem);
}

function formatTime(unit) {
    return unit < 10 ? "0" + unit : unit;
}

function stopwatch() {
    if (timer) {
        count++;
        if (count == 100) {
            sec++;
            count = 0;
        }
        if (sec == 60) {
            min++;
            sec = 0;
        }
        if (min == 60) {
            hour++;
            min = 0;
            sec = 0;
        }

        document.getElementById("hr").innerHTML = formatTime(hour);
        document.getElementById("min").innerHTML = formatTime(min);
        document.getElementById("sec").innerHTML = formatTime(sec);
        document.getElementById("count").innerHTML = formatTime(count);

        setTimeout(stopwatch, 10);
    }
}
