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
    bookDiv.attr("class", `book${myLibrary.length}`);
    $(".library-entries").append(bookDiv);

    let titleText = $(`<h3 id="book-title${myLibrary.length}"></h3>`);
    let authorText = $(`<h3 id="book-author${myLibrary.length}"></h3>`);
    let pageText = $(`<h3 id="book-pages${myLibrary.length}"></h3>`);
    let readText = (`<h3 id="book-read${myLibrary.length}"></h3>`);
    let delButton = $(`<button id="book-del${myLibrary.length}"></button`).text("ERASE");

    $(`.book${myLibrary.length}`).append(titleText, authorText, pageText, readText, delButton);

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

    $("#title, #author, #pageCount").val("");
    $("#readStatus").prop("checked", false);
}

function displayForm() {
    $("#form-container").toggleClass("form-container-open form-container-closed");
}

function changeHeader() {
    if (myLibrary.length) {
        $(".library-default").hide();
        $(".library-headers").css("display", "grid");
    } else {
        $(".library-default").css("display", "grid");
        $(".library-headers").hide();
    }
}

function showReset() {
    if ($(".warning-container").css("display") === "flex") {
        $(".warning-container").hide();
    } else {
        $(".warning-container").css("display", "flex");
    }
}

function resetForm() {
    const books = $("div[class^='book']");
    
    myLibrary = [];

    for (const book of books) {
        book.remove();
    }

    changeHeader();
    showReset();
}

function revealButton(bookNum, event) {
    if (event.type === "mouseover") {
        $(`#book-del${bookNum}`).css("right", "5vw");
    } else {
        $(`#book-del${bookNum}`).css("right", "0vw");
    }
}

function deleteItem(button) {
    $(`.${button.target.parentElement.className}`).css("maxHeight", "0");

    const bookNum = button.target.id[button.target.id.length - 1];
    $(`.${button.target.parentElement.className}`).remove();

    for (let i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].title === button.target.parentElement.childNodes[0].textContent) {
            myLibrary.splice(i, 1);
            break;
        }
    }

    if (!myLibrary.length) {
        $(".library-default").css("display", "grid");
        $(".library-headers").hide();
    } else {
        $(".library-default").hide();
        $(".library-headers").css("display", "grid");
    }
}

function checkAnswers() {
    for (let i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].title === $("#title").val()) {
            $(".duplicate-container").css("display", "flex");
            return;
        }
    }

    addBookToLibrary();
}

function returnToForm() {
    $('.duplicate-container').hide();
}

function sortLibrary(event) {
    function sortFunc(sortType, library) {
        return function(a, b) {
            let varA, varB;
    
            if (sortType === "Title") {
                if (library === 'Document') {
                    varA = a.firstChild.innerHTML.toUpperCase();
                    varB = b.firstChild.innerHTML.toUpperCase();
                } else {
                    varA = a.title.toUpperCase();
                    varB = b.title.toUpperCase();
                }
            }
            else if (sortType === "Author") {
                if (library === 'Document') {
                    varA = a.childNodes[1].innerHTML.toUpperCase();
                    varB = b.childNodes[1].innerHTML.toUpperCase();
                } else {
                    varA = a.author.toUpperCase();
                    varB = b.author.toUpperCase();
                }
            }
            else if (sortType === "Page Count") {
                if (library === 'Document') {
                    varA = Number(a.childNodes[2].innerHTML);
                    varB = Number(b.childNodes[2].innerHTML);
                } else {
                    varA = Number(a.pageCount);
                    varB = Number(b.pageCount);
                }
            }
            else if (sortType === "Read?") {
                if (library === 'Document') {
                    varA = a.childNodes[3].innerHTML;
                    varB = b.childNodes[3].innerHTML;
                } else {
                    varA = (a.readStatus === true) ? 1 : 0;
                    varB = (b.readStatus === true) ? 1 : 0;
                }
            }
    
            return (varA < varB) ? -1 : (varA > varB) ? 1 : 0;
        }
    }

    let sortType = event.target.innerHTML;
    let oldLibrary = [];

    for (const entry of $("[class^=book]")) {
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
        $(".library-entries").append(entry);
    }
}