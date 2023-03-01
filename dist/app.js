class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    toString() {
        return `${this.title} by ${this.author}`;
    }
}
const Library = {
    onAdd(book) {
        console.log(`Added book: ${book.title}`);
        this.items.push(book);
        console.log(this.items);
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
const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald');
const book2 = new Book('The Catcher in the Rye', 'J.D. Salinger');
const book3 = new Book('The Grapes of Wrath', 'John Steinbeck');
const books = [book1, book2, book3];
console.log;
const list = new List(Library);
addEventListener('DOMContentLoaded', () => {
    document.body.appendChild(list);
});
list.add(books[0]);
list.add(books[1]);
list.add(books[2]);
//# sourceMappingURL=app.js.map