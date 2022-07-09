let myLibrary = [{ author: "JRR Tolkien", title: "The Lord of the Rings - The Fellowship of the Ring", pages: "330", status: true, ID: 1 }, { author: "JRR Tolkien", title: "The Lord of the Rings - The Two Towers", pages: "400", status: false, ID: 2 }, { author: "JRR Tolkien", title: "The Lord of the Rings - Return of the King", pages: "330", status: true, ID: 3 }, { author: "JRR Tolkien", title: "The Hobbit", pages: "400", status: false, ID: 4 }, { author: "Terry Pratchett", title: "The Color of Magic", pages: "330", status: true, ID: 5 }, { author: "Terry Pratchett", title: "Small Gods", pages: "400", status: false, ID: 6 }, { author: "Terry Pratchett", title: "The Wee Free Men", pages: "330", status: true, ID: 7 }, { author: "Jane Austen", title: "Price and Prejudice", pages: "400", status: false, ID: 8 }, { author: "Jane Austen", title: "Emma", pages: "330", status: true, ID: 9 }];
const mainSection = document.querySelector("#main-container");
const addBookToLibraryBtn = document.querySelector("#add-book-btn");
let count = 1;
let form = document.getElementById("add-book-form");
let submitBtn = document.getElementById("submit-new-book");
let cancelSubmitBtn = document.getElementById("cancel-submit");
let title = document.getElementById("title");
let author = document.getElementById("author");
let pages = document.getElementById("pages");
let readStatus = document.getElementById("status");

//////////Add Books from Existing Library to DOM:

myLibrary.forEach(book => {
    generateBookCard(book);
});

//////////Event Listeners:

addBookToLibraryBtn.addEventListener("click", () => {
    form.classList.remove("hidden");
});

cancelSubmitBtn.addEventListener("click", () => {
    title.value = "";
    author.value = "";
    pages.value = "";
    readStatus.checked = false;
    form.classList.add("hidden");
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let object = new Book(author.value, title.value, pages.value, readStatus.checked, count);
    addBookToLibrary(object);
    console.log(object);
    title.value = "";
    author.value = "";
    pages.value = "";
    readStatus.checked = false;
    form.classList.add("hidden");
});

//////////Book Creation Functions:

function Book(author, title, pages, status, ID) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.status = status;
    this.ID = ID;
}

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
    generateBookCard(newBook);
}

////New Card Generator:

function generateBookCard(element) {

    let bookCard = document.createElement("div");
    bookCard.classList.add(`book-card`);
    bookCard.setAttribute("id", `book-${element.ID}`);
    mainSection.appendChild(bookCard);

    let btnsContainer = document.createElement("div");
    btnsContainer.classList.add("btns-container");
    bookCard.appendChild(btnsContainer);

    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "X";
    btnsContainer.appendChild(deleteBtn);

    let statusBtn = document.createElement("div");
    statusBtn.classList.add("status-btn");
    if (element.status) {
        statusBtn.textContent = "Read";
        statusBtn.classList.add("read");

    } else {
        statusBtn.textContent = "Unread";
    }
    btnsContainer.appendChild(statusBtn);

    let textContainer = document.createElement("div");
    textContainer.classList.add("text-container");
    bookCard.appendChild(textContainer);

    let bookTitle = document.createElement("h1");
    bookTitle.classList.add("book-title");
    bookTitle.textContent = `${element.title}`;
    let bookAuthor = document.createElement("p");
    bookAuthor.classList.add("book-author");
    bookAuthor.textContent = `by ${element.author}`;
    let bookPages = document.createElement("p");
    bookPages.classList.add("book-pages");
    bookPages.textContent = `${element.pages} pages`;

    textContainer.appendChild(bookTitle);
    textContainer.appendChild(bookAuthor);
    textContainer.appendChild(bookPages);

    ////Book Card Event Listeners:
    statusBtn.addEventListener("click", (e) => {
        statusBtn.classList.toggle("read");
        if (statusBtn.textContent === "Read") {
            statusBtn.textContent = "Unread";
            element.status = false;
        } else {
            statusBtn.textContent = "Read";
            element.status = true;
        }
        console.log(element);
    });

    deleteBtn.addEventListener("click", (e) => {
        console.log(element);
        deleteBookFromLibrary(e.target.parentElement.parentElement.id, element.ID);
    });

    ////ID # counter:

    count++;
}

////Remove Book From Library Function:

function deleteBookFromLibrary(parentID, ID) {
    let deleteMe = document.getElementById(parentID);
    mainSection.removeChild(deleteMe);
    let index = myLibrary.findIndex(object => {
        return object.ID === ID;
    });
    myLibrary.splice(index, 1);
}