composant react V
props -> children V
className V
comment typer props V
handle V
typescript
typescript
eslint /prettier
les hook d'etat use state V
affichage conditionnel V
les terniaires V
les events V



# reste à voir

quelques hooks: 

## les regeles à respecter
- les hooks ne peuvent être appelés qu'au niveau le plus haut d'un composant. les hooks ne pevnet pas etre appelées au sein de boucle ou au sein d'event handler
- Un hook ne peut pas etre appele conditionnelement
- les hooks ne peuvent ettre appeles qu'a l'interieur de composant fonction et pas dans un composant classe 

Un hook est une fonction. le hook useEffect permet de gerer les effets de bords en React (sideEffects) Comme vous le savez, votre application React est une fonction qui affiche du contenu a un endroit tres precis du DOM

La syntaxe du hook useEffects est la suivante : 

```ts
function unComponent () {
useEffect(()=>{
		console.log('message par le hook useEffect');
		return () => {}
		}, [])

	return <>Hello World! </>
}
```

Le premier paramètre est une fonction 

Le second est un tableau de dépendances si ce dernier est vide, la fonction passe en premier paramètre du Hook useEffect est exécuté a chaque rendu du composant à l'écran 

Si un élément est présent dans ce tableau, on passera dans le Hook à chaque mise à jour de cet élément

css et react
routing avec react router
afficher deu contenu dynamique
travailler avec les formulaires en reatc
state managment
interagir avec une API rest 
