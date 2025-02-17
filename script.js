document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const employeeID = document.getElementById("employeeID").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    const validID = "TSSAB3";
    const validPassword = "BiffLover1";

    if (employeeID === validID && password === validPassword) {
        window.location.href = "Dashboard.html"; // Redirect to the "dashboard" page
    } else {
        errorMessage.textContent = "Invalid Employee ID or Password.";
    }
});
