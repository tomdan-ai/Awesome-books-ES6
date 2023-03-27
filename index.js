import { Book, Library } from './modules/classes.js';
import { DateTime } from './modules/luxon.js';

const myLibrary = new Library();
myLibrary.addBook(new Book('Title', 'Author'));

const library = new Library();

class BookCard extends HTMLElement {
  connectedCallback() {
    const {
      id, title, author, description, cover,
    } = this.attributes;

    this.innerHTML = `
        <div class="card mx-auto">
          <img src="${cover.value}" class="card-img-top" alt="Book Cover" />
          <div class="card-body">
            <h5 class="card-title">${title.value}</h5>
            <p class="card-subtitle">${author.value}</p>
            <p class="card-text">${description.value}</p>
            <button id="card-btn-${id.value}" class="btn btn-danger card-btn">Remove</button>
          </div>
        </div>
      `;

    const cardBtns = document.querySelectorAll('.card-btn');
    cardBtns.forEach((cardBtn) => {
      const idx = parseInt(cardBtn.id.split('-')[2]);
      cardBtn.addEventListener('click', () => {
        removeBook(idx);
      });
    });
  }
}

customElements.define('book-card', BookCard);

const contactForm = document.querySelector('.contact-form');
const addBookContainer = document.querySelector('.add-book-container');

const recreateUI = () => {
  const existingBooks = document.querySelector('.books-container');
  if (existingBooks) {
    existingBooks.remove();
  }

  const mainContainer = document.querySelector('.main-container');
  const bookContainer = document.createElement('div');
  bookContainer.classList.add('row', 'books-container');

  library.booksData.forEach(({
    id, title, author, description, cover,
  }) => {
    const bookItem = document.createElement('div');
    bookItem.classList.add('col-12', 'col-md-6', 'col-lg-4', 'my-3');
    bookItem.innerHTML = `
        <book-card
          id=${JSON.stringify(id)}
          title=${JSON.stringify(title)}
          author=${JSON.stringify(author)}
          description=${JSON.stringify(description)}
          cover=${JSON.stringify(cover)}
        ></book-card>
      `;
    bookContainer.appendChild(bookItem);
  });

  mainContainer.appendChild(bookContainer);
};

const addBookHandler = (e) => {
  e.preventDefault();
  const bookTitle = document.querySelector('.new-book-title');
  const bookAuthor = document.querySelector('.new-book-author');

  const book = new Book(bookTitle.value, bookAuthor.value);
  library.addBook(book);
  bookTitle.value = '';
  bookAuthor.value = '';
  main();
};

const removeBook = (idx) => {
  library.removeBook(idx);
  recreateUI();
};

const main = () => {
  contactForm.style.display = 'none';
  addBookContainer.style.display = 'none';
  recreateUI();
};

const showContact = () => {
  contactForm.style.display = 'block';
  addBookContainer.style.display = 'none';
  const existingBooks = document.querySelector('.books-container');
  if (existingBooks) {
    existingBooks.remove();
  }
};

const showAddBook = () => {
  contactForm.style.display = 'none';
  const existingBooks = document.querySelector('.books-container');
  if (existingBooks) {
    existingBooks.remove();
  }
  addBookContainer.style.display = 'block';
};

const form = document.querySelector('.add-book-form');
form.addEventListener('submit', addBookHandler);

const contactBtn = document.querySelector('#contact-btn');
contactBtn.addEventListener('click', showContact);

const homeBtn = document.querySelector('#home-btn');
homeBtn.addEventListener('click', main);

const addBookBtn = document.querySelector('#add-book-btn');
addBookBtn.addEventListener('click', showAddBook);

main();

const currentTime = DateTime.now().toLocaleString(
  DateTime.DATETIME_MED_WITH_SECONDS,
);
document.getElementById('time').innerHTML = currentTime;
