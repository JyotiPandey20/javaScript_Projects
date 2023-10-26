const btnElement = document.getElementById("btn");
const bmiInputElement = document.getElementById("bmi-result");
const weightConditionElement = document.getElementById("weight-condition");

function calculateBMI() {
    const heightValue = document.getElementById("height").value / 100;
    const weightValue = document.getElementById("weight").value;
    const bmiValue = weightValue / (heightValue * heightValue)
    bmiInputElement.value = bmiValue;

    if (bmiValue < 18.5) {
        weightConditionElement.innerText = "Under weight";
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        weightConditionElement.innerText = "Normal weight";
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
        weightConditionElement.innerText = "Overweight";
    } else if (bmiValue >= 30) {
        weightConditionElement.innerText = "Obesity";
    }
}
btnElement.addEventListener("click", calculateBMI)