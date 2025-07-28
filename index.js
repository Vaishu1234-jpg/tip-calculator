
function CalculateTip() {
    const billamount = parseFloat(document.getElementById("billamount").value);
    const percentage = parseFloat(document.getElementById("percentage").value);
    const errormessage = document.getElementById("errormessage");
    const tipamountInput = document.getElementById("tipamount");
    const totalamountInput = document.getElementById("totalamount");
    console.log(billamount);
    console.log(percentage);

    if (isNaN(billamount) || isNaN(percentage) || billamount < 0 || percentage < 0) {
        errormessage.textContent = "Please enter valid numbers for bill and tip percentage.";
        tipamountInput.value = "";
        totalamountInput.value = "";
        return;
    }

    const tip = (billamount * percentage) / 100;
    const total = billamount + tip;

    tipamountInput.value = tip.toFixed(2);
    totalamountInput.value = total.toFixed(2);
    errormessage.textContent = "";
}