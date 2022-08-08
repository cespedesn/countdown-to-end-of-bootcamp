const countdown = () => {
    const countdownDate = new Date("December 9, 2022 00:00:00").getTime();
    const now = new Date().getTime();
    const difference = countdownDate - now;

    /* 1000 miliseconds in one second and so on*/
    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;

    /*Calculate*/
    /*math.floor returns the greatest integer less than or equal to its numeric argument. Rounds to nearest whole number*/
    const finalDay = Math.floor(difference / days);
    const finalHour = Math.floor((difference % days) / hours);
    const finalMinute = Math.floor((difference % hours) / minutes);
    const finalSecond = Math.floor((difference % minutes) / seconds);
    
    document.getElementById('days').innerText = parseInt(finalDay);
    document.getElementById('minutes').innerText = parseInt(finalMinute);
    document.getElementById('hours').innerText = parseInt(finalHour);
    document.getElementById('seconds').innerText = parseInt(finalSecond);

    
};

setInterval(countdown, 1000);

function changeBackground1() {
    const text = document.getElementById("days").style
    text.backgroundColor= "whitesmoke" 
}

function backToNormal1() {
    const text = document.getElementById("days").style
    text.backgroundColor= "" 
}

function changeBackground2() {
    const text = document.getElementById("hours").style
    text.backgroundColor= "whitesmoke" 
}


function backToNormal2() {
    const text = document.getElementById("hours").style
    text.backgroundColor= "" 
}

function changeBackground3() {
    const text = document.getElementById("minutes").style
    text.backgroundColor= "whitesmoke" 
}

function backToNormal3() {
    const text = document.getElementById("minutes").style
    text.backgroundColor= "" 
}

function changeBackground4() {
    const text = document.getElementById("seconds").style
    text.backgroundColor= "whitesmoke" 
}


function backToNormal4() {
    const text = document.getElementById("seconds").style
    text.backgroundColor= "" 
}

