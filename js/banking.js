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

function getCurrentBalance() {
  const balanceTotal = document.getElementById("balance-total");
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);
  return previousBalanceTotal;
}
function updateBalance(amount, isAdd) {
  const balanceTotal = document.getElementById("balance-total");
  const previousBalanceTotal = getCurrentBalance();
  // const balanceTotalText = balanceTotal.innerText;
  // const previousBalanceTotal = parseFloat(balanceTotalText);

  if (isAdd == true) {
    balanceTotal.innerText = previousBalanceTotal + amount;
  } else {
    balanceTotal.innerText = previousBalanceTotal - amount;
  }
}

document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    // const depositInput = document.getElementById("deposit-input");
    // const depositAmountText = depositInput.value;
    // const nesDepositAmount = parseFloat(depositAmountText);
    const depositAmount = getInputValue("deposit-input");
    if (depositAmount > 0) {
      updateTotalField("deposit-total", depositAmount);
      updateBalance(depositAmount, true);
    }

    // const depositTotal = document.getElementById("deposit-total");
    // const depositAmountText = depositTotal.innerText;

    // const previousDepositAmount = parseFloat(depositAmountText);
    // depositTotal.innerText = previousDepositAmount + depositAmount;

    // update account balance
    // const balanceTotal = document.getElementById("balance-total");
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);

    // balanceTotal.innerText = previousBalanceTotal + depositAmount;
  });

document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    // const withdrawInput = document.getElementById("withdraw-input");
    // const withdrawAmountText = withdrawInput.value;
    // const withdrawAmount = parseFloat(withdrawAmountText);
    // console.log(withdrawAmount);
    const withdrawAmount = getInputValue("withdraw-input");
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
      updateTotalField("withdraw-total", withdrawAmount);
      updateBalance(withdrawAmount, false);
    }

    // const withdrawTotal = document.getElementById("withdraw-total");
    // const previousWithdrawText = withdrawTotal.innerText;
    // const previousWithdrawTotal = parseFloat(previousWithdrawText);

    // withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;

    // const balanceTotal = document.getElementById("balance-total");
    // const previousBalanceText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(previousBalanceText);
    // const newBalanceTotal = previousBalanceTotal - withdrawAmount;
    // balanceTotal.innerText = newBalanceTotal;

    // withdrawInput.value = "";
  });
