
TypeScript est un langage de programmation qui ajoute des fonctionnalités avancées à JavaScript telles que les types de données statiques, les classes et les interfaces, ainsi que des fonctionnalités de langage avancées telles que les génériques, les modules et les décorateurs. Son objectif principal est d'améliorer la qualité et la maintenabilité du code JavaScript en détectant les erreurs de manière précoce grâce aux types de données statiques

Pour installer TypeScript dans un projet il faut exécuter la commander suivante :

```node
pnpm add typescript -D
```

# tsconfig.json

Afin de configurer TypeScript il faut créer et modifier le fichier "tsconfig.json". Voici un exemple de configuration : 

```json
{
    "compilerOptions": {
        "target": "ES2022",
        "outDir": "",
        "strict": true,
        "noUnusedLocals": true,
        "noImplicitReturns": true,
        "removeComments": true,
        "sourceMap": true
    },
}
```

# Types de base

TypeScript est un langage de programmation typé statiquement, ce qui signifie que chaque variable doit avoir un type déclaré avant d'être utilisée. Les types de base en TypeScript incluent :

- `number` : pour les nombres, entiers ou décimaux.
- `string` : pour les chaînes de caractères.
- `boolean` : pour les valeurs booléennes `true` ou `false`.
- `null` et `undefined` : pour les valeurs nulles ou non définies.
- `void` : pour les fonctions qui ne retournent aucune valeur.

Par exemple, pour déclarer une variable de type `number`, vous pouvez écrire :

```ts
let myNumber: number = 42;
```

De même, pour déclarer une variable de type `string`, vous pouvez écrire :

```ts
let myString: string = "Bonjour";
```

# Les interfaces

Les interfaces sont un concept important en TypeScript, elles vous permettent de décrire la forme d'un objet et de spécifier les types de ses propriétés.

Une interface est une sorte de contrat qui décrit les propriétés et les méthodes qu'un objet doit avoir pour être considéré comme compatible avec cette interface.

Voici un exemple simple d'interface en TypeScript :

```ts
interface Person {
  firstName: string;
  lastName: string;
  age: number;
}
```

Cette interface `Person` décrit un objet avec trois propriétés : `firstName`, `lastName` et `age`, toutes de types différents. Pour utiliser cette interface, vous pouvez créer un objet qui respecte ces propriétés :

```ts
let person: Person = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};
```

Vous pouvez également utiliser des interfaces pour décrire des fonctions, en spécifiant les types de ses paramètres et de sa valeur de retour :

```ts
interface MathFunction {
  (x: number, y: number): number;
}

let add: MathFunction = function(x: number, y: number): number {
  return x + y;
};
```

Dans cet exemple, l'interface `MathFunction` décrit une fonction qui prend deux paramètres de type `number` et retourne une valeur de type `number`. La fonction `add` respecte cette interface, elle prend deux paramètres et retourne leur somme.

# Les classes

Les classes sont un concept important en programmation orientée objet, et TypeScript prend en charge les classes pour la création d'objets avec des propriétés et des méthodes.

Voici un exemple simple de classe en TypeScript :

```ts
class Person {
  firstName: string;
  lastName: string;
  age: number;

  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName(): string {
    return this.firstName + " " + this.lastName;
  }
}
```

Cette classe `Person` a trois propriétés : `firstName`, `lastName` et `age`, toutes de type `string` ou `number`. Elle a également un constructeur qui prend les valeurs des propriétés lors de la création d'un nouvel objet, ainsi qu'une méthode `getFullName()` qui retourne le nom complet de la personne.

Pour créer un nouvel objet `Person`, vous pouvez utiliser le mot-clé `new` et passer les valeurs des propriétés au constructeur :

```ts
let person = new Person("John", "Doe", 30);
console.log(person.getFullName()); // affiche "John Doe"
```

Vous pouvez également hériter des propriétés et des méthodes d'une classe parente en utilisant le mot-clé `extends` :

```ts
class Employee extends Person {
  salary: number;

  constructor(firstName: string, lastName: string, age: number, salary: number) {
    super(firstName, lastName, age);
    this.salary = salary;
  }

  getSalary(): number {
    return this.salary;
  }
}

let employee = new Employee("Jane", "Doe", 25, 50000);
console.log(employee.getFullName()); // affiche "Jane Doe"
console.log(employee.getSalary()); // affiche 50000
```

Dans cet exemple, la classe `Employee` hérite des propriétés et des méthodes de la classe `Person`, et ajoute une propriété `salary` et une méthode `getSalary()`.

# Les fonctions 

TypeScript prend en charge les fonctions de JavaScript, y compris les fonctions fléchées, et vous permet de spécifier les types des paramètres et de la valeur de retour.

Voici un exemple simple de fonction en TypeScript :

```ts
function add(x: number, y: number): number {
  return x + y;
}
```

Cette fonction `add` prend deux paramètres de type `number` et retourne leur somme, qui est également de type `number`. Vous pouvez l'appeler de la même manière qu'une fonction JavaScript :

```ts
let result = add(2, 3);
console.log(result); // affiche 5
```

Vous pouvez également utiliser des fonctions fléchées, qui sont une syntaxe plus concise pour les fonctions :

```ts
let multiply = (x: number, y: number): number => {
  return x * y;
}
```

Dans cet exemple, la fonction `multiply` prend deux paramètres de type `number` et retourne leur produit, qui est également de type `number`. Vous pouvez l'appeler de la même manière qu'une fonction JavaScript :

```ts
let result = multiply(2, 3);
console.log(result); // affiche 6
```

# Comment typer les objets

En TypeScript, vous pouvez typer les objets à l'aide des interfaces ou des types.

Voici un exemple de typage d'un objet à l'aide d'une interface :

```ts
interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

let person: Person = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};
```

Dans cet exemple, nous avons créé une interface `Person` qui décrit la forme de l'objet que nous voulons typer. L'interface spécifie que l'objet doit comporter trois propriétés : `firstName`, `lastName` et `age`, toutes avec des types spécifiques.

Ensuite, nous avons créé un objet `person` qui respecte cette interface en lui attribuant des valeurs pour les propriétés `firstName`, `lastName` et `age`. Nous avons également déclaré le type de cet objet en utilisant la syntaxe `let person: Person`, ce qui garantit que l'objet respecte bien les propriétés et les types spécifiés dans l'interface `Person`.

Vous pouvez également typer un objet à l'aide d'un type :

```ts
type Person = {
  firstName: string;
  lastName: string;
  age: number;
}

let person: Person = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};
```

Dans cet exemple, nous avons créé un type `Person` qui décrit la forme de l'objet que nous voulons typer. Le type spécifie également que l'objet doit comporter trois propriétés : `firstName`, `lastName` et `age`, toutes avec des types spécifiques.

Ensuite, nous avons créé un objet `person` qui respecte ce type en lui attribuant des valeurs pour les propriétés `firstName`, `lastName` et `age`. Nous avons également déclaré le type de cet objet en utilisant la syntaxe `let person: Person`, ce qui garantit que l'objet respecte bien les propriétés et les types spécifiés dans le type `Person`.