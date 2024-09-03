const person = {
    name: 'Uzayri',
    age: 25
};

function printInfo (name, age) {
    console.log(`Name: ${this.name}, Age: ${this.age}`)
};

printInfo.call(person);


