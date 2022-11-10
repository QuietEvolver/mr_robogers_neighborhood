// Buisiness Logic 

function beepBoop(input) {

  let countUpByIntake = [];
  console.log("countUpByIntake ", countUpByIntake);
  for (let i = 0; i <= input; i++) { 
    countUpByIntake.push(i);
  }
  let cubiSplit = countUpByIntake.toString().split(" ");
  let cubiTemp = [];
  let finalArr = [];
  console.log("cubiSplit: ", cubiSplit); 
  console.log("type of cubiSplit: ", typeof cubiSplit); 
  let cubiSplitStrMapToNumber = [...String(cubiSplit)].map(Number);
  console.log("cubiSplitStrMapToNumber: ", cubiSplitStrMapToNumber);
  let cubiStr = cubiSplitStrMapToNumber.toString(); 
  console.log("cubiStr: ", cubiStr);
  // for ( let i = 0; i<=cubiSplitStrMapToNumber; i++){
  //   if(i=!NaN && i===3){
  //       finalArr.push("Won't you be my neighbor?");
  //   } else if(i === 2){
  //       finalArr.push("Boop!");
  //   } else if(i=!NaN && i === "1"){
  //       finalArr.push("Beep!");
  //   } else ( finalArr.push(i) );
  //     console.log("i", i);
  //     console.log("finalArr", finalArr);
  // }
}

// UI Logic

function handleFormSubmission(e){
  e.preventDefault();
  const input = parseInt(document.getElementById("input-value-1").value);
  console.log("input: ", input); 
  // const output = document.getElementById("output").innerText = messageOut;
  beepBoop(input);
  document.getElementById("output").removeAttribute("class", "hidden");
  document.getElementById("output").innerText = output;

}

window.addEventListener("load", function(){
// const form = 
document.querySelector("form#intake-form").addEventListener("submit", handleFormSubmission);
});