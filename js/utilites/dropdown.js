/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

const dropdowns = document.querySelectorAll('.dropbtn');
const dropdowns2 = document.querySelectorAll('.dropdown');

for(let i=0;i<dropdowns.length;i++){
    dropdowns[i].addEventListener('click',(e)=>{
        let x = e.target;
        if(x.classList.contains('up')){
            x.classList.remove('up');
            x.classList.add('down');
        }else{
            x.classList.remove('down');
            x.classList.add('up')
        }
        x =e.target.nextSibling.nextSibling;
        x.classList.toggle("show");
    })
}
for(let i=0;i<dropdowns2.length;i++){
    
    let c = dropdowns2[i].children;
    console.log(c[0]);
    c[0].addEventListener('click',(e)=>{
        let x = e.target.nextSibling.nextSibling;
        x.classList.toggle("show");
    })
    
}
