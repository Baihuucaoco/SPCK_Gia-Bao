var login = document.getElementById("login");
login.addEventListener("click", getValue);
function getValue() {
  let name = document.getElementById("name").value;
  let pass = document.getElementById("pw").value;
  let account = localStorage.getItem("account");
  let accountParse=JSON.parse(account);

  
  if (name === "") {
    alert("Write your name");
  }
  else if(pass === ""){
    alert("Type your password");
  }else if(name !== accountParse.name){
    alert("Name doesnt match")
  } 
  else if (pass !== accountParse.pass){
    alert("Password doesnt match")
  }
  else{
    alert("Đăng nhập thành công");
    location.href = "../HTML/index.html";
    
  }
}
