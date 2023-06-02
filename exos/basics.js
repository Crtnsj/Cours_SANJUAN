//ex 1
var age;
age = 12;
var nom;
nom = "fjvureukncrmferisucr";
var estActif;
estActif = true;
//ex 2
var addition = function (a, b) {
    return (a + b);
};
console.log(addition(2, 5));
var concat = function (a, b) {
    return (a + b);
};
console.log(concat("blabla", "esfhs"));
//ex 3
var tableau;
tableau = [1, 5, 7];
for (var i = 0; i < tableau.length; i++) {
    console.log(tableau[i]);
}
var usr1 = {
    name: "sdfncjsdf",
    age: 12,
};
console.log(usr1);
//ex 5 
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        console.log("Je m'appelle ".concat(this.name, " et j'ai ").concat(this.age, " ans"));
    };
    return Person;
}());
var person1 = new Person("Corentin", 17);
console.log(person1);
