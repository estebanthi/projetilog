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
    },
    onRemove(book) {
        console.log(`Removed book: ${book.title}`);
    },
    onUpdate(book) {
        console.log(`Updated book: ${book.title}`);
    }
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