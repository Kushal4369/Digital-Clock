let digits= document.getElementsByClassName('digits');

setInterval(()=>{
    let currentDate= new Date;
    digits[0].innerHTML= currentDate.getHours();
    digits[1].innerHTML= currentDate.getMinutes();
    digits[2].innerHTML= currentDate.getSeconds();
},100);
