'use strict';

const bookings = [];
const createBooking = function(firstNum, numPassenager = 1, price = 199){
    const booking = {
        firstNum,
        numPassenager,
        price
    };
    console.log(booking);
    bookings.push(booking);
    console.log(bookings);
}
createBooking("LH132", 2, 300);
createBooking("LH134", undefined, 300);
createBooking("LH135", 5, 1500);
createBooking("LH135");



const flight = "LH1234";
const jonas = {
    name: "jonas",
    passport: 123456789
};
function checkIn(flightNum, passenger){
    flightNum = "LH999";
    passenger.name = "Mr. " + passenger.name;

    if(passenger.passport == 123456789)
        alert("Checked In");
    else
        alert("Wrong Passport");
}
// checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

function newfun(flightnum1, passport1){
    passport1.passport = 123456;
    if(passport1.passport == 123456789)
        alert("Checked In");
    else
        alert("Wrong Passport");
}
// newfun(flight, jonas);
console.log(flight, jonas);


function onWord(str){
    return str.replaceAll(" ","").toLowerCase();
};
function upperFirstWord(str){
    const [first, ...others] = str.split(" ");
    return [first.toUpperCase(), ...others].join(" ");
};

function transformer(str, fun){
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fun(str)}`);
    console.log(`Transformed by: ${fun.name}`);
};
transformer("Javascript is the Best!", upperFirstWord);
transformer("Javascript is the Best!", onWord);

const high5 = function(){
    console.log("a");
};
document.body.addEventListener("click", high5);

["jonas", "Martha", "Adam"].forEach(high5);


const  greet = function (greeting){
    return function inter(name){
        console.log(`${greeting} ${name}`);
    };
};
const greetings = greet("Hey");
greetings("Jonas");
greetings("Steve");

greet("Hey")("Dustin");

let greetArrow = (greeting) => {
    return function (name){
        console.log(`${greeting} ${name}`);
    };
};
greetArrow("Hey")("Dustin");

// const greetArr = greeting => name => console.log(`${greeting} ${name}`);
// greetArr("Hey")("El");


const lufthansa = {
    airline: "Lufthansa",
    iataCode: "LH",
    bookings: [],
    book(flightNum, name){
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
    }
    
};
lufthansa.book(2356, "Jonas Doe");
lufthansa.book(2357, "Jonas Steven");
const euroWings = {
    airline: "EuroWings",
    iataCode: "EW",
    bookings: []
};

const book = lufthansa.book;

// call 
book.call(lufthansa, 2379, "Dustin");
console.log(lufthansa);

book.call(euroWings, 2379, "Mike");
console.log(euroWings);

const swiss = {
    airline: "Swiss Air Lines",
    iataCode: "LX",
    bookings: []
};

book.call(swiss, 2375, "Mike");
console.log(swiss);
// apply
const flightData = [583, "George Cooper"];
book.apply(swiss, flightData);
book.call(swiss, ...flightData);

//bind , partial application
const bookEW = book.bind(euroWings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, "Steven");
bookLH(20, "Steven");
bookLX(19, "Steven");

const bookEW23 = book.bind(euroWings, 23);
bookEW23("JOHN");
bookEW23("MARY COOPER");

//with Event Listener
lufthansa.planes = 300;
lufthansa.buyPlane = function(){
    console.log(this);
    this.planes++;
    console.log(this.planes);
}
document.querySelector(".buy").addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

const addTax = (rate, value) => value + value*rate; 
console.log(addTax(0.1, 200));
console.log(addTax(0.1, 300));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(200));
console.log(addVAT(300));

function addTax1(rate){
    return function(value){
        return value + value*rate;
    };
};
console.log(addTax1(0.1)(100));
console.log(addTax1(0.1)(100));

// Imediate Function Expression
(function(){
    console.log("This will run");
})();

(() => console.log("This will alos run"))();

// closures function
const secureBooking = function(){
    let passengerCount = 0;

    return function(){
        passengerCount++;
        console.log(`${passengerCount} passenger`);
    };
};
const booker = secureBooking();
booker();
booker();
booker();

console.dir(booker);

let f;
const g = function(){
    const a = 23;
    f = function(){
        console.log(a*2);
    }
}
const h = function(){
    const b = 32;
    f = function(){
        console.log(b*2);
    }
}
g();
f();

h();
f();

const boardPassenger = function(n, wait){
    const perGroup = n/3;

    setTimeout(function(){
        console.log(`We are now boarding all ${n} passenger`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    },wait*1000);
    console.log(`Will start boarding in ${wait} seconds`);
};
boardPassenger(180, 5);