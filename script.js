function toggleTheme() {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
}

function calculateBMI() {
  let height = parseFloat(document.getElementById("height").value);
  let weight = parseFloat(document.getElementById("weight").value);
  let heightUnit = document.getElementById("heightUnit").value;
  let weightUnit = document.getElementById("weightUnit").value;
  const resultDiv = document.getElementById("result");

  if (!height || !weight) {
    alert("Please enter valid values");
    return;
  }

  if (heightUnit === "cm") height /= 100;
  else if (heightUnit === "ft") height *= 0.3048;

  if (weightUnit === "lb") weight *= 0.453592;

  let bmi = (weight / (height * height)).toFixed(2);

  let category = "";
  if (bmi < 18.5) category = "Underweight";
  else if (bmi < 24.9) category = "Normal";
  else if (bmi < 29.9) category = "Overweight";
  else category = "Obese";

  resultDiv.classList.remove("show");

  setTimeout(() => {
    resultDiv.innerHTML = `BMI: ${bmi} <br> Category: ${category}`;
    resultDiv.classList.add("show");
  }, 100);
}