

class Library {
    books: List<Book>;

    constructor() {
        this.books = new List<Book>();
    }
}

class Book {
    title: string;
    author: string;

    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }
}

class LibraryView implements ListOwner<Book> {
    private booksList: HTMLUListElement;

    constructor(private library: Library) {
        this.booksList = document.createElement('ul');
        document.body.appendChild(this.booksList);
        this.render();
    }

    onAdd(book: Book) {
        const listItem = document.createElement('li');
        listItem.textContent = `${book.title} by ${book.author}`;
        this.booksList.appendChild(listItem);
    }

    onRemove(book: Book) {
        const listItem = this.booksList.querySelector(`li[data-title="${book.title}"]`);
        if (listItem) {
            listItem.remove();
        }
    }

    onUpdate(book: Book) {
        const listItem = this.booksList.querySelector(`li[data-title="${book.title}"]`);
        if (listItem) {
            listItem.textContent = `${book.title} by ${book.author}`;
        }
    }

    private render() {
        const books = this.library.books.getAllItems();
        for (const book of books) {
            const listItem = document.createElement('li');
            listItem.textContent = `${book.title} by ${book.author}`;
            listItem.setAttribute('data-title', book.title);
            this.booksList.appendChild(listItem);
        }
    }
}

const library = new Library();
const libraryView = new LibraryView(library);

const newBook = new Book('Le seigneur des anneaux', 'J.R.R. Tolkien');
library.books.add(newBook);

const existingBook = library.books.getAllItems()[0];
existingBook.author = 'J.K. Rowling';
library.books.update(existingBook);

const bookToDelete = library.books.getAllItems()[0];
library.books.remove(bookToDelete);
