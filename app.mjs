// //Q:1 & Q:2
// // Integer 
// let integer = parseFloat(prompt("Enter  Positive and Negative  Integer :"));
// console.log(`Number: ${integer}`);

// // Round Off
// let roundOffNumber =Math.round(integer)
// console.log(`Round Off Number: ${roundOffNumber}`);

// // Floor
// let floorNumber = Math.floor(integer)
// console.log(`Floor Number: ${floorNumber}`);

// // Ceil
// let ceilNumber = Math.ceil(integer)
// console.log(`Round Off Number: ${ceilNumber}`);

// //Q:3
// let number = parseFloat(prompt("Enter any Number:"))
// let num = Math.abs(number);
// console.log(`${num}`)

// //Q:4
// let diceNumber = Math.floor(Math.random()*6 + 1);
// console.log(`Random Value ${diceNumber}`);

//Q:5
let toss = Math.floor(Math.random()*2+1)
console.log(toss);
if(toss === 2 ){
    console.log(`random Coin Value is Heads`);
}else{
    console.log(`random Coin Value is Tails`);
}