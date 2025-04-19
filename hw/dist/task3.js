"use strict";
// Создайте объединенный тип данных "Pet", который может быть либо объектом "Dog" со свойствами "name" и "breed", либо объектом "Cat" со свойствами "name" и "color". Создайте функцию "printPetInfo", которая будет принимать объект типа "Pet" и выводить информацию о животном в консоль.
function printPetInfo(pet) {
    console.log(`Name: ${pet.name}`);
    if (pet.breed) {
        console.log(`Breed: ${pet.breed}`);
    }
    if (pet.color) {
        console.log(`Color: ${pet.color}`);
    }
}
const dog = {
    name: 'Buddy',
    breed: 'Golden Retriever'
};
const cat = {
    name: 'Whiskers',
    color: 'White'
};
printPetInfo(dog);
printPetInfo(cat);
//# sourceMappingURL=task3.js.map