# Qu'est-ce que npm ?

npm (Node Package Manager) est un gestionnaire de paquets pour le langage de programmation JavaScript. Il est utilisé pour installer, mettre à jour et gérer les dépendances des packages JavaScript dans un projet. npm est installé automatiquement lorsque Node.js est installé sur un ordinateur. Il permet aux développeurs de partager et de réutiliser facilement des packages de code JavaScript, ce qui facilite le développement d'applications et de projets web. npm est également une plateforme de publication pour les développeurs qui souhaitent distribuer leurs packages JavaScript au public.

# Initialiser npm
```js
npm init
```
# SASS
## Définition :

Sass est un langage de feuilles de style en cascade (CSS) qui permet de créer des styles CSS de manière plus efficace et plus facile à maintenir. Il offre des fonctionnalités supplémentaires par rapport au CSS standard, telles que les variables, les mixins, les fonctions, les boucles et les conditions.

Voici quelques-unes des fonctionnalités les plus utiles de Sass :

-   Les variables : Sass permet de définir des variables pour les couleurs, les tailles de police, les marges, etc., ce qui permet de les réutiliser facilement et de les modifier rapidement si nécessaire.
    
-   Les mixins : Sass permet de définir des mixins, qui sont des blocs de code réutilisables. Ils sont utiles pour définir des styles récurrents, tels que des grilles de mise en page.
    
-   Les fonctions : Sass permet de définir des fonctions qui peuvent être utilisées pour calculer des valeurs, telles que la taille de police en fonction de la taille d'écran.
    
-   Les boucles : Sass permet de créer des boucles pour générer automatiquement du code, par exemple pour générer une grille de mise en page.
    
-   Les conditions : Sass permet d'utiliser des conditions pour générer des styles différents en fonction de certaines conditions, telles que la taille d'écran ou le type d'élément HTML.
    

En somme, Sass permet de créer des styles CSS plus rapidement et plus efficacement en utilisant des fonctionnalités avancées qui simplifient le code et le rendent plus facile à maintenir.

## Installation :

1.  Installez le paquet Sass en utilisant la commande suivante :

``` node 
npm -D install sass
```
 
Cette commande installe Sass et ajoute le paquet Sass dans votre fichier package.json.

## Utilisation :

1. Pour utiliser SASS on utilise la méthode 7-1. Cette méthode consiste à créer un dossier par thematiques. Les 7 dossier à créer sont : 

-   `base/` : contient les fichiers de base qui définissent les fondations de votre site, tels que la police de caractères et les normes que vous voulez appliquer sur tout votre site.
    
-   `utils/` : contient les fichiers de variables, fonctions, mixins et %placeholders pour les extensions que vous utilisez dans tout votre code.
    
-   `layouts/` : contient les blocs BEM qui définissent les mises en page réutilisables, telles qu'un header pour les mises en page de grande taille ou un footer.
    
-   `components/` : contient les blocs BEM qui sont plus indépendants, tels que des boutons ou des formulaires.
    
-   `pages/` : contient les blocs de code qui ne s'appliquent qu'à une seule page, tels que des sections spécifiques ou des mises en page personnalisées.
    
-   `themes/` : contient le code spécifique à un thème, tel qu'un style personnalisé pour Noël ou pour l'été.
    
-   `vendors/` : contient les fichiers CSS externes, tels que les frameworks tels que Bootstrap ou jQuery UI, que vous utilisez dans votre code.

En résumé, cette organisation vous permet de mieux organiser votre code CSS en fonction de sa fonctionnalité et de sa réutilisabilité, ce qui facilite la maintenance et le développement de votre site web.

Exemple de structure SASS : 

![[Pasted image 20230331213832.png]]

2.  Ajoutez un script à votre fichier package.json pour exécuter Sass. Par exemple :
  
```js
"scripts": {

"sass": "sass --watch ./sass/main.scss:./css/style.css ./sass/connexion.scss:./css/style_connexion.css" 
}
```

 Dans cet exemple, le script "sass" utilise la commande Sass pour compiler le fichier main.scss situé dans le répertoire sass/main.scss et générer le fichier style.css dans le répertoire css/.
 
