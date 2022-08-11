var myLibrary = [];

class Book {
    constructor(title, author, pageCount, readStatus) {
        this.title = title;
        this.author = author;
        this.pageCount = pageCount;
        this.readStatus = readStatus;
    }
}

function addBookToLibrary() {
    let title = $("#title").val();
    let author = $("#author").val();
    let pageCount = $("#pageCount").val();
    let readStatus = $("#readStatus").is(":checked");
    let book = new Book(title, author, pageCount, readStatus);

    myLibrary.push(book);

    let bookDiv = $("<div></div>");
    bookDiv.attr("onmouseover", `revealButton(${myLibrary.length}, event)`);
    bookDiv.attr("onmouseout", `revealButton(${myLibrary.length}, event)`);
    bookDiv.addClass(`book${myLibrary.length}`);
    $(".library-entries").append(bookDiv);

    /*
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

    $(`.book${myLibrary.length}`).appendChild(titleText);
    $(`.book${myLibrary.length}`).appendChild(authorText);
    $(`.book${myLibrary.length}`).appendChild(pageText);
    $(`.book${myLibrary.length}`).appendChild(readText);
    $(`.book${myLibrary.length}`).appendChild(delButton);

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
    */

    let titleText = $("<h3></h3>");
    titleText.id = `book-title${myLibrary.length}`;
    let authorText = $("<h3></h3>");
    authorText.id = `book-author${myLibrary.length}`;
    let pageText = $("<h3></h3>");
    pageText.id = `book-pages${myLibrary.length}`;
    let readText = ("<h3></h3>");
    readText.id = `book-read${myLibrary.length}`;
    let delButton = ("<button></button");
    delButton.id = `book-del${myLibrary.length}`;
    delButton.innerHTML = "ERASE";

    $(`.book${myLibrary.length}`).append(titleText);
    $(`.book${myLibrary.length}`).append(authorText);
    $(`.book${myLibrary.length}`).append(pageText);
    $(`.book${myLibrary.length}`).append(readText);
    $(`.book${myLibrary.length}`).append(delButton);

    $(`#book-del${myLibrary.length}`).attr("onClick", "deleteItem(event)");

    let titleNode = document.createTextNode(`${myLibrary[myLibrary.length - 1].title}`);
    $(`#book-title${myLibrary.length}`).append(titleNode);
    let authorNode = document.createTextNode(`${myLibrary[myLibrary.length - 1].author}`);
    $(`#book-author${myLibrary.length}`).append(authorNode);
    let pageNode = document.createTextNode(`${myLibrary[myLibrary.length - 1].pageCount}`);
    $(`#book-pages${myLibrary.length}`).append(pageNode);
    let readNode = document.createTextNode(
        (readStatus === true) ? "Yes" : "No"
    );
    $(`#book-read${myLibrary.length}`).append(readNode);

    changeHeader();
    displayForm();

    $("#title").value = "";
    $("#author").value = "";
    $("#pageCount").value = "";
    $("#readStatus").checked = false;
}

function displayForm() {
    /*
    if (document.getElementById("form-container").classList.value === "form-container-open") {
        document.getElementById("form-container").classList.value = "form-container-closed";
    }
    else {
        document.getElementById("form-container").classList.value = "form-container-open";
    }
    */

    if ($("#form-container").attr("class") === "form-container-open") {
        $("#form-container").addClass("form-container-closed");
    }
    else {
        $("#form-container").addClass("form-container-open");
    }
}

function changeHeader() {
    /*
    if (myLibrary.length) {
        document.querySelector(".library-default").style.display = "none";
        document.querySelector(".library-headers").style.display = "grid";
    }
    else {
        document.querySelector(".library-default").style.display = "grid";
        document.querySelector(".library-headers").style.display = "none";
    }
    */

    if (myLibrary.length) {
        $(".library-default").style.display = "none";
        $(".library-headers").style.display = "grid";
    }
    else {
        $(".library-default").style.display = "grid";
        $(".library-headers").style.display = "none";
    }
}

function showReset() {
    /*
    if (document.querySelector(".warning-container").style.display === "flex") {
        document.querySelector(".warning-container").style.display = "none";
    }
    else {
        document.querySelector(".warning-container").style.display = "flex";
    }
    */

    if ($(".warning-container").style.display === "flex") {
        $(".warning-container").style.display = "none";
    }
    else {
        $(".warning-container").style.display = "flex";
    }
}

