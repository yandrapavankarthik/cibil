// Function to toggle the visibility of the password
function togglePassword() {
    var passwordField = document.getElementById("password");
    var eyeIcon = document.getElementById("eye-icon");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        eyeIcon.innerHTML = "🙈";  // Change to "Hide" symbol
    } else {
        passwordField.type = "password";
        eyeIcon.innerHTML = "&#128065;";  // Change to "Show" symbol (eye)
    }
}

// Login form validation and redirection
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    // Reset any previous error messages
    errorMessage.textContent = "";

    // Validate if username and password are correct
    if (username ==="karthik" && password) {
        // Redirect to the page after successful login
        window.location.href = "0.html";
    } else {
        // Display an error message if credentials are wrong
        errorMessage.textContent = "Wrong Username & Password!";
    }
});
