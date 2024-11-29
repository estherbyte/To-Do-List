const billDivideForm = document.getElementById("bill-divider-form");



billDivideForm.addEventListener("submit", billDivideHandler);

function billDivideHandler(event) {
  event.preventDefault();
  const inputs = getInputs();
  showCalculateOutput(inputs);
}

//get all the inputs for the bill divider
function getInputs() {
  let subtotal = document.getElementById("subtotal").value;
  let tipPercent = document.getElementById("tip").value;
  let noOfPerson = document.getElementById("no-of-person").value;
  return { subtotal, tipPercent, noOfPerson };
}

//calculate the bill divider info
function showCalculateOutput(input) {

  let totalTip =
    (parseFloat(input.subtotal) * parseFloat(input.tipPercent)) / 100;
  let totalAmount = parseFloat(input.subtotal) + totalTip;
  let tipPerPerson = totalTip / parseFloat(input.noOfPerson);
  let billPerPerson = totalAmount / parseFloat(input.noOfPerson);


  document.getElementById("total-bill").innerHTML = `$ ${totalAmount.toFixed(
    2
  )}`;
  document.getElementById(
    "bill-per-person"
  ).innerHTML = `$ ${billPerPerson.toFixed(2)}`;
  document.getElementById("total-tip").innerHTML = `$ ${totalTip.toFixed(2)}`;
  document.getElementById(
    "tip-per-person"
  ).innerHTML = `$ ${tipPerPerson.toFixed(2)}`;
}

document.getElementById("clear-btn").addEventListener("click", function () {
  document.getElementById("total-tip").innerHTML = `$ 00.00`;
  document.getElementById("total-bill").innerHTML = `$ 00.00`;
  document.getElementById("bill-per-person").innerHTML = `$ 00.00`;
  document.getElementById("tip-per-person").innerHTML = `$ 00.00`;
  billDivideForm.reset();
});