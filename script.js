let myLibrary = [{ author: "JRR Tolkien", title: "The Lord of the Rings - The Fellowship of the Ring", pages: "330", readIt: true }, { author: "manual input", title: "my book", pages: "400", readIt: false }];

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

function printLibrary() {
    myLibrary.forEach(element => {
        console.log(element);
    });
}