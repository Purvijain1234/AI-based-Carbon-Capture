/* ===================================================== */
/* =============== AI DECISION LOGIC =================== */
/* ===================================================== */

let aiData = null;

// Load AI predictions JSON
fetch("/ai_predictions.json")
  .then(response => response.json())
  .then(data => {
    aiData = data;
  })
  .catch(error => {
    console.error("Error loading AI predictions:", error);
  });

function runAIDecision() {
  const date = document.getElementById("dateInput").value;
  const resultBox = document.getElementById("aiResult");

  if (!date) {
    resultBox.innerHTML = "Please select a date.";
    return;
  }

  if (!aiData || !aiData.predictions[date]) {
    resultBox.innerHTML =
      "No AI prediction available for the selected date.";
    return;
  }

  const predictedCO2 = aiData.predictions[date];
  const threshold = aiData.decision_threshold;

  const decision =
    predictedCO2 >= threshold
      ? "Operate Carbon Capture"
      : "Do Not Operate";

  resultBox.innerHTML = `
    <strong>Date:</strong> ${date}<br>
    <strong>Predicted CO₂:</strong> ${predictedCO2} ppm<br>
    <strong>Decision:</strong> ${decision}
  `;
}
