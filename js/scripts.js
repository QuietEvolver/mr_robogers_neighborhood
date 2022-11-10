// Buisiness Logic 

function beepBoop(input) {
  // let input = [12, 1];
  let countUpByIntake = [];
  console.log("countUpByIntake ", countUpByIntake);
  for (let i = 0; i <= input[0]; i += input[1]) { 
    countUpByIntake.push(i);
  }
  let cubiSplit = countUpByIntake.toString().cubiSplitSTR.split(",");
  return cubiSplit;
}