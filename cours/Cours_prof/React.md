# Introdcution a React

Une bibliotheque open-source qui permet la construction d'interfaces graphiques avec HTML, CSS et Javascript. 

Dans cette introduction, nous allons : 
 - comprendre les avantages apportes par React


 - decouvrir le **JSX** : pour Javascript XML, qui est une extension de Javascript


 - Creer des **composants** : une fonction qui retourne du JSX
 - Comprendre les imports et les exports 
 - utiliser des **props**
 - utiliser le State 
 - utiliser les events en React


Javascript permet de manipuler le DOM : c'est la representation 'objet' des elements HTML qui constitue un page web. Autrement dit, c'est une interface qui permet d'interagir avec la structure des pages web.


React utilise un DOM virtuel pour afficher ses composants (virtual DOM, shadow DOM), car manipuler le DOM directement peut etre tres couteux. 


Le JSX n'est pas directement execute par les navigateurs Web


Les imports et les exports en JS : 
- les exports/imports nommes 
- l'export default


Les props : 
 - des paramètres de fonction
 - permettent de configurer les composants, et sont passées en tant qu'attribut JSX
 - sont optionnelles
 - children et key sont des props communes a tous les composants React



Le state

L'etat d'un composant designe une variable speciale qui contient des informations 
sur le contenu actuel du composant. Par exemple, un composant peut etre en etat d'erreur ou de chargement.
Un changement de cet état va entrainer ce qu'on appelle communément un : `re-render`


----------------------------------------------------------------------------------------


## Introduction a typescript