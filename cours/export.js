// les imports et les exports permettent de structurer les fichiers js en modules

// par defaut Jasvascript execute ce qu'on appelle la 'global scope'. Le contenu du code
//provenant d'un fichier est automatiquement disponible au sein d'un autre fichier


//On peut considerer qu'un fichier js est un module des lors qu'il contient un 'export'

function myfuncA() {
    console.log('A')
}

export function myfuncB() {
    console.log('B')
}

function myfuncC() {
    console.log('C')
}

export { myfuncC };// Syntaxe de l'export nommé

export default myfuncA; 
