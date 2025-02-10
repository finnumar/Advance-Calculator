let memory = 0;
let isDegrees = true;

function appendToDisplay(value) {
  const display = document.getElementById('display');
  display.value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function backspace() {
  const display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}

function toggleSign() {
  const display = document.getElementById('display');
  if (display.value.charAt(0) === '-') {
    display.value = display.value.slice(1);
  } else {
    display.value = '-' + display.value;
  }
}

function calculate() {
  try {
    const display = document.getElementById('display');
    let expression = display.value;
    expression = expression.replace(/sin\(/g, isDegrees ? 'sin(' + 'deg' : 'sin(');
    expression = expression.replace(/cos\(/g, isDegrees ? 'cos(' + 'deg' : 'cos(');
    expression = expression.replace(/tan\(/g, isDegrees ? 'tan(' + 'deg' : 'tan(');
    expression = expression.replace(/ln\(/g, 'log(');
    expression = expression.replace(/lg\(/g, 'log10(');
    expression = expression.replace(/sqrt\(/g, 'sqrt(');
    expression = expression.replace(/\^/g, '**');
    const result = eval(expression);
    display.value = result;
  } catch (error) {
    display.value = 'Error';
  }
}

function memoryClear() {
  memory = 0;
}

function memoryAdd() {
  const display = document.getElementById('display');
  memory += parseFloat(display.value);
}

function memorySubtract() {
  const display = document.getElementById('display');
  memory -= parseFloat(display.value);
}

function memoryRecall() {
  document.getElementById('display').value = memory;
}

function setDegrees() {
  isDegrees = true;
}

function setRadians() {
  isDegrees = false;
}
