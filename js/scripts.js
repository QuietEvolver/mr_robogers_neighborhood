// test 1
let input0 = "x"
let inputValue0; 
function inputValue(input0){
  return input0;
}

// test 2
function inputValueNumber0(inputValue0){
  if (0 >= inputValue0 <= 9){
    return inputValue0;
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
let inputArray8 = [1,8,3]
const inputUINumber8 = isANumber8(inputArray8);
let msg8 = "";
function isANumber8(inputArray8, msg) {
  if(inputArray8.includes(3)){
    let msg8 = "msg8 t-3: wont ub my neighbor?";
    return msg8;
  } else if (inputArray8.includes(2)){
    return true;
  } else if(inputArray8.includes(1)){
        return true;
  } else if (inputArray8.includes(9)){
    return false;
  }
}

// Test 7
let inputArray7 = [3,8,]
 let msg7 = "";
 function isANumber7(inputArray7) {
   if(inputArray7.includes(3)){
      msg7 = "Won't you be my neighbor?";
      return msg7;
   } else if (inputArray7.includes(2)){
        msg7 = "Boop!";
        return msg7;
    } else if(inputArray7.includes(1)){
        msg7 = "Beep!";
        return msg7;  
    } else {
        console.log("Outside", inputArray7);
        let msg7 = "Outside?";
        return msg7;
    }
  }
 const outputMsg = isANumber7(inputArray7);
 outputMsg;

//PSEUDOCODE
// let userInput = doc.value

// let intake = "3,444";
// let inputArray = Array.from(intake);
// let msg = "";
// function isMyNeighborhoodMessage(inputArray) {
//   if(inputArray.includes(3)){
//     msg = "Won't you be my neighbor?";
//         console.log("t-3");
//     return msg;
//   // return inputNumber;
//   } else if (inputArray.includes(2)){
//       console.log("t-2");
//       msg = "Boop!"
//     return msg;
//   } else if(inputArray.includes(1)){
//         console.log("t-1");
//       msg = "Beep!"
//         return msg;
//   // return inputNumber;
//   } else if (!((inputArray===1)&&(inputArray===2)&&(inputArray===3))){
//       console.log("Outside", inputArray);
//     let msg = "Outside?";
//       return msg;
//   }
// }
// const outputUIMsg = isMyNeighborhoodMessage(inputArray);
// outputUIMsg;

// let intake = "3,444";
// // *not* to come first
// let inputArray = Array.from(intake);
// let msg = "";
// function isMyNeighborhoodMessage(inputArray) {
//       console.log("CLfx: inputArray", inputArray);
//   if (!((inputArray.includes(1))&&(inputArray.includes(2))&&(inputArray.includes(3)))){
//     let msg = "Outside?";
//       return msg;
//   }else if(inputArray.includes(3)){
//     msg = "Won't you be my neighbor?";
//         console.log("t-3");
//     return msg;
//   // return inputNumber;
//   } else if (inputArray.includes(2)){
//       console.log("t-2");
//       msg = "Boop!"
//     return msg;
//   } else if(inputArray.includes(1)){
//         console.log("t-1");
//       msg = "Beep!"
//         return msg;
//   // return inputNumber;
//   } 
// }
// // console.log(inputArray);
// // const outputUIMsg = isMyNeighborhoodMessage(inputArray);
// // outputUIMsg;
// isMyNeighborhoodMessage();

let input = "";
let message = "";
function numberNeighborhoodMessage(input){
    parseInt(input);
    if (1 === input) {
      message = "Beep!"
      return message;
    }
    else if (2 === input){
        console.log("Boop!: ", input);
        message = "Boop!"
      return message;
    }
    else if ( 3 === input){
    message = "Won't you be my neighbor?"
    return message;
    } else {
    message = "Outside?"
    return message;
  }
}

function handleFormSubmission(e){
  e.preventDefault();
      
  const input = document.getElementById("input-value-1").value;
  console.log("input: ", input); // ['456']
/* returns indexes only.
for (let index = 0; index < usingSplit.length; index++) {
  console.log(index);
}*/ 
  const usingSplit = input.split(''); // (3) ['4', '5', '6']
  // usingSplit.forEach(function(i){
  //   return i;
  // });
  usingSplit.forEach(function(i){
    console.log(i);
    let messageOut = "";
      switch(true) {
        case 3:
          messageOut = "Won't you be my neighbor?" 
          break;
        case 2:
          messageOut = "Boop!"
          break;
        case 1:
          messageOut = "Beep!"
          break;
        default: 
          messageOut = "Outside?"
      }
    console.log(i, messageOut);
    
  });

  // let inputArr = Array.from(input);
  // let inputtedNumber = []; // array to push to
  // inputtedNumber.push(input.splice());
  // console.log(inputtedNumber);
  // turn into an arr
  // for each & set orig arr to test 0-9 thru branching
  // for loop
  // function numInputs(){
  // let numberArray = [];
//   for (let i=0; i<=inputParse; i++){
//     numberArray.push(i);
//   }
//   return i
// }
  // let inputParse = parseInt(input);
  // let messageOut = "";
  //   switch(inputParse) {
  //     case 3:
  //       messageOut = "Won't you be my neighbor?" 
  //       break;
  //     case 2:
  //       messageOut = "Boop!"
  //       break;
  //     case 1:
  //       messageOut = "Beep!"
  //       break;
  //   }
    const output = document.getElementById("output").innerText = messageOut;
    document.getElementById("output").removeAttribute("class", "hidden");

    // function numberNeighborhoodMessage(input){
  //     parseInt(input);
  //     if (1 === input) {
  //       message = "Beep!"
  //       return message;
  //     }
  //     else if (2 === input){
  //         console.log("Boop!: ", input);
  //         message = "Boop!"
  //       return message;
  //     }
  //     else if ( 3 === input){
  //     message = "Won't you be my neighbor?"
  //     return message;
  //     } else {
  //     message = "Outside?"
  //     return message;
  //   }
  // }

}

window.addEventListener("load", function(){
  const form = document.querySelector("form#intake-form").addEventListener("submit", handleFormSubmission);
});