3.  Exécutez le script en utilisant la commande suivante :

```node
npm run sass
```

Cette commande exécute le script "sass" que vous avez ajouté à votre fichier package.json. Sass compile le fichier main.scss en main.css et génère le fichier dans le répertoire de destination que vous avez spécifié dans le script.   

# EXPRESS
## Définition :

Express est une bibliothèque JavaScript pour Node.js qui permet de créer des applications web de manière rapide et efficace. Il offre un ensemble de fonctionnalités pour faciliter la création de serveurs web et la gestion des routes HTTP.

Voici quelques-unes des principales fonctionnalités d'Express :

-   La gestion des routes HTTP : Express permet de définir facilement des routes pour les requêtes HTTP GET, POST, PUT et DELETE.
    
-   La gestion des middleware : Express offre un système de middleware qui permet d'intercepter et de modifier les requêtes et les réponses HTTP avant qu'elles ne soient envoyées au client ou au serveur.
    
-   L'utilisation de templates : Express peut utiliser des moteurs de templates pour générer du contenu dynamique sur les pages web.
    
-   La gestion des sessions : Express permet de gérer facilement les sessions utilisateur et de stocker des données de session sur le serveur.
    
-   La gestion des erreurs : Express offre des mécanismes pour gérer les erreurs et les exceptions dans les applications web.
    

En somme, Express permet de créer rapidement des applications web robustes et évolutives en offrant des fonctionnalités essentielles pour la gestion des requêtes HTTP, des sessions utilisateur et des erreurs.

## Installation :

1. Pour installer express executer cette commande :
```node
npm install express
```
2. Modifier à la main le fichier package.json pour ajouter la ligne suivante:
```json
"type": "module",
```
Cette ligne est importante pour l'import du paquet dans les fichier js.

## Utilisation :

1.  Créez un fichier app.js dans votre répertoire de projet.
    
2.  Dans votre fichier app.js, ajoutez les lignes suivantes :
    
```js
import express from 'express'; 
const app = express();

app.get('/', function(req, res) {   
res.send('Hello World!'); });

app.listen(3000, function() 
	{   console.log('Le serveur est en cours d\'exécution sur le port 3000.'); 
});//Le port 3000 est le port standart lorsque l'on développe une application
```

7.  Enregistrez le fichier et exécutez la commande `node app.js` dans votre terminal.
    
8.  Ouvrez un navigateur et allez à `http://localhost:3000` pour voir "Hello World!" s'afficher.

# NODEMON
## Définition :

Nodemon est un outil de développement pour les applications Node.js qui permet de surveiller les fichiers du projet et de redémarrer automatiquement le serveur lorsqu'il y a des changements dans le code. Cela évite de devoir redémarrer manuellement le serveur à chaque fois que vous effectuez une modification dans votre code, ce qui peut être fastidieux et prendre du temps.

Avec Nodemon, vous pouvez simplement lancer votre serveur une fois et il se redémarrera automatiquement chaque fois que vous apportez des modifications à votre code. Cela vous permet de gagner du temps et d'améliorer votre productivité en vous concentrant sur le développement plutôt que sur la gestion du serveur.

En somme, Nodemon est un outil pratique pour les développeurs Node.js qui souhaitent gagner du temps et améliorer leur efficacité en automatisant le processus de redémarrage du serveur lors de la modification de leur code.

## Installation :

Pour utiliser Nodemon, vous devez d'abord installer Nodemon globalement sur votre machine en utilisant la commande suivante :

```node
npm install -D nodemon
```

## Utilisation :

Vous pouvez utiliser Nodemon pour surveiller et redémarrer automatiquement votre application en utilisant la commande suivante :

```node
nodemon app.js
```

Dans cet exemple, `app.js` est le nom de votre fichier principal qui contient le code de votre application. Vous pouvez remplacer `app.js` par le nom de votre fichier si celui-ci est différent.

