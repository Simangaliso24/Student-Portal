const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = loginForm.username.value.trim();
    const password = loginForm.password.value.trim();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid username or password");
    }
});
