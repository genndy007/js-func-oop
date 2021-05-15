// es5 classes
// class
var Person = function (name) {
    // properties
    this.name = name;
    this.showName = function () {
        console.log(this.name);
        privateFunc();
    };
    function privateFunc() {
        console.log('Private');
    }
};
// Method
Person.prototype.sayName = function () {
    console.log('hi, i am ' + this.name);
};
// create instance
var p1 = new Person('patrick');
p1.showName();
p1.sayName();

// inheritance
function Student(name, subject) {
    // call person parameter creation
    Person.call(this, name);
    this.subject = subject;
}
// make inherit from parent
Student.prototype = Object.create(Person.prototype);
// fix constructor
Student.prototype.constructor = Student;

Student.prototype.sayName = function () {
    console.log('Redefine method');
};

// var s1 = new Student('arnold', 'js');
// console.log(s1.name);
