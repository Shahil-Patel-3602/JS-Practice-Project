// 4 Pillars of DOM

// 1. Selection of an Element
// 2. Changing HTML
// 3. Changing CSS
// 4. Event Listener

// Selection of an Element
var a = document.querySelector("h1");
// console.log(a)

// // changing the HTML
// a.innerHTML = "HTML Changed"

// a.addEventListener("click", function () {
//     a.innerHTML = "HTML Changed"
// });

// Changing CSS
// a.style.color = "red";
// a.style.fontSize = "50px";

// a.addEventListener('click', function(){
//     a.style.color = "red";
//     a.style.backgroundColor = "black";
// });

// function changeCSS(){
//     a.style.color = "red";
//     a.style.backgroundColor = "black";
// }


// a.addEventListener('click', changeCSS);

var OnBtn =  document.querySelector("#On");
var bulb = document.querySelector("#bulb");
// var OffBtn = document.querySelector("#Off");


// Using 1 button
OnBtn.addEventListener("click", function(){
    if(OnBtn.innerHTML == "ON"){
        bulb.style.backgroundColor = "yellow";
        OnBtn.innerHTML = "OFF";
    }
    else{
        bulb.style.backgroundColor = "white";
        OnBtn.innerHTML = "ON";
    }
});


// OnBtn.addEventListener("click", function(){
//     bulb.style.backgroundColor = "yellow";
// });

// OffBtn.addEventListener("click", function(){
//     bulb.style.backgroundColor = "white";
// });


// Using querySelectorAll
var h = document.querySelectorAll("h1");
// console.log(h);

h.forEach(function (e) {
    e.addEventListener('mouseover', function(){
        e.style.color = "red";
    });
    e.addEventListener('mouseleave', function(){
        e.style.color = "black";
    });
});

var divBox = document.getElementsByClassName('box');

// Div Box may have multiple elements, so we use index, divBox[0]
divBox[0].addEventListener('click', function(){
    divBox[0].style.backgroundColor = "yellow";
});

divBox[0].innerHTML = "<h3>Hello World</h3>";
// divBox[0].textContent = "<h3>Hello World</h3>";