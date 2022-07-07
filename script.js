let myLibrary = [{ author: "JRR Tolkien", title: "The Lord of the Rings - The Fellowship of the Ring", pages: "330", status: true, ID: 1 }, { author: "manual input", title: "my book", pages: "400", status: false, ID: 2 }, { author: "JRR Tolkien", title: "The Lord of the Rings - The Fellowship of the Ring", pages: "330", status: true, ID: 3 }, { author: "manual input", title: "my book", pages: "400", status: false, ID: 4 }, { author: "JRR Tolkien", title: "The Lord of the Rings - The Fellowship of the Ring", pages: "330", status: true, ID: 5 }, { author: "manual input", title: "my book", pages: "400", status: false, ID: 6 }, { author: "JRR Tolkien", title: "The Lord of the Rings - The Fellowship of the Ring", pages: "330", status: true, ID: 7 }, { author: "manual input", title: "my book", pages: "400", status: false, ID: 8 }, { author: "JRR Tolkien", title: "The Lord of the Rings - The Fellowship of the Ring", pages: "330", status: true, ID: 9 }];
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

//////////Generate Existing Library:

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
    title.value = "";
    author.value = "";
    pages.value = "";
    readStatus.checked = false;
    form.classList.add("hidden");
});

//////////Library Edit Functions:

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
    console.log("Added:", newBook);
    printArray(myLibrary);
}

function printArray(array) {
    array.forEach((item) => {
        console.log(item);
    });
}

function generateBookCard(element) {
    let bookCard = document.createElement("div");
    bookCard.classList.add(`book-card`);
    bookCard.setAttribute("id", `book-${element.ID}`);
    mainSection.appendChild(bookCard);

    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "X";
    bookCard.appendChild(deleteBtn);

    let textSection = document.createElement("div");
    textSection.classList.add("text-section");
    bookCard.appendChild(textSection);

    let bookTitle = document.createElement("h1");
    bookTitle.classList.add("book-title");
    bookTitle.textContent = `${element.title}`;
    let bookAuthor = document.createElement("p");
    bookAuthor.classList.add("book-author");
    bookAuthor.textContent = `by ${element.author}`;
    let bookPages = document.createElement("p");
    bookPages.classList.add("book-pages");
    bookPages.textContent = `${element.pages} pages`;

    textSection.appendChild(bookTitle);
    textSection.appendChild(bookAuthor);
    textSection.appendChild(bookPages);

    deleteBtn.addEventListener("click", (e) => {
        deleteBookFromLibrary(e.target.parentElement.id, element.ID);
    });
    count++;
}

function deleteBookFromLibrary(parentID, ID) {
    // let index = Number(parentID.split("-").pop());
    console.log("Index of Deleted: ", ID, parentID);
    let deleteMe = document.getElementById(parentID);
    console.log("Delete: ", deleteMe);
    mainSection.removeChild(deleteMe);
    let index = myLibrary.findIndex(object => {
        return object.ID === ID;
    });
    myLibrary.splice(index, 1);
    console.log(ID, parentID);
    printArray(myLibrary);
}