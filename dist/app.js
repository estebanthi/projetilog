class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    toString() {
        return `${this.title} par ${this.author}`;
    }
}
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
const book1 = new Book("Le Petit Prince", "Antoine de Saint-Exupéry");
const book2 = new Book("Harry Potter à l'école des sorciers", "J.K. Rowling");
const book3 = new Book("Le Seigneur des Anneaux", "J.R.R. Tolkien");
const books = [book1, book2, book3];
console.log;
const list = new List(Library);
addEventListener('DOMContentLoaded', () => {
    document.body.appendChild(list);
});
list.add(books[0]);
list.add(books[1]);
list.add(books[2]);
Library.logItems();
//# sourceMappingURL=app.js.map