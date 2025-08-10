// -------------------------------
// QCM – logique d’affichage
// -------------------------------
let currentQuestion = null;
let recentIndexes = [];
const noRepeatCount = 30;

function getRandomQuestionIndex() {
  if (!window.questions || questions.length <= 1) return 0;

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

// Mélange les réponses sans toucher à "questions"
function shuffleAnswers(question) {
  const qCopy = { ...question, reponses: [...question.reponses] };

  const answersWithFlag = qCopy.reponses.map((rep, idx) => ({
    text: rep,
    correct: idx === qCopy.bonne
  }));

  // Fisher-Yates
  for (let i = answersWithFlag.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [answersWithFlag[i], answersWithFlag[j]] = [answersWithFlag[j], answersWithFlag[i]];
  }

  qCopy.reponses = answersWithFlag.map(a => a.text);
  qCopy.bonne = answersWithFlag.findIndex(a => a.correct);

  return qCopy;
}

// Gestion image avec fallback de casse (Cat3.png vs cat3.png)
function buildImageHTML(path){
  if (!path) return "";
  const lower = path.toLowerCase();
  const needsFallback = lower !== path;
  const onerr = needsFallback
    ? `onerror="this.onerror=null; this.src='${lower}'"`
    : "";
  return `
    <div class="question-image">
      <img src="${path}" ${onerr} alt="illustration" loading="lazy" decoding="async">
    </div>`;
}

function afficherQuestion() {
  const container = document.getElementById("quiz-container");
  const result = document.getElementById("result");
  const btn = document.getElementById("nextBtn");

  result.innerHTML = "";
  btn.style.display = "none";

  const index = getRandomQuestionIndex();

  // Clone + mélange des réponses
  currentQuestion = shuffleAnswers(questions[index]);

  let html = `<div class="question"><p>${currentQuestion.texte}</p>`;

  if (currentQuestion.image) {
    html += buildImageHTML(currentQuestion.image);
  }

  currentQuestion.reponses.forEach((rep, idx) => {
    html += `<label class="option">
              <input type="radio" name="reponse" value="${idx}">
              <span>${rep}</span>
            </label>`;
  });

  html += `<button class="btn-primary" onclick="verifier()">Valider</button></div>`;
  container.innerHTML = html;

  // Accessibilité: focus sur la première option
  container.querySelector('input[type="radio"]')?.focus({preventScroll:true});
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

  // désactiver radios
  document.querySelectorAll('input[name="reponse"]').forEach(el => el.disabled = true);

  result.innerHTML =
    `<div class="correction ${ok ? "ok" : "ko"}">
       <p class="correction-title">${ok ? "Bonne réponse ✅" : "Mauvaise réponse ❌"}</p>
       <p><strong>Explication :</strong> ${currentQuestion.explication}</p>
     </div>`;

  // Montrer le bouton sous le résultat (centré par CSS)
  btn.style.display = "inline-block";

  // Scroll automatique vers le bas de la page
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
}

document.addEventListener('click', (e) => {
  if (e.target && e.target.id === 'nextBtn') {
    afficherQuestion();
    document.getElementById("quiz-container").scrollIntoView({behavior:"smooth", block:"start"});
  }
});

// Exposé : appelé par index.html après chargement de questions.js + app.js
window.startQuiz = function () {
  if (!window.questions || !Array.isArray(window.questions) || !questions.length) {
    console.error('questions non chargées');
    document.getElementById('app')
      .insertAdjacentHTML('beforeend',
        '<p style="color:#b00">Aucune question disponible.</p>');
    return;
  }
  afficherQuestion();
};


