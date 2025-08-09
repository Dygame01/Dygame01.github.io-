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
