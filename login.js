
document.querySelector("#signup").addEventListener("submit",storeData)
var userData=JSON.parse(localStorage.getItem("userCreds")) || []


function storeData() {
    event.preventDefault();
 
    var userObj = {
      email: document.querySelector("#email").value,
      password: document.querySelector("#password").value,
    };
    userData.push(userObj);
    localStorage.setItem("userCreds",JSON.stringify(userData))
    window.location.href="index.html"

}

// login


document.querySelector("#continuel").addEventListener("submit", loginpage);

function loginpage() {
  event.preventDefault();

  var userObj = {
    email: document.querySelector("#emaill").value,
    password: document.querySelector("#passwordl").value,
  };
  //console.log(userObj);
  userData.push(userObj);
  //console.log(userData)
  localStorage.setItem("userCreds",JSON.stringify(userData))
  window.location.href="index.html"

}