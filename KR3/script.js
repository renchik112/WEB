document.addEventListener("DOMContentLoaded", function () {
    let op1Input = document.getElementById("op1");
    let op2Input = document.getElementById("op2");
    let resultShowing= document.getElementById("res");
    let logInfo = document.getElementById("log-part");
    let sinInfo = document.getElementById("sin-part");
    let tanInfo = document.getElementById("tan-part");

    function clearData() {
        logInfo.innerHTML = '';
        sinInfo.innerHTML = '';
        tanInfo.innerHTML = '';
    }

    function fetchData(url, callback) {
        fetch(url)
            .then(response => response.json())
            .then(data => callback(data))
            .catch(error => console.error("Error fetching data:", error));
    }

    function handleButtonClick(event, operation) {
        event.preventDefault();
        clearData();

        let operand1 = parseFloat(op1Input.value);
        let operand2 = parseFloat(op2Input.value);
        let result;

        switch (operation) {
            case 'add':
                if (isNaN(operand1) || isNaN(operand2)) {
                    resultShowing.textContent = "Operand is missing";
                    return;
                }
                result = operand1 + operand2;
                resultShowing.textContent = "Result: " + result;
                break;

            case 'sub':
                if (isNaN(operand1) || isNaN(operand2)) {
                    resultShowing.textContent = "Operand is missing";
                    return;
                }
                result = operand1 - operand2;
                resultShowing.textContent = "Result: " + result;
                break;

            case 'mul':
                if (isNaN(operand1) || isNaN(operand2)) {
                    resultShowing.textContent = "Operand is missing";
                    return;
                }
                result = operand1 * operand2;
                resultShowing.textContent = "Result: " + result;
                break;
                
            case 'div':
                if (isNaN(operand1) || isNaN(operand2)) {
                    resultShowing.textContent = "Operand is missing";
                    return;
                }
                if (operand2 === 0) {
                    resultShowing.textContent = "Result: Cannot divide by zero";
                    return;
                } else {
                    result = operand1 / operand2;
                    resultShowing.textContent = "Result: " + result;
                }
                break;

            case 'log':
                if (op1Input.value.trim() === '') {
                    resultShowing.textContent = "Operand is missing";
                    return;
                }
                if (operand1 <= 0) {
                    resultShowing.textContent = "Result: Operand 1 is less or equal to 0";
                    return;
                } else {
                    result = Math.log(operand1);
                    fetchData('./json/log.json', function (data) {
                        resultShowing.textContent = "Result: " + result;
                        logInfo.innerHTML = `<strong>${data.name}</strong><br><img src="${data.image_name}" alt="${data.name}"><br> ${data.description}`;
                    });
                }
                break;

            case 'sin':
                if (op1Input.value.trim() === '') {
                    resultShowing.textContent = "Operand is missing";
                    return;
                }
                operand1 = operand1 * Math.PI / 180;
                result = Math.sin(operand1);
                fetchData('./json/sin.json', function (data) {
                    resultShowing.textContent = "Result: " + result;
                    sinInfo.innerHTML = `<strong>${data.name}</strong><br><img src="${data.image_name}" alt="${data.name}"><br> ${data.description}`;
                });
                break;
                
            case 'tan':
                if (op1Input.value.trim() === '') {
                    resultShowing.textContent = "Operand is missing";
                    return;
                }
                operand1 = operand1 * Math.PI / 180;
                result = Math.tan(operand1);
                fetchData('./json/tan.json', function (data) {
                    resultShowing.textContent = "Result: " + result;
                    tanInfo.innerHTML = `<strong>${data.name}</strong><br><img src="${data.image_name}" alt="${data.name}"><br> ${data.description}`;
                });
                break;
        }
    }

    document.getElementById("add-button").addEventListener("click", (e) => handleButtonClick(e, 'add'));
    document.getElementById("sub-button").addEventListener("click", (e) => handleButtonClick(e, 'sub'));
    document.getElementById("mul-button").addEventListener("click", (e) => handleButtonClick(e, 'mul'));
    document.getElementById("div-button").addEventListener("click", (e) => handleButtonClick(e, 'div'));
    document.getElementById("log-button").addEventListener("click", (e) => handleButtonClick(e, 'log'));
    document.getElementById("sin-button").addEventListener("click", (e) => handleButtonClick(e, 'sin'));
    document.getElementById("tan-button").addEventListener("click", (e) => handleButtonClick(e, 'tan'));
});