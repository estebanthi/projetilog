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


export default Book;