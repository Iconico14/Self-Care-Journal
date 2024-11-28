function saveDetails() {
    const userName = document.getElementById('userName').value;
    const dob = document.getElementById('dob').value;

    if (userName && dob) {
        localStorage.setItem('userName', userName);
        localStorage.setItem('dob', dob);
        window.location.href = 'dashboard.html'; // Redirect to main dashboard page
    } else {
        alert('Please enter your name and date of birth');
    }
}
