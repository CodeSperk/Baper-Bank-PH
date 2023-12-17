//common function to get both of deposit and withdraw input value;
function getInputValueById(inputFieldId){
  const inputField = document.getElementById(inputFieldId);
  const inputStringValue = inputField.value;
  const inputValue = parseFloat(inputStringValue);
  inputField.value = "";
  return inputValue;
}

//function to get deposit, withdraw and total previous balance
function getPreviousById(elementId){
  const balanceField = document.getElementById(elementId);
  const previousStringBalance = balanceField.innerText;
  const previousBalance = parseFloat(previousStringBalance);
  return previousBalance;
}

//common function to set total deposit, withdraw and total value
function setTotalValueById(elementId, newValue){
  const element = document.getElementById(elementId);
  element.innerText = newValue;
}