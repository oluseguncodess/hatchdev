// super class
interface IBook {
    id: number
    title: string
    author: string
    quantity: number
}

interface IUser {
    id: number
    name: string
    age: number
    books_borrowed: number
    books_returned: number
}

abstract class Library {
    protected books: IBook[] = []
    protected members: IUser[] = []

    private library_id = 0
    private book_id = 0

    protected addMember(name: string, age: number): IUser {
        const newLibraryMember: IUser = {
            id: ++this.library_id,
            name: name.trim().toLowerCase(),
            age: age,
            books_borrowed: 0,
            books_returned: 0
        }
        this.members.push(newLibraryMember)

        console.log(`A new member ID-${this.library_id} has been added successfully!.`)

        return newLibraryMember;
    }

    protected removeMember(id: number): void {
        this.members = this.members.filter(member => member.id !== id)

        console.log(`Library member ID-${id} has been removed successfully`)
    }

    protected addBook(title: string, author: string, quantity: number): IBook {
        //
        const newBook: IBook = {
            id: ++this.book_id,
            title,
            author,
            quantity
        }

        this.books.push(newBook)

        console.log(`New book '${title}' has been added to the library's book collection`)
       
        return newBook;
    }

    protected removeBook(id: number, title: string): void {
        this.books = this.books.filter(bookId => bookId.id !== id)

        console.log(`Book '${title}' has been removed from the library's book collection`)
    }

    protected getMemberById(id: number) {
        return this.members.find(member => member.id === id)
    }

    protected getBookById(id: number) {
        return this.books.find(book => book.id === id)
    }
    
     getAllMembers() {
        console.log(this.members)
    }

    getAllBooks() {
        console.log(this.books)
    }
}

class LibraryManager extends Library {
    registerMember(name: string, age: number): IUser {
       return this.addMember(name, age)
    }

    unregisterMember(id: number) {
        return this.removeMember(id)
    }

    addNewBook(title: string, author: string, quantity: number) {
        return this.addBook(title, author, quantity)
    }

    borrowBook(memberId: number, bookId: number) {
        // get the library member that is going to borrow the book
        const member = this.getMemberById(memberId)
        // get the book the library member wants to borrow 
        const book = this.getBookById(bookId)

        // check to see if member or book is found
        if (!member) {
            console.log(`Invalid member ID`)
            return
        }
        
        if (!book) {
            console.log(`Invalid book ID`)
            return
        }
        
        // check if book is available
        if(book.quantity < 1) return `Book not available`

        book.quantity -= 1
        member.books_borrowed += 1

        console.log(`${member.name.toUpperCase()} just borrowed ${book.title}. Total number of borrowed book(s): ${member.books_borrowed}`)
    }

    returnBook(memberId: number, bookId: number) {
        const member = this.getMemberById(memberId)
        const book = this.getBookById(bookId)

        // check to see if member or book is found
        if (!member) {
            console.log(`Invalid member ID`)
            return
        }
        
        if (!book) {
            console.log(`Invalid book ID`)
            return
        }

        book.quantity += 1
        member.books_returned += 1

        console.log(`${member.name.toUpperCase()} just returned ${book.title}. Total number of returned book(s): ${member.books_returned}`)

    }
}


const manager = new LibraryManager()
// register new members
const tobi = manager.registerMember('Tobi', 23)
const olusegun = manager.registerMember('Olusegun', 33)
const john = manager.registerMember('John', 45)

// add new books
const atomic_habits = manager.addNewBook('Atomic Habits', 'James Clear', 5)
const deep_work = manager.addNewBook('Deep Work', 'Cal Newport', 2)
const digital_minimalism = manager.addNewBook('Digital Minimalism', 'Cal Newport', 10)

// see all the books and members 
manager.getAllMembers()
manager.getAllBooks()

// non-members get an invalid member id
manager.borrowBook(15, 2)

// only members can borrow a book
manager.borrowBook(tobi.id, atomic_habits.id)
manager.getAllMembers()
manager.getAllBooks()

// only members can return book
manager.returnBook(tobi.id, atomic_habits.id)
manager.getAllMembers()
manager.getAllBooks()

