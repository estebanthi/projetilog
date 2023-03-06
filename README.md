# Liste Notifiante

## Objectif
La liste notifiante est une nouvelle balise HTML utilisable affichant une liste modifiable dont chaque modification envoie une notification à un objet propriétaire ("owner") de la liste.
Elle permet de manipuler facilement des collections de données tout en effectuant des actions lors de la modification de la liste.

## Utilisation
La liste notifiante est une balise HTML personnalisée. Elle est définie dans le fichier `list.ts`. Elle est utilisable directement dans un fichier HTML avec la balise `<my-list>`, mais il est préférable de l'instancier via un script afin de spécifier facilement son owner, par exemple :
```typescript
const list = new List(owner);

addEventListener('DOMContentLoaded', () => {
    document.body.appendChild(list);
});
```

## Fonctionnement
La liste repose sur des boutons afin d'ajouter, supprimer ou modifier des éléments.
Elle stocke elle même les éléments qu'elle contient, qui peuvent ensuite être reflétés dans l'owner.

## Owner
L'owner est un objet qui doit suivre l'interface `ListOwner` afin d'implémenter les méthodes de notification de la liste.
Exemple pour gérer une liste de livres :
```typescript
const Library = {
    logItems() {
        console.log(this.items.map((book, index) => `${index + 1} - ${book.toString()}`).join('\n'));
    },
    onAdd(book: Book) {
        console.log(`Added book: ${book.title}`);
        this.items.push(book);
    },
    onRemove(book: Book) {
        console.log(`Removed book: ${book.title}`);
        const index = this.items.indexOf(book);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    },
    onUpdate(book: Book) {
        console.log(`Updated book: ${book.title}`);
        const index = this.items.indexOf(book);
        if (index !== -1) {
            this.items[index] = book;
        }
    },
    modify(book: Book) {
        const title = prompt('Titre:', book.title) || book.title;
        const author = prompt('Auteur:', book.author) || book.author;
        book.title = title;
        book.author = author;
        return [this.items.indexOf(book), book];
    },
    addDefault(): Book {
        const title = prompt('Titre:') || 'Sans titre';
        const author = prompt('Auteur:') || 'Sans auteur';
        return new Book(title, author);
    },
    items: []
};
```

## Exemple
Pour gérer une collection de livres, on peut utiliser la liste notifiante comme ceci :

1. Définition des objets à manipuler (livres) :
```typescript
interface IBook {
    title: string;
    author: string;
}

class Book implements IBook {
    title: string;
    author: string;

    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }

    toString(): string {
        return `${this.title} par ${this.author}`;
    }
}
```

2. Définition de l'owner (librairie) :
```typescript
const Library = {
    logItems() {
        console.log(this.items.map((book, index) => `${index + 1} - ${book.toString()}`).join('\n'));
    },
    onAdd(book: Book) {
        console.log(`Added book: ${book.title}`);
        this.items.push(book);
    },
    onRemove(book: Book) {
        console.log(`Removed book: ${book.title}`);
        const index = this.items.indexOf(book);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    },
    onUpdate(book: Book) {
        console.log(`Updated book: ${book.title}`);
        const index = this.items.indexOf(book);
        if (index !== -1) {
            this.items[index] = book;
        }
    },
    modify(book: Book) {
        const title = prompt('Titre:', book.title) || book.title;
        const author = prompt('Auteur:', book.author) || book.author;
        book.title = title;
        book.author = author;
        return [this.items.indexOf(book), book];
    },
    addDefault(): Book {
        const title = prompt('Titre:') || 'Sans titre';
        const author = prompt('Auteur:') || 'Sans auteur';
        return new Book(title, author);
    },
    items: []
};
```

3. Instantiation de la liste notifiante dans un script :
```typescript
const list = new List(Library);

addEventListener('DOMContentLoaded', () => {
    document.body.appendChild(list);
});
```

4. Manipulations diverses :
```typescript
Library.logItems();
```