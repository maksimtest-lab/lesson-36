"use strict";
// let username: string;
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const user = {
    name: 'Maks',
    age: 25,
    isAdmin: true
};
let users = [
    {
        name: 'Maks',
        age: 25,
        isAdmin: true
    },
    {
        name: 'Maks',
        age: 25,
        isAdmin: true
    }
];
users.push({ name: 'Maks', });
// const user3: UserWithDiscount = {
//     hasDiscount: true,
//     discount: 10
// }
// Универсальные типы
const user2 = {
    name: 'Maks',
    age: 25,
    isAdmin: true
};
console.log(user);
// Тип any
let a = 5;
a = 'Maks';
a = true;
// Тип unknown
let b = 5;
b = 'Maks';
b = true;
// Функции
function greet(name) {
    console.log(`Hello, ${name.toUpperCase()}`);
}
greet('Maks');
// function getUserGreet(name: string, greetMessage: string = 'Hello'): string {
// function getUserGreet({name: string, greetMessage = 'Hello'}: GetUserGreetParams): string {
//     return `${greetMessage} ${name.toUpperCase()}`;
//     // return `${greetMessage} ${name.toUpperCase()}`;
// }
// const result = getUserGreet('Maks');
// const result = getUserGreet({name: 'Maks'});
// console.log(result);
function getUser(id) {
    return {
        name: 'Maks',
        age: 25,
        isAdmin: true
    };
}
const user4 = getUser(1);
class User5 {
    constructor(name, age, isAdmin) {
        this.name = name;
        this.age = age;
        this.isAdmin = isAdmin;
    }
    getUserInfo() {
        console.log(`Name: ${this.name}, age: ${this.age}, isAdmin: ${this.isAdmin}`);
    }
}
const user5 = new User5('Maks', 25, true);
// Generics
function getFirstArraElement(arr) {
    return arr[0];
}
const firstElement = getFirstArraElement([1, 2, 3, 4, 5]);
class UserService {
    constructor() {
        this.users = [];
    }
    fetchUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch('https://jsonplaceholder.typicode.com/users');
            const data = yield response.json();
            this.users = data;
            return data;
        });
    }
    printUsers() {
        console.log(this.users);
    }
}
const service = new UserService();
service.fetchUsers().then(() => service.printUsers());
service.printUsers();
//# sourceMappingURL=script.js.map