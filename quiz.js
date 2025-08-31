const quizForm = document.getElementById("quizForm");
const scoreContainer = document.getElementById("scoreContainer");

const answers = { q1: "B", q2: "A", q3: "A", q4: "B", q5: "C", q6: "C"};

quizForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let score = 0;
    for (let q in answers){
        const userAnswer = quizForm.elements[q].value;
        if(userAnswer === answers[q]) score++;
    }

    const user = JSON.parse(localStorage.getItem("user"));
    const studentName = user ? user.name : "Student";

    localStorage.setItem("lastScore", score);
    localStorage.setItem("lastStudent", studentName);

    quizForm.style.display = "none";
    scoreContainer.style.display = "block";

    document.getElementById("studentName").innerText = `Student: ${studentName}`;
    document.getElementById("scoreDisplay").innerText = score;

    const percent = (score/6) * 100;
    let feedback = "";
    if(percent === 100) feedback = "Excellent! 🎉";
    else if(percent >= 50) feedback = "Good job! 👍";
    else feedback = "Keep trying! 💪";

    document.getElementById("feedback").innerText = feedback;
});

document.getElementById("backBtn").addEventListener("click", () => {
    window.location.href = "life-sciences.html";
});
