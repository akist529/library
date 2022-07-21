let myLibrary = [];

function Book(title, author, pageCount, readStatus) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.readStatus = readStatus;
}

function addBookToLibrary() {
    document.querySelector(".library-default").style.display = "none";
    document.querySelector(".library-headers").style.display = "flex";

    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pageCount = document.getElementById("pageCount").value;
    let readStatus = document.getElementById("readStatus").value;
    let book = new Book(title, author, pageCount, readStatus);

    myLibrary.push(book);

    let bookDiv = document.createElement("div");
    bookDiv.classList = `book${myLibrary.length}`;
    document.querySelector(".library-entries").appendChild(bookDiv);

    let titleText = document.createElement("h2");
    titleText.id = `book-title${myLibrary.length}`;
    let authorText = document.createElement("h2");
    authorText.id = `book-author${myLibrary.length}`;
    let pageText = document.createElement("h2");
    pageText.id = `book-pages${myLibrary.length}`;
    let readText = document.createElement("h2");
    readText.id = `book-read${myLibrary.length}`;

    document.querySelector(`.book${myLibrary.length}`).appendChild(titleText);
    document.querySelector(`.book${myLibrary.length}`).appendChild(authorText);
    document.querySelector(`.book${myLibrary.length}`).appendChild(pageText);
    document.querySelector(`.book${myLibrary.length}`).appendChild(readText);

    let titleNode = document.createTextNode(`${myLibrary[myLibrary.length - 1].title}`);
    document.getElementById(`book-title${myLibrary.length}`).appendChild(titleNode);
    let authorNode = document.createTextNode(`${myLibrary[myLibrary.length - 1].author}`);
    document.getElementById(`book-author${myLibrary.length}`).appendChild(authorNode);
    let pageNode = document.createTextNode(`${myLibrary[myLibrary.length - 1].pageCount}`);
    document.getElementById(`book-pages${myLibrary.length}`).appendChild(pageNode);
    let readNode = document.createTextNode(
        (readStatus === true) ? "Yes" : "No"
    );
    document.getElementById(`book-read${myLibrary.length}`).appendChild(readNode);

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