function myFun(event) {
    var a = document.forms["form"]["email"].value;
    var errorElement = document.getElementById("error");
    var wrong=document.getElementById("wrong");

    if (a.indexOf('@') <= 0) {
        errorElement.style.display = "block";
        errorElement.style.color = "red";
        errorElement.innerHTML = "Invalid Email.";
        wrong.style.setProperty("visibility","visible");
        event.preventDefault(); // Prevent default form submission behavior
        return false; // Stop further execution of form submission
    }

    if (a.charAt(a.length-4)!='.'&&a.charAt(a.length-3)!='.') {
        errorElement.style.display = "block";
        errorElement.style.color = "red";
        errorElement.innerHTML = "Invalid Email.";
        wrong.style.setProperty("visibility","visible");
        event.preventDefault(); // Prevent default form submission behavior
        return false; // Stop further execution of form submission
    }

    // If all checks pass, indicate success and allow form submission
    errorElement.style.display = "block";
    errorElement.style.color = "green";
    errorElement.innerHTML = "Email sent";
    wrong.style.setProperty("visibility","hidden");
    event.preventDefault();
    return true; // Allow form submission
}
