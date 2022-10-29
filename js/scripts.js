// test 1
let input = "x"
let inputValue; 
function inputValue(input){
  return input;
}

// test 2
function inputValueNumber(inputValue){
  if (0 >= inputValue <= 9){
    return inputValue;
  }
}

// test 3
let inputValueNumber =  "0";
parseInt(inputValueNumber);
function inputValueNumberFx(inputValueNumber){
  if (0 >= inputValueNumber <= 9){
    return inputValueNumber;
  }
}

// test 4
let inputValueNumberBeep1 =  "1";
let msg1 = "";
function inputValueNumberBeepFx1(inputValueNumberBeep1){
  parseInt(inputValueNumberBeep1);
  if (1 === inputValueNumberBeep1){
      msg1 = "Beep!"
    return msg1;
  }
}

// test 5
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

// test 6
let inputThree = parseInt("3");
let msg3 = "";
  switch(inputThree) {
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

// test 9
let msgOutOfRangeTest = "";
let inputValueOutOfRangeTest = "4"
parseInt(inputValueOutOfRangeTest);
(function inputValueOutOfRangeTestFx(inputValueOutOfRangeTest){
  switch(inputValueOutOfRangeTest) {
    case 1:
      msgOutOfRangeTest = "Beep!"
      break;
    case 2:
      msgOutOfRangeTest = "Boop!"
      break;
    case 3:
      msgOutOfRangeTest = "Won't you be my neighbor?"
      break;
    default:
      msgOutOfRangeTest = "Outside?"
      return msgOutOfRangeTest; 
  }
})();

// test 8
let inputArray = [1,8,3]
const inputUINumber = isANumber(inputArray);
let msg = "";
function isANumber(inputArray) {
  if(inputArray.includes(3)){
     msg = "msg t-3";
         console.log("t-3");
    return msg;
  // return inputNumber;
  } else if (inputArray.includes(2)){
      console.log("t-2");
    return true;
  } else if(inputArray.includes(1)){
        console.log("t-1");
        return true;
  // return inputNumber;
  } else if (inputArray.includes(9)){
    return false;
  }
}

let inputArray = [1,2,3,4,5,6,7,8,9,0,1,2,5,6,7,8,]
const inputUINumber = isANumber(inputArray);
function isANumber(inputArray) {
  //if (inputNumber.length === 16 && typeOf(input) !== 'string'){
    // for(let i = -1; i <= inputNumber.length; i+= -1){
      if(inputArray.length === 16){
        console.log('input number = ', inputArray);
        console.log('inputnumber.length = ', inputArray.length);
        return true;
      // return inputNumber;
      } else {
        return false;
      }
    }
  console.log(inputUINumber);

  let inputArray = [1,2,3,4,5,6,7,8,0,1,2,5,6,7,8,]
  const inputUINumber = isANumber(inputArray);
  let msg = "";
  function isANumber(inputArray) {
    if(inputArray.includes(1)){
        console.log("t-1");
      return true;
    // return inputNumber;
    } else if (inputArray.includes(2)){
        console.log("t-2");
      return true;
    } else if(inputArray.includes(3)){
          console.log("t-3");
          return true;
    // return inputNumber;
    } else if (inputArray.includes(9)){
      return false;
    }
  }

//PSEUDOCODE
// let userInput = doc.value

// i get the input and parseInt
// let intake = "";
// let intakeStrToArr = Array.from(intake); // yields array form
// intake.map

// weigh hierarchy 1-3
// output stmts


// TBA: hierarchy 

let input = "";
input = "1"
let message = "";
let inputArray = parseInt(input);
function numberNeighborhoodMessage(inputArray){
  // const array1 = [1, 2, 3];
    if (inputArray.includes(1)){
      console.log(array1.includes(1));
      message = "Beep!"
      return message;
    } else if (inputArray.includes(2)){
      console.log("Boop!: ", input);
      message = "Boop!"
    return message;
    }
    else if ( inputArray.includes(3)){
    message = "Won't you be my neighbor?"
    return message;
    } else {
    message = "Outside?"
  }
} 

// the test for mult  hierarchy dependent nums

// if this number is 1 then boop
// if this number is 1 <= 2 then boop 
// if this number is 1 <= 2 then boop && if 2 <= currentNum:3
// if number is not 1, 2, 3, then outside;

let intake = "3,444";
let intakeStrToArr = Array.from(intake);
intakeStrToArr; 