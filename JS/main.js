let mainBalance = 10000;


function handleDonation(inputId, donationId, cause) {

    const donationInput = document.getElementById(inputId);
    const donationAmount = parseFloat(donationInput.value);


    if (donationAmount <= 0 || isNaN(donationAmount)) {
        alert("Please enter a valid donation amount.");
        return;
    }

    if (donationAmount > mainBalance) {
        alert("Donation amount exceeds your available balance.");
        return;
    }


    const donationBalance = document.getElementById(donationId);
    const currentDonation = parseFloat(donationBalance.textContent) || 0;


    donationBalance.textContent = (currentDonation + donationAmount).toFixed(2);


    mainBalance -= donationAmount;


    document.getElementById("mainBalance").textContent = mainBalance.toFixed(2);


    donationInput.value = "";


    saveTransaction(cause, donationAmount);


    showModal();
}


function saveTransaction(cause, amount) {

    const transaction = {
        cause,
        amount,
        date: new Date().toLocaleString(),
    };


    const transactionHistory = JSON.parse(localStorage.getItem("transactionHistory")) || [];


    transactionHistory.push(transaction);


    localStorage.setItem("transactionHistory", JSON.stringify(transactionHistory));
}


function loadTransactionHistory() {

    const transactionHistory = JSON.parse(localStorage.getItem("transactionHistory")) || [];


    const table = document.getElementById("transactionTable");


    table.innerHTML = "";


    transactionHistory.forEach((transaction) => {
        const row = document.createElement("tr");

        const causeCell = document.createElement("td");
        causeCell.className = "border border-green-500 px-4 py-2";
        causeCell.textContent = transaction.cause;

        const amountCell = document.createElement("td");
        amountCell.className = "border border-green-500 px-4 py-2";
        amountCell.textContent = `${transaction.amount} BDT`;

        const timeCell = document.createElement("td");
        timeCell.className = "border border-green-500 px-4 py-2";
        timeCell.textContent = transaction.date;


        row.appendChild(causeCell);
        row.appendChild(amountCell);
        row.appendChild(timeCell);


        table.appendChild(row);
    });
}


function showModal() {
    const modal = document.getElementById("donationModal");
    modal.classList.remove("hidden");
    modal.classList.add("flex");
}


function closeModal() {
    const modal = document.getElementById("donationModal");
    modal.classList.add("hidden");
    modal.classList.remove("flex");
}


if (document.getElementById("transactionTable")) {
    loadTransactionHistory();
}

/* Copyright © 2024 by Redoy Krishna Dash.
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 */

