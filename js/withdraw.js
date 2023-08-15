// step-1
document.getElementById('btn-withdraw').addEventListener('click', function () {
  // step-2
  const withdrawField = document.getElementById('withdraw-field');
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);
 // step-7
  withdrawField.value = '';
 
 
  if (isNaN(newWithdrawAmount)) {
    alert('Please provide a valid number');
    return;
}



// step-3
  const withdrawTotalElement = document.getElementById('withdraw-total');
  const priviousWithdrawTotalString = withdrawTotalElement.innerText;
  const priviousWithdrawTotal = parseFloat(priviousWithdrawTotalString);
  // step-4
  const currentWithdrawTotal = priviousWithdrawTotal + newWithdrawAmount;
  withdrawTotalElement.innerText = currentWithdrawTotal; 
// step-5
  const balanceTotalelement = document.getElementById('balance-total');
  const previousBalanceTotalString = balanceTotalelement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);
 
  // step-6
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  balanceTotalelement.innerText = newBalanceTotal;
  
})