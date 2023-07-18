function login(event) {
    event.preventDefault(); // Prevent form submission

    // Get the username and password values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Perform login logic here...
    if (username === "admin" && password === "password") {
        // Redirect to the dashboard page after successful login
        window.location.href = "Index2.html";
    } else {
        // Show an error message or perform other actions for failed login
        alert("Invalid username or password");
    }
}
