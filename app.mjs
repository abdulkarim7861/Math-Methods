//Q:1 & Q:2
// Integer 
let integer = parseFloat(prompt("Enter  Positive and Negative  Integer :"));
console.log(`Number: ${integer}`);

// Round Off
let roundOffNumber =Math.round(integer)
console.log(`Round Off Number: ${roundOffNumber}`);

// Floor
let floorNumber = Math.floor(integer)
console.log(`Floor Number: ${floorNumber}`);

// Ceil
let ceilNumber = Math.ceil(integer)
console.log(`Round Off Number: ${ceilNumber}`);

//Q:3
let number = parseFloat(prompt("Enter any Number:"))
let num = Math.abs(number);
console.log(`${num}`)

//Q:4
let diceNumber = Math.floor(Math.random()*6 + 1);
console.log(`Random Value ${diceNumber}`);

//Q:5
let toss = Math.floor(Math.random()*2+1)
console.log(toss);
if(toss === 2 ){
    console.log(`random Coin Value is Heads`);
}else{
        console.log(`random Coin Value is Tails`);
    }

//Q:6
let randNumber = Math.floor(Math.random()*100+1)
console.log(`Random Number Between 1 and 100 :${randNumber}`);

//Q:7
let weight = parseFloat(prompt("Enter Your Weight in Kilogram"));
console.log(`The weight of user is ${weight} Kg`)

//Q:8
let userNumber = parseInt(prompt("Enter Number Between 1 To 10"));
let secretNumber = Math.floor(Math.random()*10+1);
console.log(secretNumber)
if(userNumber === secretNumber){
    console.log(`Congulation! You Win`);
}else{
    console.log(`Try Again!`);
}