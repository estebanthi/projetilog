"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    toString() {
        return `${this.title} by ${this.author}`;
    }
}
exports.Book = Book;
//# sourceMappingURL=book.js.map