"use strict";
// Необходимо создать интерфейс "Shape" с методом "calculateArea" и "calculatePerimeter". Создать классы "Circle" и "Rectangle", реализующие интерфейс "Shape". Добавьте свойства, необходимые для расчета площади и периметра, и реализовать соответствующие методы для каждого класса. 
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}
const circle = new Circle(3);
const rectangle = new Rectangle(2, 1);
console.log(`Circle area: ${circle.calculateArea()}`);
console.log(`Circle perimeter: ${circle.calculatePerimeter()}`);
console.log(`Rectangle area: ${rectangle.calculateArea()}`);
console.log(`Rectangle perimeter: ${rectangle.calculatePerimeter()}`);
//# sourceMappingURL=task2.js.map