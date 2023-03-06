//Définition de l'interface iBook avec les propriétés qui seront implémentées par la classe `Book`

interface IBook {
    title: string;
    author: string;
}

//La classe Book implémente l'interface `IBook` qui définit les propriétés `title` et `author`
//La méthode `toString()` est également définie pour renvoyer une chaîne de caractères qui représente le livre.


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