let arr1 = [3, 1, 4, 16, 83, 23, 81, 9, 2, 98, 0, 100, 34, 67, 72, 46, 23, 55, 29, 37];
let numbersDiv = document.getElementById("numbers");


function bubbleSort(arr1) {
    let len = arr1.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len - 1; i++) {
            if (arr1[i] > arr1[i + 1]) {
                let temp = arr1[i];
                arr1[i] = arr1[i + 1];
                arr1[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return arr1;
}

arr1 = bubbleSort(arr1);
numbersDiv.innerHTML = "<p>" + arr1.join(", ") + "</p>";
console.log(arr1);
