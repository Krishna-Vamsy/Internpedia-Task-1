let screen = document.getElementById('screen');
let currentInput = '';

function appendToScreen(value) {
  if (value === '/' || value === '*' || value === '-' || value === '+') {
    if (currentInput === '' || isNaN(currentInput[currentInput.length - 1])) return;
  }
  
  currentInput += value;
  screen.textContent = currentInput;
}

function clearScreen() {
  currentInput = '';
  screen.textContent = '0';
}

function calculate() {
  if (currentInput === '' || isNaN(currentInput[currentInput.length - 1])) return;
  let result = eval(currentInput);
  screen.textContent = result;
  currentInput = result.toString();
}
