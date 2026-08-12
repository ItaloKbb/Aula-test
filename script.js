const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");
const quizForm = document.querySelector("#quiz-form");
const quizResult = document.querySelector("#quiz-result");

menuButton.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
});

navLinks.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    navLinks.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Abrir menu");
  }
});

quizForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const answers = {
    q1: "b",
    q2: "a",
    q3: "c",
    q4: "b",
    q5: "a",
  };

  const formData = new FormData(quizForm);
  const answeredQuestions = Object.keys(answers).filter((question) =>
    formData.has(question),
  );

  if (answeredQuestions.length < Object.keys(answers).length) {
    quizResult.textContent = "Responda todas as questões antes de conferir.";
    quizResult.classList.add("visible");
    return;
  }

  const score = Object.entries(answers).reduce(
    (total, [question, correctAnswer]) =>
      total + Number(formData.get(question) === correctAnswer),
    0,
  );

  const feedback =
    score === 5
      ? "Excelente! Você dominou os fundamentos."
      : score >= 3
        ? "Bom trabalho! Revise os pontos que ainda geram dúvida."
        : "Continue praticando! Releia o conteúdo e tente novamente.";

  quizResult.textContent = `Você acertou ${score} de 5. ${feedback}`;
  quizResult.classList.add("visible");
});
