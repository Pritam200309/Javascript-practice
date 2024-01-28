document.getElementById("myButton").onclick = function () {
  const myCheckBox = document.getElementById("myCheckBox");
  const visaBtn = document.getElementById("visaBtn");
  const mastercardBtn = document.getElementById("mastercardBtn");
  const paytmBtn = document.getElementById("paytmBtn");

  if (myCheckBox.checked) {
    console.log("You are subscribed!");
  } else {
    console.log("You ae not subscribed!");
  }

  if (visaBtn.checked) {
    console.log("You are paying with Visa!");
  } else if (mastercardBtn.checked) {
    console.log("You are paying with MAsterCard");
  } else if (paytmBtn.checked) {
    console.log("You are paying with Paytm");
  } else {
    console.log("You must select a payment method!");
  }
};
