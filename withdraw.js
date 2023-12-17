document.getElementById('withdraw-btn').addEventListener('click', function(){
  const newWithdrawAmount = getInputValueById('withdraw-amount')


  //previous deposit Balance
  const previousWithdrawnBalance = getPreviousById('current-withdrawn-balance');
  const totalWithdrawnBalance = newWithdrawAmount + previousWithdrawnBalance;
  setTotalValueById('current-withdrawn-balance', totalWithdrawnBalance);

  //previous total Balance
  const previousTotalBalance = getPreviousById('current-balance');
  const totalBalance = previousTotalBalance - newWithdrawAmount;
  setTotalValueById('current-balance', totalBalance);
})