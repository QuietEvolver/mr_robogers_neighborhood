// Buisiness Logic 

function beepBoop(input) {

  let countUpByIntake = [];
  console.log("countUpByIntake ", countUpByIntake);
  for (let i = 0; i <= input; i++) { 
    console.log("i: ", i, i.toString(), i.toString().includes("1")  ); 
    if (i.toString().includes("3")){
      console.log("i3: ", i, i.toString(), i.toString().includes("3")  ); 
      countUpByIntake.push("WYBMN?")
    } else if (i.toString().includes("2")  ){
      console.log("i2: ", i, i.toString(), i.toString().includes("2")  ); 
      countUpByIntake.push("Boop!?")
    } else if (i.toString().includes("1")  ){
      console.log("i1: ", i, i.toString(), i.toString().includes("1")  ); 
      countUpByIntake.push("Boop!?")
    }  
      else{ 
      countUpByIntake.push(i);
    }
  }
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