Lorsque vous lancez la commande `nodemon app.js`, Nodemon surveillera les fichiers de votre projet et redémarrera automatiquement votre serveur chaque fois qu'il y aura des modifications dans le code. Vous pouvez ainsi modifier et tester votre code en temps réel, sans avoir à arrêter et redémarrer manuellement votre serveur à chaque fois.

Nodemon prend en charge plusieurs options pour personnaliser son comportement, telles que l'ignorance de certains fichiers ou dossiers, la spécification du port d'écoute, etc. Vous pouvez trouver plus d'informations sur l'utilisation de Nodemon et ses options dans la documentation officielle.

# CONCURRENTLY
## Définition : 

Concurrently est un package npm qui permet d'exécuter plusieurs commandes en parallèle dans un terminal unique. Cela peut être utile lorsque vous travaillez sur des projets qui nécessitent l'exécution de plusieurs tâches en même temps, comme l'exécution d'un serveur et d'un compilateur de code.

## Installation :

Vous pouvez l'installer en utilisant la commande npm suivante :

```js
npm install -D concurrently
```

## Utilisation :

1.  Ouvrez votre fichier package.json et ajoutez un script qui exécutera les deux scripts en même temps en utilisant concurrently. Par exemple :
    
```json
	"scripts": {   "start": "concurrently \"npm run script1\" \"npm run script2\"" }
```

Dans cet exemple, le script "start" exécutera deux scripts appelés "script1" "script2" en même temps.

2.  Exécutez le script en utilisant la commande npm suivante :

```node
npm start
```

Cela exécutera les deux scripts simultanément et affichera les sorties de chaque script dans la même console.

# BODYPARSER 

Body-parser est un middleware Node.js qui permet de récupérer les données envoyées dans le corps d'une requête HTTP. Lorsqu'un client envoie une requête POST, PUT ou DELETE à un serveur Node.js, les données peuvent être incluses dans le corps de la requête au format JSON, XML, texte brut ou même des fichiers. Body-parser permet de récupérer ces données et de les transformer en objet JavaScript utilisable.

Body-parser fonctionne en analysant le corps de la requête HTTP et en extrayant les données qu'il contient. Il peut également traiter différentes encodages de corps, tels que l'URL-encoded, le JSON et le texte brut. Une fois les données extraites, Body-parser les rend disponibles sous forme d'objet JavaScript dans la propriété "req.body" de la requête.

L'utilisation de Body-parser est essentielle pour les applications web qui ont besoin de traiter des données envoyées par les clients, comme les formulaires, les systèmes de gestion de contenu ou les API. Sans Body-parser, il serait difficile et fastidieux de traiter manuellement les données envoyées dans le corps de chaque requête.

Pour utiliser Body-parser, vous devez l'installer en tant que package npm en utilisant la commande suivante :

```js
npm install body-parser
```

Ensuite, vous pouvez utiliser Body-parser dans votre application Node.js en ajoutant le middleware approprié à votre application. Par exemple, pour utiliser Body-parser pour traiter les données envoyées en JSON, vous pouvez ajouter le middleware suivant à votre application :

```js
import bodyParser from 'body-parser';  

app.use(bodyParser.json());
```

Cela permettra à Body-parser d'analyser le corps de chaque requête entrante et d'extraire les données JSON, les rendant disponibles dans la propriété "req.body" de la requête.

# MYSQL2 
## Définition :

Mysql2 est un pilote de base de données pour Node.js qui permet de se connecter et d'interagir avec une base de données MySQL. Il permet à votre application Node.js de se connecter à une base de données MySQL, d'envoyer des requêtes SQL et de récupérer les résultats de ces requêtes.

Le module Mysql2 offre des fonctionnalités améliorées par rapport au module MySQL de base pour Node.js, notamment des performances accrues et une meilleure sécurité. Il prend également en charge les fonctionnalités MySQL avancées telles que les connexions SSL et les transactions.

