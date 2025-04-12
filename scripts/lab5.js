//Task 2
function swapValues() {
    const input1 = document.getElementById('input1');
    const input2 = document.getElementById('input2');

    const temp = input1.value;
    input1.value = input2.value;
    input2.value = temp;
}
//Task 4
const square = document.getElementById('square');

function resizeSquare(change) {
    let currentWidth = square.offsetWidth;
    let currentHeight = square.offsetHeight;

    let newWidth = currentWidth + change;
    let newHeight = currentHeight + change;

    if (newWidth >= 15 && newHeight >= 15) {
        square.style.width = newWidth + 'px';
        square.style.height = newHeight + 'px';
    }
}
//Task 6
function doubleValues() {
    const items = document.querySelectorAll('#numberList li');
    items.forEach(item => {
        let currentValue = parseInt(item.textContent);
        item.textContent = currentValue * 2;
    });
}
//Task 7
console.log("Task 7")
const categoriesList = document.querySelectorAll('#categories .item');

console.log('Number of categories:', categoriesList.length);

categoriesList.forEach(item => {
    const categoryName = item.querySelector('h2').textContent;
    const elementsCount = item.querySelectorAll('ul li').length;

    console.log('Category:', categoryName);
    console.log('Elements:', elementsCount);
});
//Task 8
const form = document.querySelector('.login-form');
form.addEventListener('submit', function (event) {
    event.preventDefault();

    const { email, password } = form.elements;

    if (email.value.trim() === '' || password.value.trim() === '') {
        alert('All form fields must be filled in');
        return;
    }

    const formData = {
        email: email.value.trim(),
        password: password.value.trim()
    };

    console.log("Task 8", formData);

    form.reset();
});
//Task 9
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

changeColorBtn.addEventListener('click', () => {
    const newColor = getRandomHexColor();
    document.body.style.backgroundColor = newColor;
    colorSpan.textContent = newColor;
});
//Task 10
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}
const input = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');

createBtn.addEventListener('click', () => {
    const amount = Number(input.value);

    if (amount < 1 || amount > 100) {
        alert('Please enter a number from 1 to 100');
        return;
    }

    destroyBoxes();
    createBoxes(amount);
    input.value = '';
});

destroyBtn.addEventListener('click', destroyBoxes);


function createBoxes(amount) {
    const elements = [];

    for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        const size = 30 + i * 10;

        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = getRandomHexColor();
        box.style.margin = '5px';
        box.style.border = '1px solid #ccc';
        box.style.display = 'inline-block';

        elements.push(box);
    }

    boxesContainer.append(...elements);
}

function destroyBoxes() {
    boxesContainer.innerHTML = '';
}