// let username: string;

// username = 'Maks';


// let age: number = 25;

// Структурированная типизация
interface User {
    name: string;
    age?: number;
    isAdmin?: boolean;
    hasBooking?: boolean;
}

const user: User = {
    name: 'Maks',
    age: 25,
    isAdmin: true
}

let users: Array<User> = [
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

users.push({name: 'Maks',})

interface UserWithDiscount extends User {
    hasDiscount: boolean;
    discount: number;
}

// const user3: UserWithDiscount = {

//     hasDiscount: true,
//     discount: 10
// }

// Универсальные типы
const user2: Record<string, string | number | boolean> = {
    name: 'Maks',
    age: 25,
    isAdmin: true
}

console.log(user);

// Тип any
let a: any = 5;
a = 'Maks';
a = true;

// Тип unknown
let b: unknown = 5;
b = 'Maks';
b = true;

// Функции

function greet(name: string): void {
    console.log(`Hello, ${name.toUpperCase()}`);
}

greet('Maks');

type GetUserGreetParams =  {
    name: string;
    greetMessage?: string;
}

// function getUserGreet(name: string, greetMessage: string = 'Hello'): string {
// function getUserGreet({name: string, greetMessage = 'Hello'}: GetUserGreetParams): string {
//     return `${greetMessage} ${name.toUpperCase()}`;
//     // return `${greetMessage} ${name.toUpperCase()}`;
// }

// const result = getUserGreet('Maks');
// const result = getUserGreet({name: 'Maks'});

// console.log(result);

function getUser(id: number): User {
    return {
        name: 'Maks',
        age: 25,
        isAdmin: true
    }
}

const user4 = getUser(1);

// Классы

interface TUser {
    name: string;
    age: number;
    isAdmin: boolean;
}

class User5 implements TUser {
    constructor(
        public name: string,
        public age: number,
        public isAdmin: boolean
    ) {}

    getUserInfo(): void {
        console.log(`Name: ${this.name}, age: ${this.age}, isAdmin: ${this.isAdmin}`);
    }
}

const user5 = new User5('Maks', 25, true);

// Generics

function getFirstArraElement<T>(arr: Array<T>): T {
    return arr[0];
}

const firstElement = getFirstArraElement([1, 2, 3, 4, 5]);

interface User6 {
    id: number;
    name: string;
    email: string;
}

class UserService {
    private users: Array<User6> = [];

    async fetchUsers(): Promise<User[]> {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        this.users = data;

        return data;
    }

    printUsers(): void {
        console.log(this.users);
    }
}

const service = new UserService();
service.fetchUsers().then(() => service.printUsers());
service.printUsers();