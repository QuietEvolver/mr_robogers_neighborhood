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



// let inputArray = [1,2,3,4,5,6,7,8,9,0,1,2,5,6,7,8,]
// const isValidCardNumber = isANumber(inputArray);
// function isANumber(inputArray) {
//   //if (inputNumber.length === 16 && typeOf(input) !== 'string'){
//     // for(let i = -1; i <= inputNumber.length; i+= -1){
//       if(inputArray.length === 16){
//         console.log('input number = ', inputArray);
//         console.log('inputnumber.length = ', inputArray.length);
//         return true;
//       // return inputNumber;
//       } else {
//         return false;
//       }
//     }
//   console.log(isValidCardNumber);