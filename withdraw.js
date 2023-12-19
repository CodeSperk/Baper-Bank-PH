// document.getElementById('withdraw-btn').addEventListener('click', function(){
//   const newWithdrawAmount = getInputValueById('withdraw-amount')


//   //previous deposit Balance
//   const previousWithdrawnBalance = getPreviousById('current-withdrawn-balance');
//   const totalWithdrawnBalance = newWithdrawAmount + previousWithdrawnBalance;
//   setTotalValueById('current-withdrawn-balance', totalWithdrawnBalance);

//   //previous total Balance
//   const previousTotalBalance = getPreviousById('current-balance');
//   const totalBalance = previousTotalBalance - newWithdrawAmount;
//   setTotalValueById('current-balance', totalBalance);
// })

document.getElementById('withdraw-btn').addEventListener('click', function(){
  const depositValue = getTransectionById('withdraw-amount');
  // console.log(depositValue);

  const previousWithdrawnBalance = getPreviousById('current-withdrawn-balance');
  
  const totalWithdrawn = previousWithdrawnBalance + depositValue;
  
 


  const previousTotalBalance = getPreviousById('current-balance');
 
  if(depositValue < previousTotalBalance){
    const totalBalance = previousTotalBalance - depositValue;
    setTotalById('current-balance', totalBalance);
    setTotalById('current-withdrawn-balance', totalWithdrawn);
  }else{
    alert('insufficient Balance')
  }
  
})