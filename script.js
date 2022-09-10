let library = [
    // {
    //     title: 'Atomic Habits',
    //     author: 'James Clear',
    //     pages: '240',
    //     read: false
    // },
    // {
    //     title: 'Principles',
    //     author: 'Ray Dalio',
    //     pages: '450',
    //     read: true
    // },
    // {
    //     title: 'The Lean Startup',
    //     author: 'Eric Ries',
    //     pages: '220',
    //     read: false
    // }
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
const libraryElement = document.querySelector('.library');
const addBookCard = document.querySelector('.add-book');

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
    if(read.checked) bookRead = true;
    else if(!read.checked) bookRead = false;

    if(regex.test(bookTitle)==true || regex.test(bookAuthor) || regex.test(bookPages))
    {
        const errorMessage = document.querySelector('.errorMessage');
        errorMessage.style.display = 'block';
    }
    else {
        addBook(bookTitle, bookAuthor, bookPages, bookRead);
        console.log(library);

        resetInput(title, author, pages, read);
        overlay.style.display = 'none';
        popup.style.display = 'none';
    }
});

function resetInput(title, author, pages, read) {
    title.value = '';
    author.value = '';
    pages.value = '';
    read.value = '';
}

function addBook(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    library.push(newBook);

    const parentDiv = document.createElement('div');
    libraryElement.insertBefore(parentDiv, addBookCard);
    parentDiv.classList.add('book-div');
    const bookTitle = document.createElement('p');
    const bookAuthor = document.createElement('p');
    const bookPages = document.createElement('p');
    const readButton = document.createElement('button');
    const removeButton = document.createElement('button');

    readButton.classList.add('read');
    removeButton.classList.add('remove');

    bookTitle.textContent = newBook.title;
    bookAuthor.textContent = newBook.author;
    bookPages.textContent = newBook.pages + ' pages';
    removeButton.textContent = 'Remove';
    getIndexAttribute(library, removeButton);

    if(newBook.read == true) readButton.textContent = 'Read';
    else readButton.textContent = 'Not Read';

    parentDiv.appendChild(bookTitle);
    parentDiv.appendChild(bookAuthor);
    parentDiv.appendChild(bookPages);
    parentDiv.appendChild(readButton);
    parentDiv.appendChild(removeButton);

    changeReadState(newBook, readButton);
    removeBook(newBook, parentDiv);

    // mark as read/unread on hover
    // readButton.addEventListener('mouseover', () => {
    //     if(readButton.textContent == 'Read')
    //     {
    //         readButton.textContent = 'Mark as unread?';
    //         readButton.style.cursor = 'pointer';
    //     }
    //     else
    //     {
    //         readButton.textContent = 'Mark as read?';
    //         readButton.style.cursor = 'pointer';
    //     }
    // });
    // zbog ovoga se tekst ne menja kako treba
    // readButton.addEventListener('mouseleave', () => {
    //     if(readButton.textContent == 'Mark as unread?')
    //     {
    //         readButton.textContent = 'Read';
    //         readButton.style.cursor = 'pointer'
    //     }
    //     else
    //     {
    //         readButton.textContent = 'Not Read';
    //         readButton.style.cursor = 'pointer'
    //     }
    // });
}

function changeReadState(book, readBtn) {
    readBtn.addEventListener('click', () => {
        if(readBtn.textContent == 'Read')
        {
            readBtn.textContent = 'Not Read';
            book.read = false;
        }
        else if(readBtn.textContent == 'Not Read')
        {
            readBtn.textContent = 'Read';
            book.read = true;
        }
        console.log(library);
    });
}

function removeBook(book, parentDiv) {
    parentDiv.addEventListener('click', (e) => {
        if(e.target == '<button class="remove">Remove</button>')
        {

        }
    })
}

function getIndexAttribute(library, removeButton) {
    for(let i = 0; i < library.length; i++)
    {
        removeButton.setAttribute('index', i);
    }
}
//write a function to see if two books are the same

//remove book function 