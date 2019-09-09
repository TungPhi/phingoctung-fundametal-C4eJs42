let clickUp = document.getElementById("btnUp");
let clickLeft = document.getElementById("btnLeft");
let clickRight = document.getElementById("btnRight");
let clickDown = document.getElementById("btnDown");
let box = document.getElementById("box");
let count = 0;
let count2 = 0;
clickUp.addEventListener('click',function(){
    count2 -= 10;
    box.style.marginTop = `${count2}px`;
})
clickLeft.addEventListener('click',function(){
    count -= 10;
    box.style.marginLeft = `${count}px`;
})
clickRight.addEventListener('click',function(){
    count += 10;
    box.style.marginLeft = `${count}px`;
})
clickDown.addEventListener('click',function(){
    count2 += 10;
    box.style.marginTop = `${count2}px`;
})

