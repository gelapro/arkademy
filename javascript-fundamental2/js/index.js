//length
var txt = "qwerty";
document.getElementById('name').innerHTML = txt.length;

//indexOf
var txt = "I am seeking for a hot girl";
document.getElementById('name').innerHTML = txt.indexOf('hot');

//subtrc
var txt = "apple, Microsoft, linux";
document.getElementById('name').innerHTML = txt.substr(0, 5);

//replace
var txt= "please visit us";
document.getElementById('name').innerHTML = txt.replace("us", "kami");

//toUpperCase
var txt = "please visit us";
document.getElementById('name').innerHTML = txt.toUpperCase();

//toLowerCase
var txt = "Please visit us";
document.getElementById('name').innerHTML = txt.toLowerCase();

//charAt
var txt = "please visit us";
document.getElementById('name').innerHTML = txt.charAt(5);

//split
var txt = "a,b,c,d";
var txtArray = txt.split(",");
document.getElementById('name').innerHTML = txtArray[3];

//call string like array
txt = "a,b,c,d";
document.getElementById('name').innerHTML = txt[3];