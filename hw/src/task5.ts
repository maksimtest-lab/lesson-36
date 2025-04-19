// Создайте функцию "filterByAge", которая будет принимать массив объектов типа "Person" и возраст, и возвращать новый массив с объектами, у которых возраст больше указанного.

type TPerson {
    name: string;
    age: number;
    greet?(): void;
}

function filterByAge(persons: Array<TPerson>, age: number): Array<TPerson> {
    return persons.filter(person => person.age > age);
}

const persons: Array<TPerson> = [
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