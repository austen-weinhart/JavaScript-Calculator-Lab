/////////////////////////////////////////
//Operation Functions
/////////////////////////////////////////

currentValue = "";
document.getElementById("display").value = currentValue;

myArray = [];

function plus(x,y) {
  currentValue = (+x) + (+y);
  document.getElementById("display").value = currentValue;
}


function subtraction(x,y) {
 currentValue = (x - y);
  document.getElementById("display").value = currentValue;
}

function multiplication(x,y) {
  currentValue = (x * y);
  document.getElementById("display").value = currentValue;
}

function division(x,y) {
  currentValue = (x / y);
  document.getElementById("display").value = currentValue;
}

/////////////////////////////////////////
//Number Buttons
/////////////////////////////////////////
var one = document.getElementById("one");
one.addEventListener("click", function(){
  function newValue() {
    currentValue += "1";
    document.getElementById("display").value = currentValue;
  }
  newValue();
});

var two = document.getElementById("two");
two.addEventListener("click", function(){
  function newValue() {
    currentValue += "2";
    document.getElementById("display").value = currentValue;
  }
  newValue();
});

var three = document.getElementById("three");
three.addEventListener("click", function(){
  function newValue() {
    currentValue += "3";
    document.getElementById("display").value = currentValue;
  }
  newValue();
});

var four = document.getElementById("four");
four.addEventListener("click", function(){
  function newValue() {
    currentValue += "4";
    document.getElementById("display").value = currentValue;
  }
  newValue();
});

var five = document.getElementById("five");
five.addEventListener("click", function(){
  function newValue() {
    currentValue += "5";
    document.getElementById("display").value = currentValue;
  }
  newValue();
});

var six = document.getElementById("six");
six.addEventListener("click", function(){
  function newValue() {
    currentValue += "6";
    document.getElementById("display").value = currentValue;
  }
  newValue();
});

var seven = document.getElementById("seven");
seven.addEventListener("click", function(){
  function newValue() {
    currentValue += "7";
    document.getElementById("display").value = currentValue;
  }
  newValue();
});

var eight = document.getElementById("eight");
eight.addEventListener("click", function(){
  function newValue() {
    currentValue += "8";
    document.getElementById("display").value = currentValue;
  }
  newValue();
});

var nine = document.getElementById("nine");
nine.addEventListener("click", function(){
  function newValue() {
    currentValue += "9";
    document.getElementById("display").value = currentValue;
  }
  newValue();
});

var zero = document.getElementById("zero");
zero.addEventListener("click", function(){
  function newValue() {
    currentValue += "0";
    document.getElementById("display").value = currentValue;
  }
  newValue();
});

var decimal = document.getElementById("decimal");
decimal.addEventListener("click", function(){
  function newValue() {
    currentValue += ".";
    document.getElementById("display").value = currentValue;
  }
  newValue();
});

/////////////////////////////////////////
//Operator Buttons
/////////////////////////////////////////
var divide = document.getElementById("divide");
divide.addEventListener("click", function(){
  myArray.push(currentValue);
  myArray.push("/");
  currentValue = "";
  document.getElementById("display").value = currentValue;
});

var multiply = document.getElementById("multiply");
multiply.addEventListener("click", function(){
  myArray.push(currentValue);
  myArray.push("*");
  currentValue = "";
  document.getElementById("display").value = currentValue;
});

var subtract = document.getElementById("subtract");
subtract.addEventListener("click", function(){
  myArray.push(currentValue);
  myArray.push("-");
  currentValue = "";
  document.getElementById("display").value = currentValue;
});

var addition = document.getElementById("addition");
addition.addEventListener("click", function(){
  myArray.push(currentValue);
  myArray.push("+");
  currentValue = "";
  document.getElementById("display").value = currentValue;
});

/////////////////////////////////////////
//Solving the Operation
/////////////////////////////////////////

var equals = document.getElementById("equals");
equals.addEventListener("click", function(){
  myArray.push(currentValue);
  currentValue = "";
  if(myArray[1] === "/") {
    division(myArray[0],myArray[2]);
  } else if(myArray[1] === "*") {
    multiplication(myArray[0],myArray[2]);
  } else if(myArray[1] === "+") {
    plus(myArray[0], myArray[2]);
  } else if(myArray[1] === "-") {
    subtraction(myArray[0],myArray[2]);
  } else {
    document.getElementById("display").value = "ERROR";
    currentValue = "";
    myArray = [];
  }
  currentValue = "";
  myArray = [];
});

/////////////////////////////////////////
//Clear
/////////////////////////////////////////

var clear = document.getElementById("clear");
clear.addEventListener("click", function(){
  currentValue = "";
  myArray = [];
  document.getElementById("display").value = currentValue;
});