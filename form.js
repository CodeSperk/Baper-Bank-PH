// step-01: add click event handler with the submit button
document.getElementById("btn-submit").addEventListener("click", function () {
  // set-02: get email and password value
  const emailField = document.getElementById("email");
  const email = emailField.value;

  const passField = document.getElementById("password");
  const password = passField.value;
 

  if (email === "inbx.mahbub@gmail.com" && password === "Mahbub0692") {
    window.location.href="./statement.html";
  } else {
    alert("Invalid User");
  }

});