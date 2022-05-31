let name = prompt("Adınızı giriniz");
const myName = document.getElementById("myName");
myName.textContent = name;

days = {
    0: "Pazar",
    1: "Pazartesi",
    2: "Salı",
    3: "Çarşamba",
    4: "Perşembe",
    5: "Cuma",
    6: "Cumartesi"
}

const myClock = document.getElementById("myClock");

showTime = () => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let day = date.getDay();


    setTimeout(showTime, 1000);

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    myClock.textContent = `${hours}:${minutes}:${seconds} ${days[day]}`;
}
showTime();


