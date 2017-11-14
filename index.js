let Person = function(name,age) {
    this.name = name;
    this.age = age;
    this.print =  ()=> {
        console.log(`Name:${this.name}, Age:${this.age}`)
    }
};

let james = new Person('james',23);
let mary = new Person('mary',20);

james.print();
//mary.print();

let globalPrint = james.print;//.bind(james);

globalPrint();