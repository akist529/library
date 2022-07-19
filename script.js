let myLibrary = [];

function Book(title) {
    this.title = title;
}

function addBookToLibrary(title) {
    let book = new Book(title);

    myLibrary.push(book);

    let newBook = document.createElement("h2");
    let newBookTitle = document.createTextNode(`${myLibrary[myLibrary.length - 1]}`);
    newBook.appendChild(newBookTitle);

    document.getElementById("library").appendChild(newBook);
}

function displayForm() {
    console.log("test");

    if (document.getElementById("form-container").classList === "form-container-open") {
        document.getElementById("form-container").classList = "form-container-closed";
    }
    else {
        document.getElementById("form-container").classList = "form-container-open";
    }
}