const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const ampm = document.getElementById('ampm');

const hh = document.getElementById('hh');
const mm = document.getElementById('mm');
const ss = document.getElementById('ss');

const circleWidth = hh.getBoundingClientRect().width * 3 + 20;

setInterval(() => {

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am = h >= 12 ? 'PM' : 'AM';

    // Convert 24 hrs clock to 12 hrs clock
    if (h > 12) {
        h = h - 12;
    }

    // Add zero to sigle digit number
    h = h < 10 ? `0${h}` : h;
    m = m < 10 ? `0${m}` : m;
    s = s < 10 ? `0${s}` : s;

    hours.innerHTML = h + '<p>Hours</p>';
    minutes.innerHTML = m + '<p>Minutes</p>';
    seconds.innerHTML = s + '<p>Seconds</p>';
    ampm.innerHTML = am;

    hh.style.strokeDashoffset = circleWidth - (circleWidth * h) / 12;
    mm.style.strokeDashoffset = circleWidth - (circleWidth * m) / 60;
    ss.style.strokeDashoffset = circleWidth - (circleWidth * s) / 60;

}, 1000);
