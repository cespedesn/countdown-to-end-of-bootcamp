const countdown = () => {
    const countDownDate = new Date("December 9, 2022 00:00:00").getTime;
    const now = new Date().getTime();
    const difference = countDownDate - now;

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
    
    document.querySelector('.days').innerText = finalDay;
    document.querySelector('.minutes').innerText = finalMinute;
    document.querySelector('.hours').innerText = finalHour;
    document.querySelector('.seconds').innerText = finalSecond;

};



setInterval(countdown, 1000);


    