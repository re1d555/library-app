const cards = document.querySelector('.book-cards');
const addBtn = document.querySelector('.add-btn');
const closeBtn = document.querySelector('.modal-end');
const dialog = document.querySelector('dialog');
const titleInput = document.querySelector('.title-input');
const authorInput = document.querySelector('.author-input');
const pagesInput = document.querySelector('.pages-input');
const confirmBtn = document.querySelector('.confirm-btn');
const dialogRead = document.querySelector('#read');

// const book1 = new Book('Before they hanged', 'Joe Abercrombie', 441, 'read');
// const book2 = new Book('The Wise Man`s Fear', 'Patrick Rothfuss', 994, 'not read');
// const book3 = new Book('Old Man`s War ', 'John Scalzi', 352, 'not read');

const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    const newBook = new Book(titleInput.value, authorInput.value, pagesInput.value, dialogRead.checked);
    newBook.bookOnDisplay();
    myLibrary.push(newBook);
}

Book.prototype.bookOnDisplay = function() {
    const card = document.createElement('div');
    card.className = 'card';
    cards.appendChild(card);

    const del = document.createElement('button');
    del.textContent = 'X';
    del.addEventListener('click', () => {
        myLibrary.splice(this, 1);
        cards.removeChild(card);
    });

    const title = document.createElement('div');
    title.textContent = this.title;
        
    const author = document.createElement('div');
    author.textContent = 'by ' + this.author;
        
    const pages = document.createElement('div');
    pages.textContent = this.pages + ' pages';
        
    const cardRead = document.createElement('div');
    this.read === true ? cardRead.textContent = 'read' : cardRead.textContent = 'not read yet';
    
    card.appendChild(del);
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(cardRead);
}

// horizontal book cards scrolling
window.addEventListener('wheel', (e) => {
    if (e.deltaY > 0) {
        cards.scrollLeft +=100;
    } else {
        cards.scrollLeft -=100;
    }
});

addBtn.addEventListener('click', () => {
    dialog.showModal();
});

closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    dialog.close();
    cleanInputs()
});

confirmBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addBookToLibrary();
    dialog.close();
    cleanInputs()
});

dialog.addEventListener('cancel', cleanInputs);

function cleanInputs() {
    titleInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';
    dialogRead.checked = false;
}