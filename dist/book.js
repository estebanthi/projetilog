//Définition de l'interface iBook avec les propriétés qui seront implémentées par la classe `Book`
//La classe Book implémente l'interface `IBook` qui définit les propriétés `title` et `author`
//La méthode `toString()` est également définie pour renvoyer une chaîne de caractères qui représente le livre.
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    toString() {
        return `${this.title} par ${this.author}`;
    }
}
//# sourceMappingURL=book.js.map