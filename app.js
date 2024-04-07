function validateForm(event) {
    event.preventDefault(); // Prevent form submission
  
    // Clear previous error messages
    clearErrors();
  
    // Get form input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
  
    // Validate name (at least 2 characters)
    if (name.length < 2) {
      displayError("nameError", "Name must be at least 2 characters.");
    }
  
    // Validate email
    if (!validateEmail(email)) {
      displayError("emailError", "Please enter a valid email address.");
    }
  
    // Validate password (at least 6 characters)
    if (password.length < 6) {
      displayError("passwordError", "Password must be at least 6 characters.");
    }
  
    // Validate confirm password
    if (password !== confirmPassword) {
      displayError("confirmPasswordError", "Passwords do not match.");
    }
  
    // If there are no errors, submit the form
    if (!document.getElementsByClassName("error").length) {
      document.getElementById("registrationForm").submit();
    }
  }
  
  function validateEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  
  function displayError(id, message) {
    var errorElement = document.getElementById(id);
    errorElement.innerHTML = message;
  }
  
  function clearErrors() {
    var errorElements = document.getElementsByClassName("error");
    for (var i = 0; i < errorElements.length; i++) {
      errorElements[i].innerHTML = "";
    }
  }