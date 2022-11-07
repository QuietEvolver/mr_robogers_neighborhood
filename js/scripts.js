// Buisiness Logic 

function beepBoop(e, incoming){
  let input = [incoming, 1]; // 5
  let inputValue = [];
  let message = "";
  for( let i = 0; i <= input[0]; i += input[1]){
    console.log(i);
    inputValue.push(i);
    console.log("inputValue", inputValue);
    for (let input =0; input <inputValue[0].length; input++){
      if (1 === input) {
        message = "Beep!";
          console.log("CL: Beep!");
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
      message = "Outside?";
          console.log("Outside?");
      return message;
      }
    }
  }  
  // e.preventDefault();
}

// // fx any(){return Array.from(String(num), Number)};
// (function numberNeighborhoodMessage(){
//   let i  = "3";
//   let message = "";
//   let input = parseInt(i);
//   if (1 === input) {
//     message = "Beep!";
//       console.log("CL: Beep!");
//     return message;
//   }
//   else if (2 === input){
//       console.log("Boop!: ", input);
//       message = "Boop!"
//     return message;
//   }
//   else if ( 3 === input){
//   message = "Won't you be my neighbor?"
//   return message;
//   } else {
//   message = "Outside?";
//       console.log("Outside?");
//   return message;
// }
// })();

function handleFormSubmission(e){
  e.preventDefault();
      
  const input = document.getElementById("input-value-1").value;
  let incoming = parseInt(input);
  console.log("input & incmonig parse: ", input, incoming); 

  beepBoop(e, incoming); 

  // let output = document.getElementById("output").innerText = messageOut;
  document.getElementById("output").removeAttribute("class", "hidden");
  
}

window.addEventListener("load", function(){
document.querySelector("form#intake-form").addEventListener("submit", handleFormSubmission);
});