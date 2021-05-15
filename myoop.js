// class es5
var Shape = function (x, y) {
    this.x = x;
    this.y = y;
};

// public method
Shape.prototype.changePosition = function (x, y) {
    this.x = x;
    this.y = y;
};
// other public method that we will redefine in child class
Shape.prototype.showShapeInfo = function () {
    console.log(`X: ${this.x}, Y: ${this.y}`);
};

// child class
const Rectangle = function (x, y, width, height) {
    Shape.call(this, x, y);
    this.width = width;
    this.height = height;
    // private method via closure
    function calculateArea() {
        return width * height;
    }
    // public property
    this.area = calculateArea();
};
// Make inheritance correct
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

// Redefine function - polymorphism
Rectangle.prototype.showShapeInfo = function () {
    console.log(
        `Rectangle: x=${this.x}, y=${this.y} width=${this.width},
         height=${this.height}, area=${this.area}`
    );
};

const sh1 = new Shape(1, 2);
sh1.changePosition(3, 4);
sh1.showShapeInfo();

const r1 = new Rectangle(2, 3, 40, 50);
r1.changePosition(5, 6);
r1.showShapeInfo();

// class es6
class TransportParent {
    constructor(cost, age) {
        this.cost = cost;
        this.age = age;
    }

    transportAffirm() {
        console.log('it is a transport');
    }
    showInfo() {
        console.log(`cost: ${this.cost}, age: ${this.age}`);
    }
}
// child class
class Car extends TransportParent {
    // experimental feature of really private fields
    #country = 'japan';

    constructor(cost, age, brand, model, owner) {
        super(cost, age);
        this.brand = brand;
        this.model = model;
        // meant to be private, but can be accessed
        this._owner = owner;
    }
    // redefine method
    showInfo() {
        console.log(
            `car: ${this.brand} ${this.model}, country: ${this.#country}`
        );
    }
}

const tp1 = new TransportParent(1500, 50);
tp1.showInfo();
const c1 = new Car(1000, 20, 'toyota', 'supra', 'felix');
c1.showInfo();
