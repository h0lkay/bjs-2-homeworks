// 1 задача
function parseCount(value) {
    if (isNaN(Number.parseFloat(value))) {
        throw new Error("Невалидное значение");
    } else {
        return Number.parseFloat(value)
    }
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch(error) {
        return error;
    }
}

// 2 задача
class Triangle{
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if (!this.isValidTriangle()) {
        throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    isValidTriangle() {
        return (
        this.a + this.b > this.c &&
        this.a + this.c > this.b &&
        this.b + this.c > this.a
        );
    }
    
    get perimeter() {
        return this.a + this.b + this.c;
    }

    get area() {
        let semiperimeter = (this.a + this.b + this.c) / 2;
        return +Math.sqrt(semiperimeter * 
            (semiperimeter - this.a) * (semiperimeter - this.b) * (semiperimeter - this.c)).toFixed(3);
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch(error) {
        return {
            get area() {
                return "Ошибка! Треугольник не существует";
            },
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            }
        };
    }
    
}