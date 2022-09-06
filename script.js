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

    let newBook = new Book(bookTitle, bookAuthor, bookPages, bookRead);
    library.push(newBook);
    console.log(newBook);
    console.log(library);
});

function addBooks() {
    
}