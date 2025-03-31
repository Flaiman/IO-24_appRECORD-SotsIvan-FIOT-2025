// Task 1
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

function renderList(elementId, data) {
    const list = document.getElementById(elementId);
    list.innerHTML = "";
    data.forEach(med => {
        const li = document.createElement("li");
        li.textContent = `ID: ${med.id} - ${med.name}: ${med.price} грн`;
        list.appendChild(li);
    });
}

renderList("originalList", medicines);

const discountedMedicines = applyDiscount(medicines);
renderList("discountedList", discountedMedicines);

// Task 2
const users = [
    { name: 'John', age: 27 },
    { name: 'Jane', age: 31 },
    { name: 'Bob', age: 19 },
];

function sortUsersByAge(users) {
    return [...users].sort((a, b) => a.age - b.age);
}

function renderList1(elementId, data) {
    const list = document.getElementById(elementId);
    list.innerHTML = "";
    data.forEach(user => {
        const li = document.createElement("li");
        li.textContent = `${user.name}, Вік: ${user.age}`;
        list.appendChild(li);
    });
}

renderList1("originalUsers", users);

const sortedUsers = sortUsersByAge(users);
renderList1("sortedUsers", sortedUsers);
