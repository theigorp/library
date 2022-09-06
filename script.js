let library = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this. read = read;
}

const addBookButton = document.querySelector('.add');

addBookButton.addEventListener('click', () => {
    let bookTitle = prompt("title");
    let bookAuthor = prompt("author");
    let bookPages = prompt("pages");
    let bookRead = prompt('read');

    addBook(bookTitle, bookAuthor, bookPages, bookRead);
    console.log(library);
});

function addBook(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    library.push(newBook);
}