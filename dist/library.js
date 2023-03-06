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