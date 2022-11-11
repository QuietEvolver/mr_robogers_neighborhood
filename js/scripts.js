// Buisiness Logic 

function beepBoop(input) {

  let countUpByIntakeMsgOuput = [];
  console.log("countUpByIntakeMsgOuput ", countUpByIntakeMsgOuput);
  for (let i = 0; i <= input; i++) { 
    if (i.toString().includes("3")){
      countUpByIntakeMsgOuput.push(" Won't you be my neighbor? ")
    } else if (i.toString().includes("2")  ){
      countUpByIntakeMsgOuput.push(" Boop! ")
    } else if (i.toString().includes("1")  ){ 
      countUpByIntakeMsgOuput.push(" Beep! ")
    }  
      else{ 
      countUpByIntakeMsgOuput.push(i);
    }
  }
  return countUpByIntakeMsgOuput;
}

// UI Logic

function handleFormSubmission(e){
  e.preventDefault();
  document.querySelector('#output').innerText = null;
  const input = parseFloat(document.getElementById("input-value-1").value);
  console.log("input: ", input); 

  let output = beepBoop(input);
  console.log("output: ", output);

  document.getElementById("output").removeAttribute("class", "hidden");
  document.getElementById("output").innerText = output;

}

window.addEventListener("load", function(){
document.querySelector("form#intake-form").addEventListener("submit", handleFormSubmission);
});