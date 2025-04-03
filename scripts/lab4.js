// Task 1/2
function getProductDetails(productId, successCallback, errorCallback) {
    const products = {
        1: { id: 1, name: "Гітара Fender", price: 1200 },
        2: { id: 2, name: "Гітара Gibson", price: 1500 },
        3: { id: 3, name: "Гітара Ibanez", price: 900 }
    };
    if (products[productId]) {
        console.log("Task1/2")
        successCallback(products[productId]);
    } else {
        console.log("Task1/2")
        errorCallback("Товар не знайдено");
    }
}

getProductDetails(2, 
    (product) => console.log("Деталі товару:", product), 
    (error) => console.error("Помилка:", error)
);
// Task 1/4
console.log("Task 1/4")
const concerts = {
    Київ: new Date("2020-04-01"),
    Умань: new Date("2025-07-02"),
    Вінниця: new Date("2020-04-21"),
    Одеса: new Date("2025-03-15"),
    Хмельницький: new Date("2020-04-18"),
    Харків: new Date("2025-07-10"),
};

const futureCities = Object.entries(concerts)
    .filter(([city, date]) => date > new Date())
    .sort((a, b) => a[1] - b[1])
    .map(([city]) => city);

console.log(futureCities);
// Task 1/6
function applyDiscount(medicines) {
    return medicines.map((med, index) => {
        return {
            id: index + 1,
            name: med.name,
            price: med.price > 300 ? (med.price * 0.7).toFixed(2) : med.price.toFixed(2)
        };
    });
}

const medicines = [
    { name: "Noshpa", price: 170 },
    { name: "Analgin", price: 55 },
    { name: "Quanil", price: 310 },
    { name: "Alphacholine", price: 390 }
];

console.log("Task1/6")
console.log("Початковий список")
console.log(medicines)
const discountedMedicines = applyDiscount(medicines);
console.log("Список після знижки")
console.log(discountedMedicines)

// Task 1/8
console.log("Task 1/8")
function Storage(initialItems) {
    this.items = initialItems;
}

Storage.prototype.getItems = function () {
    return this.items;
};

Storage.prototype.addItem = function (item) {
    this.items.push(item);
};

Storage.prototype.removeItem = function (item) {
    this.items = this.items.filter(i => i !== item);
};

const arr = ["apple", "banana", "mango"];
const storage = new Storage(arr);

console.log(storage.getItems()); // ["apple", "banana", "mango"]
storage.addItem("orange");
console.log(storage.getItems()); // ["apple", "banana", "mango", "orange"]
storage.removeItem("banana");
console.log(storage.getItems()); // ["apple", "mango", "orange"]

// Task 1/9
console.log("Task 1/9")
const tweets = [
    { id: "000", likes: 5, tags: ["js", "nodejs"] },
    { id: "001", likes: 2, tags: ["html", "css"] },
    { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
    { id: "003", likes: 8, tags: ["css", "react"] },
    { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const tagCount = tweets
    .flatMap(tweet => tweet.tags)
    .reduce((acc, tag) => {
        acc[tag] = (acc[tag] || 0) + 1;
        return acc;
    }, {});

console.log(tagCount); // { js: 3, nodejs: 3, html: 2, css: 2, react: 2 }

// Task 1/10
console.log("Task 1/10")
function checkBrackets(str) {
    const stack = [];
    const brackets = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    
    for (const char of str) {
        if (brackets[char]) {
            stack.push(char);
        } else if (Object.values(brackets).includes(char)) {
            if (stack.length === 0 || brackets[stack.pop()] !== char) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
}
console.log("function test() { return [1, 2, 3]; }")
console.log(checkBrackets("function test() { return [1, 2, 3]; }")); // true
console.log("function test() { return [1, 2, 3; }")
console.log(checkBrackets("function test() { return [1, 2, 3; }")); // false

//Task 2/2 
console.log("Task 2/2")
const people = [
    { name: 'John', age: 27 },
    { name: 'Jane', age: 31 },
    { name: 'Bob', age: 19 },
];

const hasUnder20 = people.some(person => person.age < 20);
console.log(people)
console.log(hasUnder20); // true

// Task 2/4
console.log("Task 2/4")
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num ** 2);
console.log(numbers);
console.log(squaredNumbers); // [1, 4, 9, 16, 25]

// Task 2/6
console.log("Task 2/6")
const users = [
    { name: 'John', age: 27 },
    { name: 'Jane', age: 31 },
    { name: 'Bob', age: 19 },
];

function sortUsersByAge(users) {
    return [...users].sort((a, b) => a.age - b.age);
}

console.log("Початковий масив")
console.log(users)
const sortedUsers = sortUsersByAge(users);
console.log("Сортований масив")
console.log(sortedUsers);

// Task 2/7
console.log("Task 2/7")
class Calculator {
    constructor() {
        this.value = 0;
    }

    number(value) {
        this.value = value;
        return this;
    }

    getResult() {
        return this.value;
    }

    add(value) {
        this.value += value;
        return this;
    }

    subtract(value) {
        this.value -= value;
        return this;
    }

    multiply(value) {
        this.value *= value;
        return this;
    }

    divide(value) {
        if (value === 0) {
            throw new Error("Ділення на нуль неможливе");
        }
        this.value /= value;
        return this;
    }
}

const calc = new Calculator();
const result = calc
    .number(10)
    .add(5)
    .subtract(3)
    .multiply(4)
    .divide(2)
    .getResult();
console.log("(10+5-3)*4/2")
console.log(result); // 24