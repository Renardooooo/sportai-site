function startQuiz() {
  document.getElementById("quiz").classList.remove("hidden");
}

function analyze() {
  const sport = document.getElementById("sport").value;

  let recommendation;

  if (sport === "running") {
    recommendation = {
      name: "RunX Elite AI",
      reason: "Amorti intelligent + stabilité parfaite",
      price: "139€"
    };
  } else {
    recommendation = {
      name: "Padel Vision Pro",
      reason: "Grip et maintien latéral optimisés",
      price: "109€"
    };
  }

  document.getElementById("results").classList.remove("hidden");

  document.getElementById("recommendation").innerHTML = `
    <div class="product">
      <h3>${recommendation.name}</h3>
      <p>${recommendation.reason}</p>
      <strong>${recommendation.price}</strong>
    </div>
  `;
}
