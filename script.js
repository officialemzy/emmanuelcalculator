let display = document.querySelector('.answers');
let displayButtons = document.querySelectorAll('.btnInp');
displayButtons.forEach(function(item){
    item.addEventListener('click', function(event){
        display.value += event.target.value;
    });
});
let calculate = document.querySelector('.equal');
calculate.addEventListener('click', function(){
   try {
    display.value = eval(display.value);
    document.querySelector('h2').style.visibility = "hidden";
   } catch {
     document.querySelector('h2').style.visibility = "visible";
   } 
});

let backspace = document.querySelector('.del');
    backspace.addEventListener('click', function(){
    display.value = display.value.slice(0, -1);
 });
 
 let resetkey = document.querySelector('.reset');
 resetkey.addEventListener('click', function(){
    display.value = '';
    document.querySelector('h2').style.visibility = "hidden";
 });
 document.querySelector(".theme1").addEventListener('click', function(){

    document.querySelector('.theme1').style.opacity = "1";
    document.querySelector('.theme2').style.opacity = "0";
    document.querySelector('.theme3').style.opacity = "0";
    document.querySelector('.theme1').style.backgroundColor = "hsl(6, 63%, 50%)";
    document.querySelector('body').style.backgroundColor = "hsl(222, 26%, 31%)";
 document.querySelector('.answers').style.backgroundColor = "hsl(224, 36%, 15%)";
 document.querySelector('.answers').style.color = "white";
 document.querySelector('.heading').style.color = "white";
 document.querySelector('.btns').style.backgroundColor = "hsl(223, 31%, 20%)";
 document.querySelector('.parent-theme').style.backgroundColor = "hsl(223, 31%, 20%)";
 backspace.style.color = "";
 backspace.style.backgroundColor = "";
 backspace.style.borderBottomColor = "";
 resetkey.style.color = "white";
 resetkey.style.backgroundColor = "hsl(225, 21%, 49%)";
 resetkey.style.borderBottomColor = "hsl(224, 28%, 35%)";
 calculate.style.color = "white";
 calculate.style.backgroundColor = "hsl(6, 63%, 50%)";
 calculate.style.borderBottomColor = "hsl(6, 70%, 34%)";
 displayButtons.forEach(function(items){
    items.style.color = "hsl(223, 31%, 20%)";
    items.style.backgroundColor = "hsl(30, 25%, 89%)";
    items.style.borderBottomColor = "hsl(28, 16%, 65%)";
});
});

 document.querySelector(".theme2").addEventListener('click', function(){

 document.querySelector('.theme1').style.opacity = "0";
 document.querySelector('.theme2').style.opacity = "1";
 document.querySelector('.theme3').style.opacity = "0";
 document.querySelector('.theme2').style.backgroundColor = "hsl(25, 98%, 40%)";
 document.querySelector('body').style.backgroundColor = "hsl(0, 0%, 90%)";
 document.querySelector('.answers').style.backgroundColor = "hsl(0, 0%, 93%)";
 document.querySelector('.answers').style.color = "black";
 document.querySelector('.heading').style.color = "black";
 document.querySelector('.btns').style.backgroundColor = "hsl(0, 5%, 81%)";
 document.querySelector('.parent-theme').style.backgroundColor = "hsl(0, 5%, 81%)";
 backspace.style.color = "white";
 backspace.style.backgroundColor = "hsl(185, 42%, 37%)";
 backspace.style.borderBottomColor = " hsl(185, 58%, 25%)";
 resetkey.style.color = "white";
 resetkey.style.backgroundColor = "hsl(185, 42%, 37%)";
 resetkey.style.borderBottomColor = " hsl(185, 58%, 25%)";
 calculate.style.color = "white";
 calculate.style.backgroundColor = "hsl(25, 98%, 40%)";
 calculate.style.borderBottomColor = " hsl(25, 99%, 27%)";
 displayButtons.forEach(function(items){
    items.style.color = "black";
    items.style.backgroundColor = "hsl(45, 7%, 89%)";
    items.style.borderBottomColor = "hsl(35, 11%, 61%)";
});

 });
   document.querySelector(".theme3").addEventListener('click', function(){

    document.querySelector('.theme1').style.opacity = "0";
    document.querySelector('.theme2').style.opacity = "0";
    document.querySelector('.theme3').style.opacity = "1";
    document.querySelector('.theme3').style.backgroundColor = "hsl(176, 100%, 44%)";
    document.querySelector('body').style.backgroundColor = "hsl(268, 75%, 9%)";
    document.querySelector('.answers').style.backgroundColor = " hsl(268, 71%, 12%)";
    document.querySelector('.answers').style.color = "hsl(52, 100%, 62%)";
    document.querySelector('.heading').style.color = "hsl(52, 100%, 62%)";
    document.querySelector('.btns').style.backgroundColor = "hsl(268, 71%, 12%)";
    document.querySelector('.parent-theme').style.backgroundColor = "hsl(268, 71%, 12%)";
    backspace.style.color = "white";
 backspace.style.backgroundColor = "hsl(281, 89%, 26%)";
 backspace.style.borderBottomColor = "hsl(285, 91%, 52%)";
 resetkey.style.color = "white";
 resetkey.style.backgroundColor = "hsl(281, 89%, 26%)";
 resetkey.style.borderBottomColor = "hsl(285, 91%, 52%)";
 calculate.style.color = "black";
 calculate.style.backgroundColor = "hsl(176, 100%, 44%)";
 calculate.style.borderBottomColor = "hsl(177, 92%, 70%)";
    displayButtons.forEach(function(items){
        items.style.color = "hsl(52, 100%, 62%)";
        items.style.backgroundColor = "hsl(268, 47%, 21%)";
        items.style.borderBottomColor = "hsl(285, 91%, 52%)";
    })

 });