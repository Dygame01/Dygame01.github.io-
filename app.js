let currentQuestion = null;
let recentIndexes = [];
const noRepeatCount = 5;

function getRandomQuestionIndex() {
  if (questions.length <= 1) return 0;

  let i, tries = 0;
  do {
    i = Math.floor(Math.random() * questions.length);
    tries++;
    if (tries > 30) break;
  } while (recentIndexes.includes(i));

  recentIndexes.push(i);
  if (recentIndexes.length > noRepeatCount) recentIndexes.shift();
  return i;
}

// Mélange les réponses sans toucher au tableau original
function shuffleAnswers(question) {
  // Création d'une copie indépendante
  const qCopy = {
    ...question,
    reponses: [...question.reponses]
  };

  // Tableau avec info de la bonne réponse
  const answersWithFlag = qCopy.reponses.map((rep, idx) => ({
    text: rep,
    correct: idx === qCopy.bonne
  }));

  // Mélange Fisher-Yates
  for (let i = answersWithFlag.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [answersWithFlag[i], answersWithFlag[j]] = [answersWithFlag[j], answersWithFlag[i]];
  }

  qCopy.reponses = answersWithFlag.map(a => a.text);
  qCopy.bonne = answersWithFlag.findIndex(a => a.correct);

  return qCopy;
}

function afficherQuestion() {
  const container = document.getElementById("quiz-container");
  const result = document.getElementById("result");
  const btn = document.getElementById("nextBtn");

  result.innerHTML = "";
  btn.style.display = "none";

  const index = getRandomQuestionIndex();

  // On clone et on mélange les réponses
  currentQuestion = shuffleAnswers(questions[index]);

  let html = `<div class="question"><p>${currentQuestion.texte}</p>`;

  if (currentQuestion.image) {
    html += `
      <div class="question-image">
        <img src="${currentQuestion.image}" alt="illustration">
      </div>`;
  }

  currentQuestion.reponses.forEach((rep, idx) => {
    html += `<label class="option">
              <input type="radio" name="reponse" value="${idx}">
              <span>${rep}</span>
            </label>`;
  });

  html += `<button class="btn-primary" onclick="verifier()">Valider</button></div>`;
  container.innerHTML = html;
}

function verifier() {
  const choix = document.querySelector('input[name="reponse"]:checked');
  const result = document.getElementById("result");
  const btn = document.getElementById("nextBtn");

  if (!choix) {
    alert("Veuillez sélectionner une réponse.");
    return;
  }

  const val = parseInt(choix.value, 10);
  const ok = (val === currentQuestion.bonne);

  document.querySelectorAll('input[name="reponse"]').forEach(el => el.disabled = true);

  result.innerHTML =
    `<div class="correction ${ok ? "ok" : "ko"}">
       <p class="correction-title">${ok ? "Bonne réponse ✅" : "Mauvaise réponse ❌"}</p>
       <p><strong>Explication :</strong> ${currentQuestion.explication}</p>
     </div>`;

  btn.style.display = "inline-block";
}

document.getElementById("nextBtn").addEventListener("click", afficherQuestion);

// Lancer le quiz
afficherQuestion();

