javascript
function computeTemperature(event) {
    let input = event.target;
    let inputId = input.id;
    let inputValue = parseFloat(input.value);

    if (isNaN(inputValue)) {
        alert("Please enter a valid number.");
        return;
    }

    let celsius = document.getElementById("celsius");
    let Fahrenheit = document.getElementById("Fahrenheit");
    let Kelvin = document.getElementById("Kelvin");

    switch (inputId) {
        case "celsius":
            Fahrenheit.value = (inputValue * 9/5) + 32;
            Kelvin.value = inputValue + 273.15;
            break;
        case "Fahrenheit":
            celsius.value = (inputValue - 32) * 5/9;
            Kelvin.value = (inputValue - 32) * 5/9 + 273.15;
            break;
        case "Kelvin":
            celsius.value = inputValue - 273.15;
            Fahrenheit.value = (inputValue - 273.15) * 9/5 + 32;
            break;
    }
}