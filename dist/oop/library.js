"use strict";
class Book {
    constructor(id, title, author, quantity) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.quantity = quantity;
    }
}
class Member {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.books_borrowed = 0;
        this.books_returned = 0;
    }
}
class Library {
    constructor() {
        this.books = [];
        this.members = [];
        this.library_id = 0;
        this.book_id = 0;
    }
    addMember(name, age) {
        const newLibraryMember = new Member(++this.library_id, name.trim().toLowerCase(), age);
        this.members.push(newLibraryMember);
        console.log(`A new member ID-${this.library_id} has been added successfully!.`);
        return newLibraryMember;
    }
    removeMember(id) {
        this.members = this.members.filter(member => member.id !== id);
        console.log(`Library member ID-${id} has been removed successfully`);
    }
    addBook(title, author, quantity) {
        const newBook = new Book(++this.book_id, title, author, quantity);
        this.books.push(newBook);
        console.log(`New book '${title}' has been added to the library's book collection`);
        return newBook;
    }
    removeBook(id, title) {
        this.books = this.books.filter(bookId => bookId.id !== id);
        console.log(`Book '${title}' has been removed from the library's book collection`);
    }
    getMemberById(id) {
        return this.members.find(member => member.id === id);
    }
    getBookById(id) {
        return this.books.find(book => book.id === id);
    }
    getAllMembers() {
        console.log(this.members);
    }
    getAllBooks() {
        console.log(this.books);
    }
}
class LibraryManager extends Library {
    registerMember(name, age) {
        return this.addMember(name, age);
    }
    unregisterMember(id) {
        return this.removeMember(id);
    }
    addNewBook(title, author, quantity) {
        return this.addBook(title, author, quantity);
    }
    borrowBook(memberId, bookId) {
        const member = this.getMemberById(memberId);
        const book = this.getBookById(bookId);
        if (!member) {
            console.log(`Invalid member ID`);
            return;
        }
        if (!book) {
            console.log(`Invalid book ID`);
            return;
        }
        if (book.quantity < 1)
            return `Book not available`;
        book.quantity -= 1;
        member.books_borrowed += 1;
        console.log(`${member.name.toUpperCase()} just borrowed ${book.title}. Total number of borrowed book(s): ${member.books_borrowed}`);
    }
    returnBook(memberId, bookId) {
        const member = this.getMemberById(memberId);
        const book = this.getBookById(bookId);
        if (!member) {
            console.log(`Invalid member ID`);
            return;
        }
        if (!book) {
            console.log(`Invalid book ID`);
            return;
        }
        book.quantity += 1;
        member.books_returned += 1;
        console.log(`${member.name.toUpperCase()} just returned ${book.title}. Total number of returned book(s): ${member.books_returned}`);
    }
}
const manager = new LibraryManager();
const tobi = manager.registerMember('Tobi', 23);
const olusegun = manager.registerMember('Olusegun', 33);
const john = manager.registerMember('John', 45);
const atomic_habits = manager.addNewBook('Atomic Habits', 'James Clear', 5);
const deep_work = manager.addNewBook('Deep Work', 'Cal Newport', 2);
const digital_minimalism = manager.addNewBook('Digital Minimalism', 'Cal Newport', 10);
manager.getAllMembers();
manager.getAllBooks();
manager.borrowBook(15, 2);
manager.borrowBook(tobi.id, atomic_habits.id);
manager.getAllMembers();
manager.getAllBooks();
manager.returnBook(tobi.id, atomic_habits.id);
manager.getAllMembers();
manager.getAllBooks();
