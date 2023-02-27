window.addEventListener("load",()=>{
    main();
    setInterval(main,1000)
});

function main(){
    const time = new Date();
    const clockCont = document.querySelector("#clockCont");
    clockCont.innerHTML = "";

    const hours = document.createElement("h1");
    hours.id = "hrs"
    hours.textContent = time.getHours()<10 ? "0"+time.getHours() : time.getHours();

    const mins = document.createElement("h1");
    mins.id = "mins"
    mins.textContent = time.getMinutes()<10 ? "0"+time.getMinutes() : time.getMinutes();

    clockCont.appendChild(hours);
    clockCont.appendChild(mins);    
}

