const form = document.querySelector('form');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100;

    const bmi = weight / (height * height);
    const bmiRounded = bmi.toFixed(2);

    let message = '';
    let bmiClass = '';

    if (bmi < 18.5) {
        message = `Your BMI is ${bmiRounded}. This indicates that you are underweight.`;
        bmiClass = 'bmi-underweight';
    } else if (bmi >= 18.5 && bmi < 25.0) {
        message = `Your BMI is ${bmiRounded}. This indicates that you have a normal weight.`;
        bmiClass = 'bmi-normal';
    } else if (bmi >= 25.0 && bmi < 30.0) {
        message = `Your BMI is ${bmiRounded}. This indicates that you are overweight.`;
        bmiClass = 'bmi-overweight';
    } else if (bmi >= 30.0 && bmi < 35.0) {
        message = `Your BMI is ${bmiRounded}. This indicates that you have grade I obesity.`;
        bmiClass = 'bmi-obesity-1';
    } else if (bmi >= 35.0 && bmi < 40.0) {
        message = `Your BMI is ${bmiRounded}. This indicates that you have grade II obesity.`;
        bmiClass = 'bmi-obesity-2';
    } else {
        message = `Your BMI is ${bmiRounded}. This indicates that you have grade III (morbid) obesity.`;
        bmiClass = 'bmi-morbid-obesity';
    }

    resultDiv.textContent = message;
    resultDiv.className = `bmi-result ${bmiClass}`;
});

/* Tu resto de código */
