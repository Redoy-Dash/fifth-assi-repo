// মূল ব্যালেন্স (ডোনেশন করার জন্য মোট অর্থ)
let mainBalance = 5500;

// ডোনেশন পরিচালনার জন্য ফাংশন
function handleDonation(inputId, donationId) {
    // ইনপুট ফিল্ড থেকে ডোনেশন পরিমাণ নেওয়া
    const donationInput = document.getElementById(inputId);
    const donationAmount = parseFloat(donationInput.value);

    // ডোনেশন পরিমাণ যাচাই করা: এটি কি সঠিক সংখ্যা এবং ব্যালেন্সের মধ্যে আছে?
    if (!isNaN(donationAmount) && donationAmount > 0 && donationAmount <= mainBalance) {
        // সংশ্লিষ্ট ডোনেশনের ব্যালেন্সের বর্তমান মান খুঁজে বের করা
        const donationBalance = document.getElementById(donationId);
        const currentDonation = parseFloat(donationBalance.textContent) || 0;

        // নতুন ডোনেশন যোগ করা
        donationBalance.textContent = (currentDonation + donationAmount).toFixed(2);

        // মূল ব্যালেন্স থেকে ডোনেশন পরিমাণ কমিয়ে ফেলা
        mainBalance -= donationAmount;
        document.getElementById("mainBalance").textContent = mainBalance.toFixed(2);

        // ইনপুট ফিল্ডটি পরিষ্কার করা
        donationInput.value = "";
    } else {
        // ভুল ইনপুটের ক্ষেত্রে একটি এলার্ট বার্তা দেখানো
        alert("অনুগ্রহ করে একটি সঠিক ডোনেশন পরিমাণ লিখুন যা আপনার ব্যালেন্সের মধ্যে থাকে।");
    }
}
