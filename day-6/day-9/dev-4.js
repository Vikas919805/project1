function Login(event) {
    event.preventDefault();
    alert("vikas ")
    var username = document.getElementById("usrename");
    var password = document.getElementById("password");
    var usernameView = document.getElementById("username-view");
    var passwordView = document.getElementById("password-view");

    usernameView.innerHTML = username.value;
    passwordView.innerHTML = password.value;
    alert("dddd");
}