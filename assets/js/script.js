var currentNumberWrapper = document.getElementById("currentNumber")
var currentNumber = 0

function increment() {
  if (currentNumber < 10 & currentNumber > 0) {
  currentNumber = currentNumber + 1;
  currentNumberWrapper.innerHTML = currentNumber;
  currentNumberWrapper.style.color = "rgb(116, 7, 240)"
}   else if (currentNumber < 10){
  currentNumber = currentNumber + 1;
  currentNumberWrapper.innerHTML = currentNumber
}
}

function decrement() {
  currentNumber = currentNumber - 1;
  currentNumberWrapper.innerHTML = currentNumber;
  if (currentNumber < 0) {
    currentNumberWrapper.style.color = "#D7DF01"    
  }
}

