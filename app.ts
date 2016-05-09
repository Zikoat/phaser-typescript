///<reference path='./node_modules/phaser/typescript/phaser.d.ts' />
interface Person {
    firstName: string;
    lastName: string;
}

class Student implements Person {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}
  

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

var user = new Student("Zikoort", "v", "goot");

console.log(user.fullName);