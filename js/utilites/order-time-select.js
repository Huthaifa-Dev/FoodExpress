const data = document.querySelectorAll(".dropdown-menu ul");
const time = document.querySelector("#selected_time");
const day = document.querySelector("#selected_day");

data.forEach(element => {
    let x = element.querySelectorAll("li");
    x.forEach(e=>{
        e.addEventListener('click',(event=>{
            let c = event.target;
            if(c.id.includes("time")){
                time.innerText = c.value;
            }else if(c.id.includes("day")){
                day.innerText = c.value;
            }
            element.parentElement.parentElement.parentElement.classList.remove("show");
        }))
    })
});
