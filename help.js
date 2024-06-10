document.getElementById('donate-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let amount = document.getElementById('amount').value;
    let email = document.getElementById('email').value;
    let mobile = document.getElementById('mobile').value;

    if (amount <= 0 || !/^\d+$/.test(amount)) {
        alert('Please enter a valid amount.');
        return;
    }
    if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email)) {
        alert('Please enter a valid Gmail address.');
        return;
    }
    if (!/^\d{10}$/.test(mobile)) {
        alert('Please enter a valid 10-digit mobile number.');
        return;
    }

    alert('Thank you for your donation!');
    this.reset();
});
