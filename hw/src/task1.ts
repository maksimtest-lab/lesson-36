// Необходимо создать интерфейс “IPerson” и реализующий его класс "Person" с полями "name" и "age" типа string и number соответственно. Добавьте метод "greet", который будет выводить приветствие с именем и возрастом персоны.

interface IPerson {
    name: string;
    age: number;
    greet(): void;
}

class Person implements IPerson {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): void {
        console.log(`Привет, ${this.name}! Тебе ${this.age} лет.`);
    }
}

const person = new Person('Maks', 25);
person.greet();