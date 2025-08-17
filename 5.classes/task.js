/* 1 и 2 задача */
class PrintEditionItem{
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state *= 1.5;
    }

    set state(newState) {
        if (newState < 0) {
            this._state = 0;
        } else if (newState > 100) {
            this._state = 100;
        } else {
            this._state = newState;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem{
    constructor(name, releaseDate, pagesCount, state) {
        super(name, releaseDate, pagesCount, state);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem{
    constructor(author, name, releaseDate, pagesCount, state) {
        super(name, releaseDate, pagesCount, state);
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book{
    constructor(name, releaseDate, pagesCount, state, author){
        super(name, releaseDate, pagesCount, state, author);
        this.type = "novel";
    }
}

class FantasticBook extends Book{
    constructor(name, releaseDate, pagesCount, state, author){
        super(name, releaseDate, pagesCount, state, author);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book{
    constructor(name, releaseDate, pagesCount, state, author){
        super(name, releaseDate, pagesCount, state, author);
        this.type = "detective";
    }
}

class Library{
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }
    
    findBookBy(type, value) {
        return this.books.find(book => book[type] === value) || null;
    }

    giveBookByName(bookName) {
        const index = this.books.findIndex(book => book.name === bookName);
        if (index !== -1) {
            const [book] = this.books.splice(index, 1); 
            return book; 
        }
        return null;
    }
}

/* 3 задача */
class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = {};
    }

    addMark(mark, subjectName) {
        if (mark >= 2 && mark <= 5) {
            if (!this.marks[subjectName]) {
                this.marks[subjectName] = [];
                this.marks[subjectName].push(mark);
            } else {
                this.marks[subjectName].push(mark);
            }
        } else {
            return;
        }
    }

    getAverageBySubject(subjectName) {
        if (this.marks[subjectName]) {
            return this.marks[subjectName].reduce((acc, item) => {return acc + item}, 0) / this.marks[subjectName].length
        } else {
            return 0;
        }
    }

    getAverage() {
        let subjectNames = Object.keys(this.marks);
        let sumAverages = 0;
        if (subjectNames.length !== 0) {
           for (let subject of subjectNames) {
                sumAverages += this.getAverageBySubject(subject);
            }  
        } else {
            return 0;
        }
        return sumAverages / subjectNames.length
    }
}