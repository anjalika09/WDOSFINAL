
const name = document.getElementById("name");
const address = document.getElementById("address");
const number = document.getElementById("number");
const cname = document.getElementById("cname");
const cnumber = document.getElementById("cnumber");
const caddress = document.getElementById("caddress");
const btnaddfav= document.getElementById("addfav");
const btnorderfav = document.getElementById("orderfav");

btnaddfav.addEventListener("click",addentry);
let jsonstore;
btnorderfav.addEventListener("click",showentry);
function showentry(){
parsejson=JSON.parse(localStorage.getItem('jsonstore'));
coc.innerText="The cost: "+parsejson.total;
co.innerText=parsejson.name +" " + parsejson.number +" " + parsejson.address +" "+ parsejson.roomt +" "+ parsejson.mealt +" "+ parsejson.extras;
}

const btnorder = document.getElementById("order");
btnorder.addEventListener("click",order)
function order(){
 alert("Order Successfully Places!"); 
cname.innerText=null; 
cnumber.innerText=null;
caddress.innerText=null; 
co.innerText=null;
coc.innerText=`0`;
ooc.innerText=`0`;
oo.innerText=null;
}

const customer = document.getElementById("customer");
customer.addEventListener("click",details);
function details(){
  cname.innerText=("Name : "+ name.value); 
  cnumber.innerText=("Number : "+ number.value); 
  caddress.innerText=("Address : "+ address.value); 
}



let mealt;
let b;
const mealtype = document.getElementById("mealtype");
mealtype.addEventListener("click",meal);
function meal(){
if (document.getElementById("BB").checked){
    mealt=`BB`
 b=1500;
}
if (document.getElementById("HB").checked){
    mealt=`HB`
b=3500;
}
if (document.getElementById("FB").checked){
    mealt=`FB`
 b=5000;
}
coc.innerText=`Current Cost:  ${a+b}`;
co.innerText=`room selected: ${roomt}. meal type: ${mealt}.`
}

let d=0;
let e=0;
let f=0;
let ototal=0;
const extras = document.getElementById("extras");
extras.addEventListener("click",calextra);
function calextra(){
  if (document.getElementById("cake on arrival").checked==true){
    d=1000;
  }
  else{
    d=0;
  }
  if (document.getElementById("extra bed").checked==true){
    e=7000;
  }
  else{
    e=0;
  }
  if (document.getElementById("candle light dinner on the first day").checked==true){
    f=5000;
  }
  else{
    f=0;
  }
  coc.innerText=`Current Cost: ${a+b+c+d+e+f}`;
  total=a+b+c+d+e+f;
  ototal=ototal+total;
}

let roomt=null;
let total=0;
let a=0;
const coc = document.getElementById("coc");
const co = document.getElementById("co");
const room = document.getElementById("room");
room.addEventListener("change",room);
function room(){
if (document.getElementById("Standard").checked){
  roomt=`Standard`
  a=10000;
}
if (document.getElementById("Premium").checked){
  roomt=`Premium`
  a=15000;
}
if (document.getElementById("Deluxe").checked){
  roomt=`Deluxe`
  a=20000;
}
if (document.getElementById("Suit").checked){
  roomt=`Suit`
  a=25000;
}

coc.innerText=`Current  Cost is  ${a}`;
co.innerText=`room selected: ${roomt}. `
tm=tm + " " + roomt; 
}

function addentry(){
  const store={
    "name":name.value,
    "number":number.value,
    "address":address.value,
    "roomt":roomt,
    "mealt":mealt,
    "extrass":extras,
    "total":total,
  };
  localStorage.setItem('jsonstore',JSON.stringify(store));
}

const btnaddorder = document.getElementById("addorder");
let g=0;
const ooc= document.getElementById("ooc");
const oo = document.getElementById("oo");
btnaddorder.addEventListener("click",overallorder);
function overallorder(){
g=g+1;
oo.innerText=`Tea Manufacturers selected: ${tm}`
ooc.innerText=`Overall Cost: ${ototal}`
}

let loyalty=0;
const lp=document.getElementById("lp");
const btnCl=document.getElementById("cl");
btnCl.addEventListener("click",calloyalty);
function calloyalty(){
if (g>3){
  loyalty=g*20;
lp.innerText=`Loyalty points earned: ${loyalty}`
}
else{
 lp.innerText=`0`;
}
}
