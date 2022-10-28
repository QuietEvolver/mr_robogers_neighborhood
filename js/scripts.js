let input = "x"
let inputValue; 
function inputValue(input){
  console.log("input value: ", input);
  return input;
}

function inputValueNumber(inputValue){
  if (0 >= inputValue <= 9){
    console.log("This is a number: ", inputValue);
    return inputValue;
  }
}

let inputValueNumber =  "0";
parseInt(inputValueNumber);
function inputValueNumberFx(inputValueNumber){
  if (0 >= inputValueNumber <= 9){
    console.log("This is a number: ", inputValueNumber);
    return inputValueNumber;
  }
}

let inputValueNumberBeep =  "1";
let msg = "";
parseInt(inputValueNumberBeep);
function inputValueNumberBeepFx(inputValueNumberBeep){
  if (1 === inputValueNumberBeep){
    console.log("Beep!: ", inputValueNumberBeep);
    msg = "Beep!"
    return msg;
  }
}

