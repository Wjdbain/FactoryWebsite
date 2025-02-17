document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const employeeID = document.getElementById("employeeID").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    const validID = "M.McFly1"; // Set your fake ID
    const validPassword = "Gr8Sc0tt"; // Set your fake password

    const validID = "EMP1234"; //
    const validID = "securepass"; //

    if (employeeID === validID && password === validPassword) {
        window.location.href = "files.html"; // Redirect to the "files" page
    } else {
        errorMessage.textContent = "Invalid Employee ID or Password.";
    }
});
