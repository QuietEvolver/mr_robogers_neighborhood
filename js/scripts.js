// Buisiness Logic 


(function beepBoop(){
  let input = [5, 1];
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
})();


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
