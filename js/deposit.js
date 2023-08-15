// step-1 add click handler in deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {
  // step-2 get the deposit amount input field
  // For input field use, must be add .value in input field.
  const depositeField = document.getElementById('deposit-field');
  const newDepositAmountString = depositeField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);

  // step-7 deposit clear
  depositeField.value = '';


if (isNaN(newDepositAmount)) {
    alert('Please provide a valid number');
    return;
}


  // step-3 get the current deposit total
  const depositTotalElement = document.getElementById('deposit-total');
  const priviousdepositTotalString = depositTotalElement.innerText;
  const priviousdepositTotal = parseFloat(priviousdepositTotalString);
  depositTotalElement.innerText = newDepositAmount;
// step-4 add number set the total deposit
  const currentDepositTotal = priviousdepositTotal + newDepositAmount;
  // set the deposit total
  depositTotalElement.innerText = currentDepositTotal;
  // step-5 get balance current total
  const totalBalanceElement = document.getElementById('balance-total');
  const previousBalanceTotalString = totalBalanceElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);
  // step-6 calculate current total balance
  const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
  // set the balance total
  totalBalanceElement.innerText = currentBalanceTotal;
  
})