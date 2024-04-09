// Завдання 5 //

function generateDiv() {
    let selectedWidth = document.getElementById('widthSelect').value;

    let generatedDiv = document.createElement('div');
    generatedDiv.style.backgroundColor = 'blue';
    generatedDiv.style.height = selectedWidth + 'px';
    generatedDiv.style.width = '30px';
    generatedDiv.style.position = 'relative';
    generatedDiv.style.top = '0';

    document.getElementById('generatedDiv').appendChild(generatedDiv);
}