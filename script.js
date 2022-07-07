let myLibrary = [{ author: "JRR Tolkien", title: "The Lord of the Rings - The Fellowship of the Ring", pages: "330", status: true }, { author: "manual input", title: "my book", pages: "400", status: false }, { author: "JRR Tolkien", title: "The Lord of the Rings - The Fellowship of the Ring", pages: "330", status: true }, { author: "manual input", title: "my book", pages: "400", status: false }, { author: "JRR Tolkien", title: "The Lord of the Rings - The Fellowship of the Ring", pages: "330", status: true }, { author: "manual input", title: "my book", pages: "400", status: false }, { author: "JRR Tolkien", title: "The Lord of the Rings - The Fellowship of the Ring", pages: "330", status: true }, { author: "manual input", title: "my book", pages: "400", status: false }, { author: "JRR Tolkien", title: "The Lord of the Rings - The Fellowship of the Ring", pages: "330", status: true }];
const mainSection = document.querySelector("#main-container");
const addBookBtn = document.querySelector("#add-book-btn");
let count = 1;
let form = document.getElementById("add-book-form");
let submitBtn = document.getElementById("submit-new-book");
let cancelSubmitBtn = document.getElementById("cancel-submit");
let title = document.getElementById("title");
let author = document.getElementById("author");
let pages = document.getElementById("pages");
let readStatus = document.getElementById("status");

myLibrary.forEach(book => {
    generateBookCard(book);
});

addBookBtn.addEventListener("click", () => {
    form.classList.remove("hidden");
});

cancelSubmitBtn.addEventListener("click", () => {
    title.value = "";
    author.value = "";
    pages.value = "";
    readStatus.checked = false;
    form.classList.add("hidden");
});

submitBtn.addEventListener("click", () => {

    if (title.valid && author.valid && pages.valid) {
        let object = new Book(title.value, author.value, pages.value, readStatus.checked);
        console.log(object);
        addBookToLibrary(object);
        title.value = "";
        author.value = "";
        pages.value = "";
        readStatus.checked = false;

        form.classList.add("hidden");

    }

});

function validateData(title, author, pages) {
    let titleValidity = title.valid;

}

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
    generateBookCard(newBook);
}

function Book(author, title, pages, status) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.status = status;
}

function generateBookCard(element) {
    let bookCard = document.createElement("div");
    bookCard.classList.add(`book-card`);
    bookCard.setAttribute("id", `book-${count}`);
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
        deleteBookFromLibrary(e.target.parentElement.id);
    });

    count++;
}

function deleteBookFromLibrary(parentID) {
    let index = parentID - "book-";
    let deleteMe = document.getElementById(parentID);
    mainSection.removeChild(deleteMe);
    myLibrary.splice(index, 1);
}