// Arrow function

let  a = 1;
let b = 2;
let  c = 3;

const sum = (x, y)=>{
    console.log("Arrow function is called")
    return x + y;
}

let nullFunction = () => {
    console.log("This is a NULL function");
}

// console.log(sum(a, b));
// sum(a, b)

console.log(nullFunction());