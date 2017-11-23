const HOURBAND = document.querySelector("#hr");
const MINBAND = document.querySelector("#min");
const SECBAND = document.querySelector("#sec");

function meriGhadi(){
var date = new Date();
console.log(date);
let hr = date.getHours();
let min = date.getMinutes()
let sec = date.getSeconds();
console.log("hour " + hr + " minutes " + min + " seconds " + sec);

let hrPosition = (hr*360/12)+(min*(360/60)/12);
let minPosition = (min*360/60)+(sec*(360/60)/60);
let secPosition =sec*360/60;

HOURBAND.style.transform = "rotate( " + hrPosition + "deg)";
MINBAND.style.transform = "rotate( " + minPosition + "deg)";
SECBAND.style.transform = "rotate(" + secPosition + "deg)";
}

var interval =setInterval(meriGhadi, 1000);
