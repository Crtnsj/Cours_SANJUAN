React est une bibliothèque JavaScript pour créer des interfaces utilisateur. Elle utilise une approche facile pour créer des éléments d'interface utilisateur, elle est rapide et performante grâce à l'utilisation du virtual DOM. Elle est souvent utilisée avec d'autres bibliothèques pour gérer l'état de l'application, la navigation et la création d'applications web côté serveur

# Les composants

Les composants sont la base de React. Ce sont des éléments d'interface utilisateur réutilisables qui permettent de structurer l'application sous forme de blocs indépendants. Les composants peuvent être des éléments simples, tels qu'un bouton ou un champ de saisie, ou des éléments plus complexes, tels qu'un formulaire ou une liste de tâches.

En React, il existe deux types de composants : les composants fonctionnels et les composants de classe (que nous abordons pas dans ce cours).

1. Les composants fonctionnels :  
   Les composants fonctionnels sont des fonctions JavaScript qui retournent un élément d'interface utilisateur. Ils sont utilisés pour créer des éléments d'interface utilisateur simples qui ne nécessitent pas de gestion d'état complexe. Les composants fonctionnels ne disposent pas d'un cycle de vie et ne peuvent pas contenir d'état interne.

Voici un exemple de composant fonctionnel :

```js
function Button(props) {
  return <button onClick={props.onClick}>{props.label}</button>;
}
```

Dans cet exemple, le composant "Button" est défini comme une fonction JavaScript qui prend les propriétés (props) "onClick" et "label" en paramètres, et qui retourne un élément de bouton (button) avec ces propriétés.

# Les props

Les props (abréviation de "propriétés") sont des paramètres passées à un composant pour le configurer et lui permettre d'afficher des données différentes. Les props sont souvent utilisées pour transmettre des données d'un composant parent à un composant enfant.

Les props sont définies en tant qu'objet JavaScript avec des paires clé-valeur. Les clés représentent le nom de la propriété et les valeurs représentent la valeur de la propriété. Les props sont passées au composant comme des attributs HTML, par exemple :

```js
<MyComponent name="John" age={30} />
```

Dans cet exemple, "name" et "age" sont des props passées au composant "MyComponent". "name" est une chaîne de caractères, tandis que "age" est un nombre. Le composant peut accéder à ces props en utilisant l'objet "props" passé en paramètre, par exemple :

```js
function MyComponent(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}
```

Dans cet exemple, le composant "MyComponent" utilise les props "name" et "age" pour afficher des informations sur l'utilisateur. Les props sont accessibles via l'objet "props" passé en paramètre de la fonction et peuvent être affichées à l'aide de la syntaxe de balisage JSX.

# Le JSX

Avec JSX, vous pouvez décrire les éléments d'interface utilisateur en utilisant des balises HTML dans du code JavaScript. Par exemple, voici comment vous pouvez définir un bouton en JSX :

```jsx
<button className="btn btn-primary" onClick={handleClick}>
  Cliquez ici
</button>
```

Dans cet exemple, la balise "button" est utilisée pour créer un élément de bouton en JSX. La propriété "className" est utilisée pour définir la classe CSS du bouton, tandis que la propriété "onClick" est utilisée pour définir le gestionnaire d'événements de clic.

JSX permet également d'utiliser des expressions JavaScript pour définir des valeurs dynamiques dans les éléments d'interface utilisateur. Par exemple, vous pouvez utiliser une expression JavaScript pour afficher le contenu d'une variable dans un élément :

```jsx
<p>Bienvenue, {username} !</p>
```

Dans cet exemple, la variable "username" est insérée dans un élément de paragraphe avec du texte statique pour créer un message de bienvenue dynamique.

Le code JSX est ensuite compilé en code JavaScript standard à l'aide d'un transpileur tel que Babel. Le code JavaScript généré utilise les fonctions de React pour créer et mettre à jour les éléments d'interface utilisateur.

# Le state

Le state (état) est un objet qui contient les données internes d'un composant en React. Il peut être utilisé pour stocker des données qui peuvent changer au fil du temps, telles que le contenu d'un formulaire, le résultat d'une recherche ou l'état d'un élément d'interface utilisateur.

Le state est défini dans le constructeur d'un composant de classe en utilisant la méthode "setState" de React. Voici un exemple de composant qui utilise le state pour stocker le contenu d'un champ de saisie :

```tsx
function App() {
  let [optionLogin, setoptionLogin] = useState(false);
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    if (optionLogin === true) {
      setoptionLogin(false);
    } else {
      setoptionLogin(true);
    }
  };
  return (
    <>
            {optionLogin ? <SignUp /> : <SignIn />}      <a
        href=""
        onClick={handleClick}
      >
                {optionLogin ? "Se connecter" : "S'inscrire"}     {" "}
      </a>   {" "}
    </>
  );
}
```

Dans cet exemple le state "optionLogin" est initialiser avec la valeur par défaut : false. Ce state sert à afficher le composant SignIn ou SignUp en fonction de son état. Son état change grâce au "handleClick" appelé via le onClick de la balise `<a>`.

Il est important de noter que le state est immuable, ce qui signifie qu'il ne doit pas être modifié directement. Au lieu de cela, la méthode "setState" de React doit être utilisée pour mettre à jour le state. La méthode "setState" fusionne les nouvelles valeurs de state avec les valeurs existantes et déclenche une mise à jour de l'interface utilisateur.

