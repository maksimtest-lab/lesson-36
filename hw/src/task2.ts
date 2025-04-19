// Необходимо создать интерфейс "Shape" с методом "calculateArea" и "calculatePerimeter". Создать классы "Circle" и "Rectangle", реализующие интерфейс "Shape". Добавьте свойства, необходимые для расчета площади и периметра, и реализовать соответствующие методы для каждого класса. 

interface Shape {
    calculateArea(): number;
    calculatePerimeter(): number;
}

class Circle implements Shape {
    radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }

    calculatePerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

class Rectangle implements Shape {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }

    calculatePerimeter(): number {
        return 2 * (this.width + this.height);
    }
}

const circle = new Circle(3);
const rectangle = new Rectangle(2, 1);

console.log(`Circle area: ${circle.calculateArea()}`);
console.log(`Circle perimeter: ${circle.calculatePerimeter()}`);

console.log(`Rectangle area: ${rectangle.calculateArea()}`);
console.log(`Rectangle perimeter: ${rectangle.calculatePerimeter()}`);