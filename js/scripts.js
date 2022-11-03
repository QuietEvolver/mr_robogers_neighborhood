
function inputValue(input0){
  return input0;
} 

function inputValueNumber0(inputValue0){
 parinputValue0
  if (0 >= inputValue0 <= 9){
    return inputValue0;
  }
} 

function inputValueNumberFx(inputValueNumber){
  let inputValue =  "0";
  let inputvalueNumber = parseInt(inputValueNumber);
  if (0 >= inputValueNumber <= 9){
    return inputValueNumber;
  }
}

function inputValueNumberBeepFx1(){
  let msg1 = "";
  let inputValueNumberBeep1;
  parseInt(inputValueNumberBeep1);
  if (inputValueNumberBeep1 === 1){
      msg1 = "Beep!"
    return msg1;
  }
}

function inputValueNumberBoopFx2(){
  let inputValueNumberBoop2 =  "2";
  let msg2 = "";
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

let inputArray7 = [3,8]
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

let input8 = "321,803"; 
let inputArray8 = [3,2,1,8,0,3];
let msg8 = "";
function inputArray8(inputArray8) {
  if(inputArray8.includes(3)){
     msg8 = "Won't you be my neighbor?";
     return msg8;
  } else if (inputArray8.includes(2)){
       msg8 = "Boop!";
       return msg8;
   } else if(inputArray8.includes(1)){
       msg8 = "Beep!";
       return msg8;  
   } else {
       console.log("Outside", inputArray8);
       msg8 = "Outside?";
       return msg8;
   }
 }


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
  let messageOut = "";
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

  /* // this works in console (built off isNumber7(inputArray7))
  // let indexStr = ""
  //  indexStrArr = Array.from(indexStr)
  // let messageOut = "";   
      function isANumberSplitEvaluator(indexStrArr) {
      if(indexStrArr===(3)){  //SPACING?
         messageOut = "Won't you be my neighbor?";
         return messageOut;
      } else if (indexStrArr===(2)){
           messageOut = "Boop!";
           return messageOut;
       } else if(indexStrArr===(1)){
           messageOut = "Beep!";
           return messageOut;  
       } else {
           console.log("CL: Outside4+", indexStrArr);
           let messageOut = "Msg: Outside?";
           return messageOut;
       }
     }
  isANumberSplitEvaluator();
*/

  const output = document.getElementById("output").innerText = messageOut;
  document.getElementById("output").removeAttribute("class", "hidden");
}

window.addEventListener("load", function(){
  const form = document.querySelector("form#intake-form").addEventListener("submit", handleFormSubmission);
});