Mysql2 permet d'établir une connexion à la base de données en utilisant des paramètres de configuration tels que l'hôte, le port, le nom d'utilisateur et le mot de passe. Une fois la connexion établie, Mysql2 permet d'envoyer des requêtes SQL à la base de données en utilisant des fonctions telles que `query()` pour exécuter des requêtes SQL et `execute()` pour exécuter des instructions préparées.

En résumé, Mysql2 permet aux applications Node.js d'interagir avec une base de données MySQL de manière efficace, sécurisée et fiable, en fournissant un moyen simple et pratique de se connecter à la base de données, d'envoyer des requêtes SQL et de récupérer les résultats.

## Installation :

Pour l'installer il faut executer :

```js
npm install mysql2
```

## Utilisation :

Vous devez inclure le module dans votre code en utilisant la commande `require` :

```js
import mysql from 'mysql2';
```

Pour établir une connexion à la base de données, vous pouvez utiliser la fonction `createConnection()` de Mysql2 :

```js
const connection = mysql.createConnection({
host: 'localhost',   
user: 'yourusername',   
password: 'yourpassword',   
database: 'yourdatabase' 
});
```

Dans cet exemple, nous spécifions l'hôte, le nom d'utilisateur, le mot de passe et le nom de la base de données à laquelle nous voulons nous connecter. Vous pouvez également spécifier d'autres options de configuration, telles que le port et le protocole.

Une fois que vous avez établi une connexion, vous pouvez envoyer des requêtes SQL en utilisant la méthode `query()` :

```js
connection.query('SELECT * FROM users', function (error, results, fields) {   
if (error) throw error;   
console.log(results); 
});
```

Dans cet exemple, nous envoyons une requête SELECT pour récupérer tous les enregistrements de la table "users". La fonction de rappel est appelée lorsque la requête est terminée et elle reçoit les résultats sous forme de tableau d'objets JavaScript.

Mysql2 prend également en charge les transactions, les instructions préparées, les requêtes en streaming et bien plus encore. Vous pouvez trouver plus d'informations sur la façon d'utiliser Mysql2 dans la documentation officielle : [https://github.com/mysqljs/mysql#readme](https://github.com/mysqljs/mysql#readme)
# ESLint / Prettier

## Définition

ESLint est un outil open source qui permet de détecter et de signaler les erreurs de syntaxe et de style dans le code JavaScript et TypeScript. C'est un outil largement utilisé dans les projets de développement web pour améliorer la qualité du code et faciliter la collaboration entre les développeurs.

ESLint est un outil de linting (ou linter), qui est un programme qui analyse le code source d'un programme pour signaler les erreurs, les violations de conventions de codage et les pratiques potentiellement dangereuses. ESLint est hautement configurable et peut être utilisé pour appliquer des règles spécifiques à un projet ou à une organisation.

ESLint est capable de détecter des erreurs de syntaxe telles que les variables non déclarées, les fonctions non définies, les fonctions vides, les boucles infinies, et les erreurs de typage en TypeScript. Il est également capable de détecter des violations de conventions de codage telles que des noms de variables mal nommées, des fonctions excessivement longues, des lignes de code trop longues, des espaces superflus, des virgules manquantes, et bien plus encore.

ESLint peut être intégré à un processus de développement continu (CI/CD) pour s'assurer que toutes les modifications de code sont conformes aux règles de codage définies pour le projet. Cela peut aider à réduire le temps nécessaire pour détecter et corriger les erreurs, en améliorant la qualité du code et en réduisant les coûts de maintenance.

## Installation

Dans ce cas-ci nous allons utiliser ESLint avec Prettier

```node
npm i -D eslint-config-prettier eslint-plugin-prettier
```

## Configuration

Pour utiliser ESLint avec Prettier il faut creer les fichier de configuration ".prettierrc.json". Sont contenu peut-être le suivant :

```json
{
  "printWidth": 100,
  "singleQuote": true,
  "semi": true,
  "tabWidth": 2,
  "trailingComma": "all",
  "endOfLine": "auto"
}
```

