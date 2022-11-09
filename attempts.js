(function anyintake() {
  let input = [12, 1];
  let countUpByIntake = [];
  console.log("countUpByIntake ", countUpByIntake);
  for (let i = 0; i <= input[0]; i += input[1]) { 
    countUpByIntake.push(i);
  }
  let cubiSplitSTR = countUpByIntake.toString();
  let cubiSplit = cubiSplitSTR.split(",");
  let cubiTemp = [];
  let finalArr = [];
  console.log(cubiSplit); 
  for (let i = 0; i <= input[0]; i += input[1]) { 
    let tempCUBI = cubiSplit.split(",");
    for (let j = 0; j <= tempCUBI.length; j++) {
    if (tempCUBI.charAt(i) === 'a') {
      finalArr.push("any");
    // }{
    //   if (tempCUBIs.includes(1)) {
    //     let charStringOut = "any";
    //     countUpByIntake.push(charStringOut);
      } else {
        cubiTemp.push(i);
      }
    }}
})(); //cubiTemp.split not a fxn

// cubSplit.split() not a fxn
(function beepBoop() {
  let input = [12, 1];
  let countUpByIntake = [];
  console.log("countUpByIntake ", countUpByIntake);
  for (let i = 0; i <= input[0]; i += input[1]) { 
    countUpByIntake.push(i);
  }
  let cubiSplitSTR = countUpByIntake.toString();
  let cubiSplit = cubiSplitSTR.split(",");
  let cubiTemp = [];
  let finalArr = [];
  console.log(cubiSplit); 
  for (let i = 0; i <= input[0]; i += input[1]) { 
  //  let tempCUBI = cubiSplit.split(",");
    for (let j = 0; j <= cubiSplit.length; j++) {
    if (cubiSplit.charAt(i) === '1') {
      finalArr.push("any");
    // }{
    //   if (tempCUBIs.includes(1)) {
    //     let charStringOut = "any!";
    //     countUpByIntake.push(charStringOut);
      } else {
        finalArr.push(i);
      }
    }}
})();