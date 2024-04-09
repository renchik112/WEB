// Завдання 5 //

document.getElementById('generateButton').addEventListener('click', generateDiv);

function generateDiv() {
    let selectedHeight = document.getElementById('height').value;

    let generatedDiv = document.createElement('div');
    generatedDiv.style.backgroundColor = 'blue';
    generatedDiv.style.height = selectedHeight + 'px';
    generatedDiv.style.width = '30px';

    document.getElementById('generatedDiv').appendChild(generatedDiv);

    console.log(generatedDiv);
}
