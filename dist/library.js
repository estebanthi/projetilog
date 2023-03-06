//Library est un objet qui contient plusieurs méthodes pour gérer les livres dans la bibliothèque. 
//La méthode logItems() affiche tous les livres de la bibliothèque sur la console en utilisant la méthode toString() définie dans la classe Book. 
//Les méthodes onAdd(), onRemove() et onUpdate() sont utilisées pour ajouter, supprimer et mettre à jour des livres dans la bibliothèque. 
//La méthode addDefault() est utilisée pour ajouter un livre par défaut si l'utilisateur ne fournit pas de titre ou d'auteur.
const Library = {
    logItems() {
        console.log(this.items.map((book, index) => `${index + 1} - ${book.toString()}`).join('\n'));
    },
    onAdd(book) {
        console.log(`Added book: ${book.title}`);
        this.items.push(book);
    },
    onRemove(book) {
        console.log(`Removed book: ${book.title}`);
        const index = this.items.indexOf(book);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    },
    onUpdate(book) {
        console.log(`Updated book: ${book.title}`);
        const index = this.items.indexOf(book);
        if (index !== -1) {
            this.items[index] = book;
        }
    },
    addDefault() {
        const title = prompt('Titre:') || 'Sans titre';
        const author = prompt('Auteur:') || 'Sans auteur';
        return new Book(title, author);
    },
    items: []
};
//# sourceMappingURL=library.js.map