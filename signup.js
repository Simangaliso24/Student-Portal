const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const fullName = signupForm.fullName.value.trim();
    const email = signupForm.email.value.trim();
    const password = signupForm.password.value.trim();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    if(users.some(u => u.username === email)){
        alert("User already exists!");
        return;
    }

    const newUser = { name: fullName, username: email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Account created successfully!");
    window.location.href = "index.html";
});
