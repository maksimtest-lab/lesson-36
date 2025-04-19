"use strict";
// Необходимо создать интерфейс “IPerson” и реализующий его класс "Person" с полями "name" и "age" типа string и number соответственно. Добавьте метод "greet", который будет выводить приветствие с именем и возрастом персоны.
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Привет, ${this.name}! Тебе ${this.age} лет.`);
    }
}
const person = new Person('Maks', 25);
person.greet();
//# sourceMappingURL=task1.js.map