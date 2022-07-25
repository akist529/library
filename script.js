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
    let readStatus = document.getElementById("readStatus").checked;
    let book = new Book(title, author, pageCount, readStatus);

    myLibrary.push(book);

    let bookDiv = document.createElement("div");
    bookDiv.classList = `book${myLibrary.length}`;
    bookDiv.setAttribute("onmouseover", `revealButton(${myLibrary.length}, event)`);
    bookDiv.setAttribute("onmouseout", `revealButton(${myLibrary.length}, event)`);
    document.querySelector(".library-entries").appendChild(bookDiv);

    let titleText = document.createElement("h3");
    titleText.id = `book-title${myLibrary.length}`;
    let authorText = document.createElement("h3");
    authorText.id = `book-author${myLibrary.length}`;
    let pageText = document.createElement("h3");
    pageText.id = `book-pages${myLibrary.length}`;
    let readText = document.createElement("h3");
    readText.id = `book-read${myLibrary.length}`;
    let delButton = document.createElement("button");
    delButton.id = `book-del${myLibrary.length}`;
    delButton.innerHTML = "ERASE";

    document.querySelector(`.book${myLibrary.length}`).appendChild(titleText);
    document.querySelector(`.book${myLibrary.length}`).appendChild(authorText);
    document.querySelector(`.book${myLibrary.length}`).appendChild(pageText);
    document.querySelector(`.book${myLibrary.length}`).appendChild(readText);
    document.querySelector(`.book${myLibrary.length}`).appendChild(delButton);

    document.getElementById(`book-del${myLibrary.length}`).setAttribute("onClick", "deleteItem(event)");

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

    changeHeader();
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

function changeHeader() {
    if (myLibrary.length) {
        document.querySelector(".library-default").style.display = "none";
        document.querySelector(".library-headers").style.display = "grid";
    }
    else {
        document.querySelector(".library-default").style.display = "grid";
        document.querySelector(".library-headers").style.display = "none";
    }
}

function showReset() {
    if (document.querySelector(".warning-container").style.display === "flex") {
        document.querySelector(".warning-container").style.display = "none";
    }
    else {
        document.querySelector(".warning-container").style.display = "flex";
    }
}

function resetForm() {
    const books = document.querySelectorAll("div[class^='book']");
    
    myLibrary = [];

    for (const book of books) {
        book.remove();
    }

    changeHeader();
    showReset();
}

function revealButton(bookNum, event) {
    if (event.type === "mouseover") {
        document.getElementById(`book-del${bookNum}`).style.right = "5vw";
    }
    else {
        document.getElementById(`book-del${bookNum}`).style.right = "0vw";
    }
}

function deleteItem(button) {
    const bookNum = button.target.id[button.target.id.length - 1];
    document.querySelector(`.${button.target.parentElement.className}`).remove();

    for (let i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].title === button.target.parentElement.childNodes[0].textContent) {
            myLibrary.splice(i, 1);
            break;
        }
    }

    if (myLibrary.length === 0) {
        document.querySelector(".library-default").style.display = "block";
        document.querySelector(".library-headers").style.display = "none";
    }
    else {
        document.querySelector(".library-default").style.display = "none";
        document.querySelector(".library-headers").style.display = "grid";
    }
}

function checkAnswers() {
    for (let i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].title === document.getElementById("title").value) {
            document.querySelector(".duplicate-container").style.display = "flex";
            return;
        }
    }

    addBookToLibrary();
}

function returnToForm() {
    document.querySelector('.duplicate-container').style.display = 'none';
}