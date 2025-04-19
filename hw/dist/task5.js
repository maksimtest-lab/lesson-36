"use strict";
// Создайте функцию "filterByAge", которая будет принимать массив объектов типа "Person" и возраст, и возвращать новый массив с объектами, у которых возраст больше указанного.
function filterByAge(persons, age) {
    return persons.filter(person => person.age > age);
}
const persons = [
    {
        name: 'Maks',
        age: 25
    },
    {
        name: 'Yaro',
        age: 31
    },
    {
        name: 'Dima',
        age: 28
    }
];
console.log(filterByAge(persons, 28));
console.log(filterByAge(persons, 25));
//# sourceMappingURL=task5.js.map