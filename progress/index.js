window.addEventListener("load",()=>{
    main();
    setInterval(main,1000)
});

function main(){
    const dayCont = document.querySelector("#dayProgCont");
    const dayBar = document.querySelector("#dayBar");
    const weekCont = document.querySelector("#weekProgCont");
    const weekBar = document.querySelector("#weekBar");
    const monthCont = document.querySelector("#monthProgCont");
    const monthBar = document.querySelector("#monthBar");
    const yearCont = document.querySelector("#yearProgCont");
    const yearBar = document.querySelector("#yearBar");

    const day = 1000*60*60*24;
    const hours = 1000*60*60;
    const mins = 1000*60;

    const now = new Date();
    
    const diffDay = now-(new Date(now.getFullYear(),now.getMonth(),now.getDate()));
    const dayProg = Math.floor(diffDay/mins);
    const dayPercent = dayProg/1440*100;

    const dow = ((now.getDay() + 6) % 7);
    const diffWeek = now-(new Date(now.getFullYear(),now.getMonth(),now.getDate()-dow));
    const wkProg = Math.floor(diffWeek/hours);
    const wkPercent = wkProg/168*100;

    const diffMonth = now-(new Date(now.getFullYear(),now.getMonth(),0));
    const monthProg = Math.floor(diffMonth/hours);
    const monthPercent = monthProg/(hoursInMonth(now.getMonth()+1,now.getFullYear()))*100;

    const diffYear = now - (new Date(now.getFullYear(),0,0));
    const yearProgress = Math.floor(diffYear/day);
    const yearPercent = yearProgress/365*100;

    yearBar.style.width = `${yearPercent}%`;
    monthBar.style.width = `${monthPercent}%`;
    weekBar.style.width = `${wkPercent}%`;
    dayBar.style.width = `${dayPercent}%`;
}

function hoursInMonth(month,year){
    const months = new Date(year,month,0).getDate();
    return months*24;
}