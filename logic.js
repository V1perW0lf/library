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

myLibrary.push(new Book('Test', 'testone', 32, false))
myLibrary.push(new Book('The Book', 'rolken', 45, true))
myLibrary.push(new Book('Big Old Test', 'testone', 32, false))
myLibrary.push(new Book('The Book Two', 'rolken', 45, true))
myLibrary.push(new Book('Harry Potter', 'rolken', 45, true))

function displayBooks() {
    const bookContainer = document.querySelector('div.book-container');
    for(let i = 0; i < myLibrary.length; i++) {
        const newBook = document.createElement("div");
        newBook.classList.add('book-card');

        const title = document.createElement("p");
        title.innerText = myLibrary[i].title;
        newBook.appendChild(title);

        const author = document.createElement("p");
        author.innerText = myLibrary[i].author;
        newBook.appendChild(author);

        const pages = document.createElement("p");
        pages.innerText = myLibrary[i].pages + " pages";
        newBook.appendChild(pages);

        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add('button-container');
        newBook.appendChild(buttonContainer);

        const readButton = document.createElement("button");
        readButton.classList.add('read-button');
        readButton.innerText = "Read";
        buttonContainer.appendChild(readButton);

        const removeButton = document.createElement("button");
        removeButton.classList.add('remove-button');
        removeButton.innerText = "Remove";
        buttonContainer.appendChild(removeButton);

        newBook.appendChild(buttonContainer);

        bookContainer.appendChild(newBook);
    }
}

function addBookToLibrary() {
    
}

displayBooks();