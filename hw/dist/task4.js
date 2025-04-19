"use strict";
// Создать класс "TodoList" с методом "addTask", который будет добавлять новую задачу в список. Задача должна быть объектом со свойствами "id" и "text". Создать метод "getTasks", который будет возвращать список всех задач с их id и текстом. 
class TodoList {
    constructor() {
        this.tasks = [];
    }
    addTask(task) {
        this.tasks.push(task);
    }
    getTasks() {
        return this.tasks;
    }
}
const todoList = new TodoList();
todoList.addTask({ id: 1, text: 'Task 1' });
todoList.addTask({ id: 2, text: 'Task 2' });
todoList.addTask({ id: 3, text: 'Task 3' });
const tasks = todoList.getTasks();
console.log(tasks);
//# sourceMappingURL=task4.js.map