Le state peut également être passé en tant que prop à des composants enfants. Cela permet aux composants enfants de recevoir des données de l'état du composant parent et de réagir aux changements dans l'état.

# Les évents

Les événements peuvent être déclenchés par différents types d'actions, tels que des clics de souris, des appuis de touches, des mouvements de souris, des changements de taille ou de position d'un élément, etc. Les événements peuvent être capturés par les éléments du DOM (Document Object Model) de la page web, qui sont des représentations en mémoire des éléments HTML.

En React, les événements sont gérés en utilisant des handlers (ou gestionnaires d'événements), qui sont des fonctions qui sont appelées en réponse à un événement particulier. Les handlers sont généralement définis en tant que méthodes d'un composant de classe ou en tant que fonctions dans un composant fonctionnel.

Voici un exemple de composant React qui utilise un handler de clic pour modifier l'état du composant lorsqu'un bouton est cliqué :

```jsx
import React, { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>{count} fois cliqué</p>
      <button onClick={handleClick}>Cliquez ici</button>
    </div>
  );
}
```

Dans cet exemple, l'état du composant est stocké dans la variable "count", qui est initialisée à 0 à l'aide du hook d'état "useState". Lorsque l'utilisateur clique sur le bouton, le handler "handleClick" est appelé, ce qui incrémente la valeur de "count" en appelant la fonction "setCount". La nouvelle valeur de "count" est alors affichée dans le paragraphe.

L'événement de clic est capturé par l'élément "button", qui est lié au handler "handleClick" en utilisant l'attribut "onClick". Lorsque l'utilisateur clique sur le bouton, l'événement de clic est déclenché et le handler est appelé, ce qui modifie l'état du composant.

# Les handlers

En programmation, un handler est une fonction ou une méthode qui est appelée en réponse à un événement particulier, tel qu'un clic de souris, une pression de touche ou une soumission de formulaire. En React, les handlers sont souvent utilisés pour gérer les interactions de l'utilisateur avec les éléments d'interface utilisateur.

Par exemple, voici un composant React qui utilise un handler de clic pour afficher une alerte lorsqu'un bouton est cliqué :

```jsx
import React from 'react';

function handleClick() {
  alert('Le bouton a été cliqué !');
}

function MyButton() {
  return <button onClick={handleClick}>Cliquez ici</button>;
}
```

Dans cet exemple, la fonction "handleClick" est définie pour afficher une alerte lorsque le bouton est cliqué. La méthode "onClick" est utilisée pour lier la fonction "handleClick" au bouton. Lorsque l'utilisateur clique sur le bouton, la fonction "handleClick" est appelée, ce qui affiche une alerte dans le navigateur.

# Les terniaires

Les opérateurs ternaires sont une forme concise et pratique d'écriture de conditions dans de nombreux langages de programmation, y compris JavaScript et donc React. Ils permettent de simplifier la syntaxe d'une instruction conditionnelle en utilisant une expression qui renvoie une valeur en fonction de la condition.

En React, les opérateurs ternaires sont souvent utilisés pour conditionner l'affichage d'un élément d'interface utilisateur en fonction de l'état d'un composant ou d'une autre condition. Voici un exemple d'utilisation d'un opérateur ternaire pour afficher un message différent en fonction de l'état d'un composant :

```tsx
import React, { useState } from 'react';

function MyComponent() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div>
      {showMessage ? <p>Le message est affiché.</p> : <p>Le message n'est pas affiché.</p>}
      <button onClick={() => setShowMessage(!showMessage)}>Afficher/Masquer le message</button>
    </div>
  );
}
```

Dans cet exemple, l'état du composant est stocké dans la variable "showMessage". Si "showMessage" est "true", le composant affiche le message "Le message est affiché.". Si "showMessage" est "false", le composant affiche le message "Le message n'est pas affiché.". L'affichage est conditionné par l'opérateur ternaire qui utilise la syntaxe suivante :

```tsx
{condition ? valeurSiVraie : valeurSiFausse}
```

# L'affichage conditionnel

L'affichage conditionnel est une technique courante en programmation qui consiste à afficher des éléments de l'interface utilisateur en fonction de l'état d'un composant ou d'une autre condition. En React, l'affichage conditionnel est souvent utilisé pour afficher ou masquer des éléments d'interface utilisateur en réponse à des événements ou à des changements d'état.

Utilisation de l'opérateur ternaire : L'opérateur ternaire est une syntaxe concise qui permet d'afficher un élément en fonction d'une condition. Voici un exemple :

```tsx
import React, { useState } from 'react';

function MyComponent() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div>
      {showMessage ? <p>Le message est affiché.</p> : null}
      <button onClick={() => setShowMessage(!showMessage)}>Afficher/Masquer le message</button>
    </div>
  );
}
```

Dans cet exemple, l'état du composant est stocké dans la variable "showMessage". Si "showMessage" est "true", le composant affiche le message "Le message est affiché." en utilisant l'opérateur ternaire. Sinon, le composant n'affiche rien en utilisant la valeur "null". L'affichage est conditionné par le changement de l'état du composant lorsqu'on clique sur le bouton.