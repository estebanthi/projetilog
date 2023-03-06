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
    addDefault(): Book {
        const title = prompt('Titre:') || 'Sans titre';
        const author = prompt('Auteur:') || 'Sans auteur';
        return new Book(title, author);
    },
    items: []
};
