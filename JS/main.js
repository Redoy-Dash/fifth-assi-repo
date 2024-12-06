let mainBalance = 5500;

function handleDonation(inputId, donationId) {
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


    showModal();
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

// Modal Amount 
const modalAmount = document.getElementById("modalAmount");
modalAmount.innerText = inputId.value;
