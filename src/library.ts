//Library est un objet qui contient plusieurs méthodes pour gérer les livres dans la bibliothèque. 
//La méthode logItems() affiche tous les livres de la bibliothèque sur la console en utilisant la méthode toString() définie dans la classe Book. 
//Les méthodes onAdd(), onRemove() et onUpdate() sont utilisées pour ajouter, supprimer et mettre à jour des livres dans la bibliothèque.
//La méthode modify() est utilisée pour modifier un livre.
//La méthode addDefault() est utilisée pour ajouter un livre par défaut si l'utilisateur ne fournit pas de titre ou d'auteur.

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
