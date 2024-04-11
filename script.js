const cards = document.querySelector('.book-cards');

const book1 = new Book('Before they hanged', 'Joe Abercrombie', 441, 'read');
const book2 = new Book('The Wise Man`s Fear', 'Patrick Rothfuss', 994, 'not read');
const book3 = new Book('Old Man`s War ', 'John Scalzi', 352, 'not read');


const myLibrary = [book1, book2, book3];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {

}

function booksOnDisplay() {
    for (let i = 0; i < myLibrary.length; i++) {
        const card = document.createElement('div');
        card.className = 'card';
        cards.appendChild(card);
        // emmm....
        const del = document.createElement('button');
        del.textContent = 'X';

        const title = document.createElement('div');
        title.textContent = myLibrary[i].title;
        const author = document.createElement('div');
        author.textContent = 'by ' + myLibrary[i].author;
        const pages = document.createElement('div');
        pages.textContent = myLibrary[i].pages + ' pages';
        const read = document.createElement('input');
        read.setAttribute('type', 'checkbox');
        card.appendChild(del);
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(read);
    }
}

booksOnDisplay();

// horizontal book cards scrolling
window.addEventListener('wheel', (e) => {
    if (e.deltaY > 0) {
        cards.scrollLeft +=40;
    } else {
        cards.scrollLeft -=40;
    }
})

