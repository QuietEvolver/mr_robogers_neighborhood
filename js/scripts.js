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

let inputValueNumberBeep1 =  "1";
let msg1 = "";
function inputValueNumberBeepFx1(inputValueNumberBeep1){
  parseInt(inputValueNumberBeep1);
  if (1 === inputValueNumberBeep1){
      console.log("Beep!: ", inputValueNumberBeep1);
      msg1 = "Beep!"
    return msg1;
  }
}

let inputValueNumberBoop2 =  "2";
let msg2 = "";
function inputValueNumberBoopFx2(inputValueNumberBoop2){
  parseInt(inputValueNumberBoop2);
  if (1 === inputValueNumberBoop2) {
    msg2 = "Beep!"
    return msg2;
  }
  else if (2 === inputValueNumberBoop2){
      console.log("Boop!: ", inputValueNumberBoop2);
      msg2 = "Boop!"
    return msg2;
  }
}

let three = 3
let msg3 = "";
switch(three) {
  case 1:
    msg3 = "Beep!"
    break;
  case 2:
    msg3 = "Boop!"
    break;
  case 3:
    msg3 = "Won't you be my neighbor?"
    break;
}