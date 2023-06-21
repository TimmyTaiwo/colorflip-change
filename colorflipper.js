button = document.querySelector('.button');
display = document.querySelector('.display');
body = document.querySelector('body')
red = document.querySelector('.red');
green = document.querySelector('.green');
yellow = document.querySelector('.yellow');
black = document.querySelector('.black');
cancel = document.querySelector('.btn1');
function alertone(){ 
    display.style.display = 'block';
    button.style.display = 'none';
    display.style.marginTop = '150px';
}
button.addEventListener('click', alertone);

function alerttwo(){
    body.style.backgroundColor = 'red';
    display.style.display = 'none';
    button.style.display = 'block';
}
red.addEventListener('click', alerttwo);

function alertthree(){
    body.style.backgroundColor = 'green';
    display.style.display = 'none';
    button.style.display = 'block';
}
green.addEventListener('click', alertthree);

function alertfour(){
    body.style.backgroundColor = 'yellow';
    display.style.display = 'none';
    button.style.display = 'block';
}
yellow.addEventListener('click', alertfour);

function alertfive(){
    body.style.backgroundColor = 'black';
    display.style.display = 'none';
    button.style.display = 'block';
}
black.addEventListener('click', alertfive);
    
function alertsix(){
    display.style.display = 'none';
    body.style.backgroundColor = 'white';
    button.style.display = 'block';
}
cancel.addEventListener('click', alertsix);
// function alertthree(){
//     body.style.backgroundColor = 'green';
//     display.style.display = 'none';
//     button.style.display = 'block';
// }
// green.addEventListener('click', alerttwo);

// function alertfour(){
//     body.style.backgroundColor = 'yellow';
//     display.style.display = 'none';
//     button.style.display = 'block';
// }
// yellow.addEventListener('click', alerttwo);

// function alertfive(){
//     body.style.backgroundColor = 'black';
//     display.style.display = 'none';
//     button.style.display = 'block';
// }
// black.addEventListener('click', alerttwo);