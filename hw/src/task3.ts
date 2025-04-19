// Создайте объединенный тип данных "Pet", который может быть либо объектом "Dog" со свойствами "name" и "breed", либо объектом "Cat" со свойствами "name" и "color". Создайте функцию "printPetInfo", которая будет принимать объект типа "Pet" и выводить информацию о животном в консоль.

type Pet = {
    name: string;
    breed?: string;
    color?: string;
}

function printPetInfo(pet: Pet): void {
    console.log(`Name: ${pet.name}`);
    if (pet.breed) {
        console.log(`Breed: ${pet.breed}`);
    }
    if (pet.color) {
        console.log(`Color: ${pet.color}`);
    }
}

const dog: Pet = {
    name: 'Buddy',
    breed: 'Golden Retriever'
};

const cat: Pet = {
    name: 'Whiskers',
    color: 'White'
};

printPetInfo(dog);
printPetInfo(cat);