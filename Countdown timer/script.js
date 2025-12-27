// Set target date and time
const targetDate = new Date("December 31, 2025 23:59:59").getTime();

const countdown = setInterval(() => {

    const currentTime = new Date().getTime();
    const difference = targetDate - currentTime;

    if (difference < 0) {
        clearInterval(countdown);
        document.querySelector(".timer").style.display = "none";
        document.getElementById("message").innerText = "🎉 Event Started!";
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

}, 1000);
