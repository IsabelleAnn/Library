let myLibrary = [{ author: "JRR Tolkien", title: "The Lord of the Rings - The Fellowship of the Ring", pages: "330", status: true }, { author: "manual input", title: "my book", pages: "400", status: false }, { author: "JRR Tolkien", title: "The Lord of the Rings - The Fellowship of the Ring", pages: "330", status: true }, { author: "manual input", title: "my book", pages: "400", status: false }, { author: "JRR Tolkien", title: "The Lord of the Rings - The Fellowship of the Ring", pages: "330", status: true }, { author: "manual input", title: "my book", pages: "400", status: false }, { author: "JRR Tolkien", title: "The Lord of the Rings - The Fellowship of the Ring", pages: "330", status: true }, { author: "manual input", title: "my book", pages: "400", status: false }, { author: "JRR Tolkien", title: "The Lord of the Rings - The Fellowship of the Ring", pages: "330", status: true }];
const mainSection = document.querySelector("#main-container");
const addBookBtn = document.querySelector("#add-book-btn");
let count = 1;

myLibrary.forEach(book => {
    generateBookCard(book);
});

addBookBtn.addEventListener("click", () => {
    addBookToLibrary();
});

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

function addBookToLibrary() {
    let newBookObj = new Book(prompt("Enter name of Author"), prompt("Enter name of Title"), prompt("Enter number of pages"), prompt("Have you read the book yet?"));
    myLibrary.push(newBookObj);
    generateBookCard(newBookObj);

}

function deleteBookFromLibrary(parentID) {
    let index = parentID - "book-";
    let deleteMe = document.getElementById(parentID);
    mainSection.removeChild(deleteMe);
    myLibrary.splice(index, 1);
}