function resetForm() {
    /*
    const books = document.querySelectorAll("div[class^='book']");
    
    myLibrary = [];

    for (const book of books) {
        book.remove();
    }

    changeHeader();
    showReset();
    */

    const books = $("div[class^='book']");
    
    myLibrary = [];

    for (const book of books) {
        book.remove();
    }

    changeHeader();
    showReset();
}

function revealButton(bookNum, event) {
    /*
    if (event.type === "mouseover") {
        document.getElementById(`book-del${bookNum}`).style.right = "5vw";
    }
    else {
        document.getElementById(`book-del${bookNum}`).style.right = "0vw";
    }
    */

    if (event.type === "mouseover") {
        $(`#book-del${bookNum}`).style.right = "5vw";
    }
    else {
        $(`#book-del${bookNum}`).style.right = "0vw";
    }
}

function deleteItem(button) {
    /*
    document.querySelector(`.${button.target.parentElement.className}`).style.maxHeight = "0";

    const bookNum = button.target.id[button.target.id.length - 1];
    document.querySelector(`.${button.target.parentElement.className}`).remove();

    for (let i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].title === button.target.parentElement.childNodes[0].textContent) {
            myLibrary.splice(i, 1);
            break;
        }
    }

    if (myLibrary.length === 0) {
        document.querySelector(".library-default").style.display = "grid";
        document.querySelector(".library-headers").style.display = "none";
    }
    else {
        document.querySelector(".library-default").style.display = "none";
        document.querySelector(".library-headers").style.display = "grid";
    }
    */

    $(`.${button.target.parentElement.className}`).style.maxHeight = "0";

    const bookNum = button.target.id[button.target.id.length - 1];
    $(`.${button.target.parentElement.className}`).remove();

    for (let i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].title === button.target.parentElement.childNodes[0].textContent) {
            myLibrary.splice(i, 1);
            break;
        }
    }

    if (myLibrary.length === 0) {
        $(".library-default").style.display = "grid";
        $(".library-headers").style.display = "none";
    }
    else {
        $(".library-default").style.display = "none";
        $(".library-headers").style.display = "grid";
    }
}

function checkAnswers() {
    /*
    for (let i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].title === document.getElementById("title").value) {
            document.querySelector(".duplicate-container").style.display = "flex";
            return;
        }
    }
    */

    for (let i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].title === $("#title").value) {
            $(".duplicate-container").style.display = "flex";
            return;
        }
    }

    addBookToLibrary();
}

function returnToForm() {
    /*
    document.querySelector('.duplicate-container').style.display = 'none';
    */

    $('.duplicate-container').style.display = 'none';
}

function sortLibrary(event) {
    function sortFunc(sortType, library) {
        return function(a, b) {
            let varA, varB;
    
            if (sortType === "Title") {
                if (library === 'Document') {
                    varA = a.firstChild.innerHTML.toUpperCase();
                    varB = b.firstChild.innerHTML.toUpperCase();
                }
                else {
                    varA = a.title.toUpperCase();
                    varB = b.title.toUpperCase();
                }
            }
            else if (sortType === "Author") {
                if (library === 'Document') {
                    varA = a.childNodes[1].innerHTML.toUpperCase();
                    varB = b.childNodes[1].innerHTML.toUpperCase();
                }
                else {
                    varA = a.author.toUpperCase();
                    varB = b.author.toUpperCase();
                }
            }
            else if (sortType === "Page Count") {
                if (library === 'Document') {
                    varA = Number(a.childNodes[2].innerHTML);
                    varB = Number(b.childNodes[2].innerHTML);
                }
                else {
                    varA = Number(a.pageCount);
                    varB = Number(b.pageCount);
                }
            }
            else if (sortType === "Read?") {
                if (library === 'Document') {
                    varA = a.childNodes[3].innerHTML;
                    varB = b.childNodes[3].innerHTML;
                }
                else {
                    varA = (a.readStatus === true) ? 1 : 0;
                    varB = (b.readStatus === true) ? 1 : 0;
                }
            }
    
            return (varA < varB) ? -1 : (varA > varB) ? 1 : 0;
        }
    }

    let sortType = event.target.innerHTML;
    let oldLibrary = [];

    for (const entry of document.querySelectorAll("[class^=book]")) {
        oldLibrary.push(entry);
        entry.remove();
    }

    let newLibrary = oldLibrary.sort(
        sortFunc(sortType, 'Document')
        );
    myLibrary = myLibrary.sort(
        sortFunc(sortType, 'Object')
        );

    if (oldLibrary === newLibrary) {
        newLibrary = newLibrary.reverse();
        myLibrary = myLibrary.reverse();
    }

    for (const entry of newLibrary) {
        document.querySelector(".library-entries").appendChild(entry);
    }
}