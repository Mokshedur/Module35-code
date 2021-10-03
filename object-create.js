//1.//using object literal
const student = { name: 'Shakib Al Hasan', job: 'cricketer' };
//2.//constructor
const person = new Object();
//console.log(person);
//3. prototype object
//const human = Object.create(null);
const human = Object.create(student);
console.log(human.job);
//4. class make korao amra class thakao object make korta pari
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const peop = new People('Manus', 12)
console.log(peop);
//5. function
function manus(name) {
    this.name = name;

}
const man = new manus('kader');
console.log(man);