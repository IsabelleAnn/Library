let myLibrary = [{ author: "JRR Tolkien", title: "The Lord of the Rings - The Fellowship of the Ring", pages: "330", readIt: true }, { author: "manual input", title: "my book", pages: "400", readIt: false }, { author: "JRR Tolkien", title: "The Lord of the Rings - The Fellowship of the Ring", pages: "330", readIt: true }, { author: "manual input", title: "my book", pages: "400", readIt: false }, { author: "JRR Tolkien", title: "The Lord of the Rings - The Fellowship of the Ring", pages: "330", readIt: true }, { author: "manual input", title: "my book", pages: "400", readIt: false }, { author: "JRR Tolkien", title: "The Lord of the Rings - The Fellowship of the Ring", pages: "330", readIt: true }, { author: "manual input", title: "my book", pages: "400", readIt: false }, { author: "JRR Tolkien", title: "The Lord of the Rings - The Fellowship of the Ring", pages: "330", readIt: true }];

function Book(author, title, pages, readIt) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.readIt = readIt;

}

function addBookToLibrary() {
    let newBookObj = new Book(prompt("Enter name of Author"), prompt("Enter name of Title"), prompt("Enter number of pages"), prompt("Have you read the book yet?"));
    myLibrary.push(newBookObj);
}

const mainSection = document.querySelector("#main-container");

function displayBookCards() {
    myLibrary.forEach(element => {

        let bookCard = document.createElement("div");
        bookCard.classList.add("book-card");
        mainSection.appendChild(bookCard);

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

    });
}

displayBookCards();