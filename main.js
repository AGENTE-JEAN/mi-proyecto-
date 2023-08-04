let listelments = document.querySelectorAll('.list_button_click');
let menu = document.querySelector('.list__show');
let menu2 = document.querySelector('.list_show');
let listelments2 = document.querySelectorAll('.list_button_click2');
let arrow=document.querySelectorAll('.arrow');
let arrow1=document.querySelectorAll('.arrow1');
listelments.forEach(arrow => {
    arrow.addEventListener('click', ()=>{
        arrow.classList.toggle('arrow2');
})
})
listelments2.forEach(arrow1=> {
    arrow1.addEventListener('click', ()=>{
        arrow1.classList.toggle('arrow2');
})
})
listelments2.forEach(listelments2 => {
    listelments2.addEventListener('click', ()=>{
        menu.classList.toggle('showw');
})
listelments.forEach(listelments => {
    listelments.addEventListener('click', ()=>{
        menu2.classList.toggle('showw')
})
})
})

