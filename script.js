let library = [
    {
        title: 'Atomic Habits',
        author: 'James Clear',
        pages: '240',
        read: false
    },
    {
        title: 'Principles',
        author: 'Ray Dalio',
        pages: '450',
        read: true
    },
    {
        title: 'The Lean Startup',
        author: 'Eric Ries',
        pages: '220',
        read: false
    }
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this. read = read;
}

const addBookButton = document.querySelector('.add');
const submitBook = document.querySelector('.submit')
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const read = document.querySelector('#read');
const overlay = document.querySelector('.overlay');
const popup = document.querySelector('.popup');
const close = document.querySelector('.close');

addBookButton.addEventListener('click', () => {
    overlay.style.display = 'block';
    popup.style.display = 'block';
});

close.addEventListener('click', () => {
    overlay.style.display = 'none';
    popup.style.display = 'none';
});

submitBook.addEventListener('click', () => {
    let bookTitle = title.value;
    let bookAuthor = author.value;
    let bookPages = pages.value;
    let bookRead;
    let regex = /^\s*$/g;
    if(read.value == 'on') bookRead = true;
    else bookRead = false;

    if(regex.test(bookTitle)==true || regex.test(bookAuthor) || regex.test(bookPages))
    {
        const errorMessage = document.querySelector('.errorMessage');
        errorMessage.style.display = 'block';
    }
    else {
        addBook(bookTitle, bookAuthor, bookPages, bookRead);
        console.log(library);

        overlay.style.display = 'none';
        popup.style.display = 'none';
    }
});

function addBook(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    library.push(newBook);
}

//write a function to see if two books are the same

const libraryElement = document.querySelector('.library');

function addBookToGrid()