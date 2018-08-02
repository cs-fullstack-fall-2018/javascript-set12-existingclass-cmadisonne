class Person {
    constructor(name, age, weight, height) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
    }

    bodyMassIndex(){
        var heightDividedByHundred = this.height / 100.0;
        return this.weight / ( heightDividedByHundred * heightDividedByHundred );
    }

    becomeOlder() {
        this.age = this.age + 1;
    }

    printPerson() {
        alert(this.name + ", age " + this.age + " years");
    }

}

function main() {
var firstPerson = new Person("Lotus", 77, 135, 6);
var secondPerson = new Person("Maddi", 20, 120, 5);
alert("Lotus's BMI: " + firstPerson.bodyMassIndex());
alert("Maddi's BMI: " + secondPerson.bodyMassIndex());
var personArray = [firstPerson , secondPerson];
personArray[0].printPerson();

}

main();