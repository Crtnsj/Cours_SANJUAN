# Qu'est-ce que JavaScript

JavaScript est un langage de programmation populaire utilisé pour créer des applications web interactives et dynamiques. Il a été développé dans les années 1990 par Netscape et est désormais largement utilisé sur le web, du côté du client comme du côté du serveur. JavaScript est un langage de programmation orienté objet, interprété et basé sur des événements, ce qui le rend très adapté à la création d'applications interactives. Il est souvent utilisé conjointement avec HTML et CSS pour créer des pages web interactives et des applications web complexes. JavaScript est également utilisé pour la création de serveurs web, d'applications de bureau, de jeux et d'applications mobiles.


# Les bases de JavaScript

## Variables

Les variables sont utilisées pour stocker des données en mémoire. En JavaScript, il existe trois manières de déclarer une variable : `var`, `let` et `const`.

-   `var` est la manière historique de déclarer une variable, mais elle a été remplacée par `let` et `const` dans les versions récentes de JavaScript. Les variables déclarées avec `var` sont accessibles dans tout le contexte de la fonction ou du script où elles ont été déclarées.
    
-   `let` est une manière plus moderne de déclarer une variable. Les variables déclarées avec `let` sont accessibles uniquement dans le bloc de code où elles ont été déclarées.
    
-   `const` est utilisé pour déclarer une variable constante. Son contenu ne peut pas être modifié une fois qu'il a été défini.
    

Voici quelques exemples de déclaration de variables :

```js
var age = 25;
let nom = "Jean";
const pi = 3.14;
```

## Types de données

JavaScript est un langage de programmation non typé, ce qui signifie que les variables n'ont pas besoin d'être déclarées avec un type spécifique. Les types de données courants en JavaScript comprennent les nombres, les chaînes de caractères, les booléens, les tableaux et les objets.

-   Les nombres peuvent être des nombres entiers ou des nombres à virgule flottante. Voici quelques exemples :

```js
let x = 10;
let y = 3.14;
let z = 2.5e6; // 2.5 x 10^6
```

-   Les chaînes de caractères sont des séquences de caractères entourées de guillemets simples ou doubles. Voici quelques exemples :

```js
let message = "Bonjour, monde !";
let nom = "Jean";
```

-   Les booléens ne peuvent être que `true` ou `false`. Voici quelques exemples :

```js
let estVrai = true;
let estFaux = false;
```

-   Les tableaux sont des collections de données. Voici quelques exemples :

```js
let nombres = [1, 2, 3, 4, 5];
let couleurs = ["rouge", "vert", "bleu"];
```

-   Les objets sont des collections de propriétés. Voici quelques exemples :
```js
let personne = {
  nom: "Jean",
  age: 25,
  adresse: {
    ville: "Paris",
    codePostal: 75000
  }
};
```

## Opérateurs

Les opérateurs sont utilisés pour effectuer des opérations sur les variables. Les opérateurs courants en JavaScript comprennent :

-   Les opérateurs arithmétiques (`+`, `-`, `*`, `/`, `%`) pour les opérations mathématiques.
    
-   Les opérateurs de comparaison (`==`, `!=`, `<`, `>`, `<=`, `>=`) pour comparer des variables.
    
-   Les opérateurs logiques (`&&`, `||`, `!`) pour les opérations logiques.
    

## Structures de contrôle

Les structures de contrôle permettent de contrôler le flux d'exécution du code. Les structures de contrôle courantes en JavaScript comprennent :

-   Les boucles `for` et `while` pour répéter des actions plusieurs fois.

```js
for(let i = 0; i < 5; i++) {
  console.log(i);
}

let i = 0;
while(i < 5) {
  console.log(i);
  i++;
}
```

-   Les instructions conditionnelles `if`, `else if` et `else` pour exécuter du code conditionnellement.

```js
let age = 18;
if(age < 18) {
  console.log("Vous êtes mineur.");
} else if(age >= 18 && age < 65) {
  console.log("Vous êtes majeur.");
} else {
  console.log("Vous êtes retraité.");
}
```

-   Les instructions de saut `break` et `continue` pour sortir d'une boucle ou passer à l'itération suivante.

```js
for(let i = 0; i < 10; i++) {
  if(i === 5) {
	console.log(i); //return 5
    break;
  }
}

for(let i = 0; i < 10; i++) {
  if(i === 5) {
    continue;
  }else if(i === 9) {
    console.log(i); //return 9
	break;
  }
}
```

## Fonctions

Les fonctions sont des blocs de code réutilisables qui effectuent un ensemble d'instructions spécifiques. En JavaScript, vous pouvez déclarer une fonction en utilisant le mot clé `function`. Voici un exemple :

```js
function addition(a, b) {
  return a + b;
}

let resultat = addition(2, 3);
console.log(resultat); // affiche 5
```

### Fonctions fléchées

Les fonctions fléchées sont une nouvelle manière de déclarer des fonctions en JavaScript. Elles sont plus courtes que les fonctions classiques et sont souvent utilisées pour les fonctions anonymes. Voici un exemple :

```js
let addition = (a, b) => {
  return a + b;
};

let resultat = addition(2, 3);
console.log(resultat); // affiche 5
```

## Événements

Les événements sont des actions qui se produisent dans une application, telles que le clic sur un bouton ou la soumission d'un formulaire. En JavaScript, vous pouvez gérer les événements en utilisant les écouteurs d'événements. Voici un exemple :

```js
let bouton = document.querySelector("#bouton");
bouton.addEventListener("click", function() {
  alert("Le bouton a été cliqué !");
});
```
## Conclusion

JavaScript est un langage de programmation puissant et polyvalent qui est largement utilisé pour créer des applications web interactives et dynamiques. En comprenant les bases de JavaScript, vous pouvez commencer à créer des applications web simples et à explorer les nombreuses bibliothèques et frameworks JavaScript disponibles pour faciliter le développement d'applications web complexes.