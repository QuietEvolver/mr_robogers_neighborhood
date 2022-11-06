// Buisiness Logic 

(function inputValueNumber0(){

  const input = "2022";
  const inputValue = input.split('');
  let inputValue0 = parseInt(inputValue);
    console.log("inputValueSTR", inputValue); 
    console.log("inputValue0INT", inputValue0); 
  if (1 === inputValue0 || inputValue0 <= 9){
    return "Beep!";
  }
  else{ 
    let msg = "Outside?";
    return msg;
  }
})();
