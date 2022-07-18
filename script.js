let myLibrary = [];

function Book(title) {
    this.title = title;
}

function addBookToLibrary(title) {
    let newBook = new Book(title);

    myLibrary.push(newBook);
    console.log(myLibrary);
}

function displayForm() {
    if (document.getElementById("form").classList === "form-open") {
        document.getElementById("form").classList = "form-closed";
    }
    else {
        document.getElementById("form").classList = "form-open";
    }
}

addBookToLibrary('The Catcher in the Rye');
addBookToLibrary('The Dead Zone');