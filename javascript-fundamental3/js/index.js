var number = 12.356;

//to String
document.getElementById('name').innerHTML = number.toString();

//tofixed
document.getElementById('name').innerHTML = number.toFixed();

//toFixed
document.getElementById('name').innerHTML = number.toFixed(2);

//Global Method
var txtNumber = "12.356";
document.getElementById('name').innerHTML = typeof Number(txtNumber);

document.getElementById('name').innerHTML = parseInt(txtNumber);