const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read}`
    }
}

function addBookToLibrary(book) {
    const bookContainer = document.querySelector('div.book-container');
    const newBook = document.createElement("div");
    newBook.classList.add('book-card');

    newBook.style.backgroundColor = book.read ? 'green' : 'red'

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
        if(newBook.style.backgroundColor == 'red')
            newBook.style.backgroundColor = 'green'
        else
            newBook.style.backgroundColor = 'red'
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
}

addBookToLibrary(new Book('test', 'test', 56, false))
