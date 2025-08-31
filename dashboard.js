document.addEventListener("DOMContentLoaded", () => {
    const subjectCards = document.querySelectorAll(".subject-card");
    const logoutBtn = document.getElementById("logoutBtn");

    const user = JSON.parse(localStorage.getItem("user"));
    if(user){
        document.getElementById("welcomeMessage").innerText = `Welcome, ${user.name}!`;
    }

    subjectCards.forEach(card => {
        card.addEventListener("click", () => {
            const pageMap = {
                "life-sciences": "life-sciences.html",
                "maths": "maths.html",
                "physical-sciences": "physical-sciences.html",
                "agricultural-sciences": "agricultural-sciences.html",
                "english": "english.html",
                "isizulu": "isizulu.html",
                "life-orientation": "life-orientation.html",
                "geography": "geography.html"
            };
            if(pageMap[card.id]){
                window.location.href = pageMap[card.id];
            }
        });
    });

    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("user");
        window.location.href = "index.html";
    });
});
