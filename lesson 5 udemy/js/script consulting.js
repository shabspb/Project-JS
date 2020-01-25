let x = 5;
console.log(x++); //5

let a = [] + false - null + true;
console.log(a); //NaN

let y = 1;
let x = y = 2;
console.log(x); //2

let a = [] + 1 + 2;
console.log(a); //12

console.log("1" [0]); //1


console.log(2 && 1 && null && 0 && undefined); //null

!!(a && b); //boolean
let a = 3,
    b = 4;
console.log(typeof (!!(a && b)));
(a && b);
let a = 3,
    b = 4;
console.log(a && b); // 4

console.log(null || 2 && 3 || 4);

a = [1, 2, 3];
b = [1, 2, 3];
if (a == b) {
    console.log(true);
} else {
    console.log(false); // false
}

console.log(+"Infinity"); //Infinity

if ("Ёжик" > "яблоко") {
    console.log(true);
} else {
    console.log(false); // false
}

console.log(0 || "" || 2 || undefined || true || falsе); //2