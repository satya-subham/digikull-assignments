function calculate(e) {
  e.preventDefault();
  let totalBill = document.getElementById("bill-amount").value;
  let totalPeople = document.getElementById("number-of-people").value;
  let selectElement = parseFloat(document.getElementById("service").value);
  let span = document.querySelector("span");

  if (totalBill == "" || totalPeople == "") {
    alert("Please enter values");
  } else {
    let res = (totalBill * selectElement) / 100;
    let finalResult = res / totalPeople;
    span.innerText = finalResult;
  }
}
