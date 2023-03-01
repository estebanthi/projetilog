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
        return `${this.title} by ${this.author}`;
    }
}


const Library = {
    onAdd(book: Book) {
        console.log(`Added book: ${book.title}`);
    },
    onRemove(book: Book) {
        console.log(`Removed book: ${book.title}`);
    },
    onUpdate(book: Book) {
        console.log(`Updated book: ${book.title}`);
    }
};

const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald');
const book2 = new Book('The Catcher in the Rye', 'J.D. Salinger');
const book3 = new Book('The Grapes of Wrath', 'John Steinbeck');

const books = [book1, book2, book3];

console.log

const list = new List(Library);

addEventListener('DOMContentLoaded', () => {
    document.body.appendChild(list);
});

list.add(books[0]);
list.add(books[1]);
list.add(books[2]);