const myLibrary = [];
const addBookButton = document.querySelector('button.add-book');
addBookButton.addEventListener('click', () => {
    const dialog = document.querySelector('dialog');
    dialog.showModal();
});

const submitNewBookButton = document.querySelector('button.submit-new-book');
submitNewBookButton.addEventListener('click', () => {
    const inputTitle = document.querySelector('input#input-title');
    const title = inputTitle.value;

    const inputAuthor = document.querySelector('input#input-author');
    const author = inputAuthor.value;

    const inputPages = document.querySelector('input#input-pages');
    const pages = +inputPages.value;

    const isReadCheckBox = document.querySelector('input#is-read');
    const isRead = isReadCheckBox.checked;

    addBookToLibrary(new Book(title, author, pages, isRead));
});

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    getInfo() {
        return `${title} by ${author}, ${pages} pages, ${read}`;
    }
}

function addBookToLibrary(book) {
    const bookContainer = document.querySelector('div.book-container');
    const newBook = document.createElement("div");
    newBook.classList.add('book-card');

    newBook.style.backgroundColor = book.read ? 'green' : 'red';

    const title = document.createElement("p");
    title.innerText = book.title;
    newBook.appendChild(title);

    const author = document.createElement("p");
    author.innerText = book.author;
    newBook.appendChild(author);

    const pages = document.createElement("p");
    pages.innerText = book.pages + " pages";
    newBook.appendChild(pages);

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add('button-container');
    newBook.appendChild(buttonContainer);

    const readButton = document.createElement("button");
    readButton.classList.add('read-button');
    readButton.innerText = "Read";
    readButton.addEventListener(('click'), () => {
        book.read = !book.read;
        newBook.style.backgroundColor = book.read ? 'green' : 'red'
    })
    buttonContainer.appendChild(readButton);

    const removeButton = document.createElement("button");
    removeButton.classList.add('remove-button');
    removeButton.innerText = "Remove";
    removeButton.addEventListener(('click'), () => {
        newBook.remove();
    })
    buttonContainer.appendChild(removeButton);

    newBook.appendChild(buttonContainer);

    bookContainer.appendChild(newBook);
};

addBookToLibrary(new Book('test', 'test', 56, false));
