import Person from './oopJS/person.js';
console.log('JS WORKS');


var app = app || {};


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
let kor = 5
if(kor > 6){
    console.log("Megnézheti a filmet!");
}else if(kor == 6) {
    console.log("Egyefene, megnézheted");
} else {
    console.log("Túl fiatal vagy");
}
// - - SWIITCH
switch (kor) {
    case 1:
        console.log("egy éves vagy");
        break;
    case 2:
        console.log("két éves vagy");
        break;
    case 6:
        console.log("hat éves vagy");
        break;
    case 10:
        console.log("tíz éves vagy");
        break;

    default:
        console.log("default");
        break;
}
// - CYCLES/ITERATIONS
// - - FOR
let szamok = [4,11,7,9,23,17]
for (let index = 0; index < szamok.length; index++) {
    console.log(`a ${szamok[index]} köbe: `+ szamok[index] * szamok[index] * szamok[index]);
    
}
// - - WHILE

let negyzet = 1;
while (negyzet < 1000) {
    console.log(negyzet);
    if(negyzet < 2){
        negyzet++;
    }else{
        negyzet *= negyzet;
    }
}

// Functions
// - FUNCTION DECLARATION
function funkcio(n){
    console.log(`Hello ${n}`);
}
let nev = "Józsi";
funkcio(nev);
//U = R*I
//Re = R1+R2
//R = U/I
function ellenallas(U,I) {
    let R = U/I;
    return R;
}
let fesz = 25;
let aram = 12;
let ell = ellenallas(fesz,aram);
console.log("Az ellenállás: "+ell);

function fajlagosEllenallas(an){
    if (an == "réz") {
        return 0.017;
    }else if (an == "ezüst") {
        return 0.016;        
    }else if (an == "arany") {
        return 0.023;    
    }else if (an == "alumínium") {
        return 0.028;        
    }else if (an == "higany"){
        return 0.958;
    }
}

function anyagEllenallas(ho,hm,su,sum,any){
    //fajlagos ellenállás lekérdezése
    let fe = fajlagosEllenallas(any);
    //mértékegység ellenőrzés
    if (hm != sum) {
        //mértékegység átváltás
        if (hm == "mm") {
            ho = ho/1000;
        }else if (hm == "m") {
            su = su*1;            
        }else if (hm == "cm") {
            ho = ho/100;            
        }else if (hm == "km") {
            ho = ho*1000;
        }else{
            alert("Ismeretlen hosszmérték: "+hm);
            return "";
        }

        if (sum == "m") {
            su = su*1;
        }else if (sum == "mm") {
            su = su/1000;            
        }else if (sum == "cm") {
            su = su/100;            
        }else if (sum == "km") {
            su = su*1000;
        }else{
            alert("Ismeretlen sugármérték: "+sum);
            return "";
        }
    }
    //fajlagos ellenállás számítás
    console.log("sugár: "+su);
    let km = su*su*Math.PI;
    console.log("ez a függvény km: "+km);
    return fe * (ho / km);
    
    
    
}
let hosszmertek = "cm";
let sugarmertek = "cm"
let hossz = 20000;
let sugar = 0.25;
let a = "réz";
let anyagR = anyagEllenallas(hossz,hosszmertek,sugar,sugarmertek,a);
console.log(`Az ${a}drót ellenállása: `+anyagR.toFixed(3));




app.halozat = function(){
    return {
    hossz : 0,
    sugar : 0,
    me : "cm",
    anyag: "réz",
    fl : function(){
        if (this.anyag == "réz") {
            return 0.017;
        }else if (this.anyag == "ezüst") {
            return 0.016;        
        }else if (this.anyag == "arany") {
            return 0.023;    
        }else if (this.anyag == "alumínium") {
            return 0.028;        
        }else if (this.anyag == "higany"){
            return 0.958;
        }
    },
    szamol : function() {
          //fajlagos ellenállás lekérdezése
        let fe = this.fl();
        console.log('Ez az fe: '+fe);
        //mértékegység ellenőrzés
        //mértékegység átváltás
        if (this.me == "mm") {
            this.hossz = this.hossz/1000;
            this.sugar = this.sugar/1000;
        }else if (this.me == "m") {
            this.hossz = this.hossz*1;
            this.sugar = this.sugar*1;            
        }else if (this.me == "cm") {
            this.hossz = this.hossz/100;
            this.sugar = this.sugar/100;            
        }else if (this.me == "km") {
            this.hossz = this.hossz*1000;
            this.sugar = this.sugar*1000;
        }else{
            alert("Ismeretlen hosszmérték: "+hm);
            return "";
        }
        //fajlagos ellenállás számítás
        let km = this.sugar*this.sugar*Math.PI;
        console.log("Ez a km: "+km);
        console.log(`A ${this.anyag}vezető ellenállása: `+(fe * (this.hossz / km))+" Ohmméter");        
    }
    };
}

let h1 = app.halozat();
h1.hossz = 20000;
h1.sugar = 0.25;
h1.szamol();
//halozat.hossz = 20000;
//halozat.sugar = 0.25;
//halozat.szamol();


//Anyagellenállás rendbetevése
//Másik függvény, anyagnévre fajlagos állandó

class szamologep{
    constructor(){
        console.log("A konsztruktor lefutott");
    }
    gombok = ["0","1","2","3","4","5","6","7","8","9","+","-","*","=","del"]
    gyarto = "siemens"
    tipus = "q465"
    kijelzo = "kvarc"
    ar = 20000
    penznem = "forint"
    gyartasiEv = "1998"
    ismerteto = "egy 1998-ban gyártott, meglepően drága számológép"
    kinyomtat(){
        console.log(`a számológép típusa: ${this.tipus}`);
        console.log(`a számológép gyártója: ${this.gyarto}`);
        console.log(`a számológép kijelzője: ${this.kijelzo}`);
        console.log(`a számológép ára: ${this.ar} ${this.penznem}`);
        console.log(`a számológép gyártási éve: ${this.gyartasiEv}`);
        console.log(`a számológép leírása: ${this.ismerteto}`);
    }
}
let sz1 = new szamologep();
sz1.ar = 15000;
sz1.penznem = "peso";
sz1.ismerteto = "egy 1998-ban gyártott, 15 ezer pesoba kerülő számológép";
sz1.kinyomtat();

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

function hello(nm="World"){
    console.log("Hello "+nm);
    return 100;
};
let result = hello("Pista");
console.log("result: "+result);

const hello2 = nm => console.log("hello "+nm); 
hello2("Pista");






















