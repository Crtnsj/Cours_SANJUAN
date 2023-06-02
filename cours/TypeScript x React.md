Pour initialiser un projet React avec TypeScript il faut exécuter la commande suivante :

```node
pnpm create vite my-react-app --template react-ts
```

# Typer les props


Dans React, les props sont des propriétés que vous pouvez passer à un composant pour lui fournir des données. Les props sont généralement définies dans les composants parents et sont passées aux composants enfants.

Lorsque vous utilisez TypeScript avec React, vous pouvez définir des types pour les props pour améliorer la qualité de votre code. Voici un exemple de définition de types pour les props dans un composant React :


```tsx
interface Props {
  name: string;
  age: number;
  isStudent: boolean;
}

const MyComponent = ({ name, age, isStudent }: Props) => {
  // ...
};
```

Dans cet exemple, nous avons défini une interface `Props` qui spécifie les types de données que nous attendons pour les props `name`, `age` et `isStudent`. La fonction `MyComponent` prend ensuite un objet de type `Props` en tant qu'argument déstructuré pour accéder aux valeurs des props.
