import Person from './oopJS/person.js';
console.log('JS WORKS');

let p = new Person();
console.log("P: "+p);
p.name = "Csalló Maló";
p.setAge(35);
console.log(`A személyünk tulajdonságai:\n Neve: ${p.name},\n kora: ${p.age}.`);
console.log('ID:');
console.log(p.idCard);
console.log('Show ID:'+p.idCard.show());

// GENERAL:
// - let, const
let malopenze = 25;
const faterpenze = 100;
malopenze += 100;
// faterpenze -= 50;
console.log("Maló pénze: "+malopenze);
console.log("fater pénze: "+faterpenze);
// - function, method
const mfuggveny = function (s) {
    console.log(s.toUpperCase());    
}
mfuggveny("telephely");

function nfuggveny(s){
    console.log(s.toLowerCase());
}
nfuggveny("Szabó József");

// Data types:
// NUMBER
let x = 18;
let y = "20";
let z = 1.5;
console.log(x+Number(y));
console.log(x+z);
// BOOLEAN
let t = true;
let f = false;
console.log("t: "+t);
console.log("f: "+f);
// NULL
// UNDEFINED

let ax = null;
let az;

// STRING
// - string template HTML ``!!

let s = "Üdvözöllek idegen!";
let n = "Steingart Péter";
console.log(`Üdvözöllek ${n}`);

// ARRAYS (indexOf,length,join,split,splice,push,pop ...)

let baratok = ["Jani","Jozsi","Karoly",25,32,28];
console.log(baratok);
console.log(baratok);

// OBJECTS

let pohar = {
    urmeret: 4.3,
    szine: "fehér",
    italok: ["szörp","tea","viz","sör"],
    urul: function(){
        this.urmeret -=0.1;
        console.log("this.urmeret: " + this.urmeret);
    },
    szivoszal: {
        hossza : 12.3,
        anyaga : "pvc"
    }
};
console.log("pohár: ");
console.log(pohar);

// Control flow:
// - BRANCHING
// - - IF
// - - SWIITCH
// - CYCLES/ITERATIONS
// - - FOR
// - - WHILE

// Functions
// - FUNCTION DECLARATION
// - FUNCTION EXPRESSION
// - - parameters,params+def.values
// - - return values
// - ARROW FUNCTION
// - - const greet = () => 'Hello WOrld!';
// - - const bill = (products, tax) => {
// - -     let total = 0;
// - -     for(let i=0; i<produts.length;i++){
// - -          total += products[i] + products[i]*tax;
// - -     }
// - - }
// - CALLBACKS/FOREACH

