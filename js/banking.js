function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputAmountText = inputField.value;
  const amountValue = parseFloat(inputAmountText);
  inputField.value = "";
  return amountValue;
}
function updateTotalField(totalFieldId, amount) {
  const totalElement = document.getElementById(totalFieldId);
  const totalText = totalElement.innerText;

  const previousTotal = parseFloat(totalText);
  totalElement.innerText = previousTotal + amount;
}

document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    // const depositInput = document.getElementById("deposit-input");
    // const depositAmountText = depositInput.value;
    // const nesDepositAmount = parseFloat(depositAmountText);
    const depositAmount = getInputValue("deposit-input");

    // const depositTotal = document.getElementById("deposit-total");
    // const depositAmountText = depositTotal.innerText;

    // const previousDepositAmount = parseFloat(depositAmountText);
    // depositTotal.innerText = previousDepositAmount + depositAmount;
    updateTotalField("deposit-total", depositAmount);

    // update account balance
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + parseFloat(depositAmount);
    balanceTotal.innerText = newBalanceTotal;
  });

document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    // const withdrawInput = document.getElementById("withdraw-input");
    // const withdrawAmountText = withdrawInput.value;
    // const withdrawAmount = parseFloat(withdrawAmountText);
    // console.log(withdrawAmount);
    const withdrawAmount = getInputValue("withdraw-input");

    // const withdrawTotal = document.getElementById("withdraw-total");
    // const previousWithdrawText = withdrawTotal.innerText;
    // const previousWithdrawTotal = parseFloat(previousWithdrawText);

    // withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;
    updateTotalField("withdraw-total", withdrawAmount);
    const balanceTotal = document.getElementById("balance-total");
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - withdrawAmount;
    balanceTotal.innerText = newBalanceTotal;
    // withdrawInput.value = "";
  });
