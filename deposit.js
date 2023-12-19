// document.getElementById('deposit-btn').addEventListener('click', function(){
//   const newDepositAmount = getInputValueById('deposit-amount');

//   //previous deposit Balance
//   const previousDepositBalance = getPreviousById('current-deposited-balance');
//   const totalDepositBalance = newDepositAmount + previousDepositBalance;
//   setTotalValueById('current-deposited-balance', totalDepositBalance);


//   //previous total Balance
//   const previousTotalBalance = getPreviousById('current-balance');
//   const totalBalance = newDepositAmount + previousTotalBalance;
//   setTotalValueById('current-balance', totalBalance);
// })


document.getElementById('deposit-btn').addEventListener('click', function(){
  const depositValue = getTransectionById('deposit-amount');
  // console.log(depositValue);

  const previousDepositedBalance = getPreviousById('current-deposited-balance');
  const totalDeposit = previousDepositedBalance + depositValue;
  setTotalById('current-deposited-balance', totalDeposit)

  const previousTotalBalance = getPreviousById('current-balance');
  const totalBalance = previousTotalBalance + depositValue;
  setTotalById('current-balance', totalBalance)

})