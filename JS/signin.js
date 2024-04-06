var signin = document.getElementById("signin");
signin.addEventListener("click", getvalue);
function validatePassword() {
  var errorMessage = document.getElementById("error-message");
  var passwordInput = document.getElementById("pass");
  if (passwordInput.value.length < 8) {
    errorMessage.style.display = "block";
  } else {
    errorMessage.style.display = "none";
  }
}


function getvalue() {
  let email = document.getElementById("email").value;
  let name = document.getElementById("name").value;

  let pass = document.getElementById("pass").value;

  if (email === "") {
    alert("Fill your name");
  } else if (name === "") {
    alert("Fill your email");
  } else if (pass === "") {
    alert("Fill your password");
  } else {
    const account = {
      email: email,
      name: name,
      pass: pass,
    };
    const jsonString = JSON.stringify(account);
    localStorage.setItem("account", jsonString);
    alert("Tạo tài khoản thành công");
    location.href = "../HTML/login.html";
  }
}
