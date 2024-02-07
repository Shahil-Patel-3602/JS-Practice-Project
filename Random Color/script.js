let boxes = document.querySelectorAll('.box');

const getRandomColor = () => {
    // Formula = Math.ceil(min + (max-min)*(Math.random())
    let val1 = Math.ceil(0 + (255 * Math.random()))
    let val2 = Math.ceil(0 + (255 * Math.random()))
    let val3 = Math.ceil(0 + (255 * Math.random()))
    
    return `rgb(${val1}, ${val2}, ${val3})`;
}

// Create array of boxes
let boxesArray = Array.from(boxes);
boxesArray.forEach(box => {

    // Will change color every second
    setInterval(() => {
        box.style.backgroundColor = getRandomColor();
        box.style.color = getRandomColor();
    }, 150);
    
    // Will change color only when the page is refreshed
    box.style.backgroundColor = getRandomColor();
    box.style.color = getRandomColor();
});