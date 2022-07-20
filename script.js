let myLibrary = [];

function Book(title, author, pageCount, readStatus) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.readStatus = readStatus;
}

function addBookToLibrary() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pageCount = document.getElementById("pageCount").value;
    let readStatus = document.getElementById("readStatus").value;
    let book = new Book(title, author, pageCount, readStatus);

    myLibrary.push(book);

    let titleText = document.createElement("h2");
    titleText.id = `book${myLibrary.length}`;

    document.querySelector(".library").appendChild(titleText);

    let titleTextNode = document.createTextNode(`${myLibrary[myLibrary.length - 1].title}`);
    document.getElementById(`book${myLibrary.length}`).appendChild(titleTextNode);

    displayForm();

    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pageCount").value = "";
    document.getElementById("readStatus").checked = false;
}

function displayForm() {
    if (document.getElementById("form-container").classList.value === "form-container-open") {
        document.getElementById("form-container").classList.value = "form-container-closed";
    }
    else {
        document.getElementById("form-container").classList.value = "form-container-open";
    }
}