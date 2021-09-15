function getData() {
    username = document.getElementById("username_input").value;
    password = document.getElementById("password_input").value; 

    localStorage.setItem("Username", username);
    localStorage.setItem("Password", password);

    document.getElementById("username_input").value = "";
    document.getElementById("password_input").value = ""; 

    window.location = "home.html";
}