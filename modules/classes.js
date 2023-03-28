export class Book {
    id = Date.now();

    description = `Lorem ipsum dolor sit amet 
                    consectetur adipisicing elit. Velit
                    earum saepe fugiat!`;

    cover = 'assets/book.png';

    cover = 'img/Book1.jpg'

    constructor(title, author) {
      this.title = title;
      this.author = author;
    }
}

export class Library {
    booksData = (() => {
      const booksDataFromLocalStorage = JSON.parse(
        localStorage.getItem('booksData'),
      );
      const booksLSExists = booksDataFromLocalStorage !== undefined
        && booksDataFromLocalStorage !== null;
      return booksLSExists
        ? booksDataFromLocalStorage
        : [
          {
            id: 1,
            title: 'Lorem, ipsum.',
            author: 'John Doe',
            description: `Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Velit
                earum saepe fugiat!`,
            cover: 'img/Book1.jpg',
          },
          {
            id: 2,
            title: 'Lorem, ipsum.',
            author: 'John Doe',
            description: `Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Velit
                earum saepe fugiat!`,
            cover: 'assets/book.png',
          },
          {
            id: 3,
            title: 'Lorem, ipsum.',
            author: 'John Doe',
            description: `Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Velit
                earum saepe fugiat!`,
            cover: 'assets/book.png',
          },
          {
            id: 4,
            title: 'Lorem, ipsum.',
            author: 'John Doe',
            description: `Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Velit
                earum saepe fugiat!`,
            cover: 'assets/book.png',
          },
        ];
    })();

    addBook = (book) => {
      this.booksData.push(book);
      localStorage.setItem('booksData', JSON.stringify(this.booksData));
    };

    removeBook = (bookId) => {
      this.booksData = this.booksData.filter(({ id }) => id !== bookId);
      localStorage.setItem('booksData', JSON.stringify(this.booksData));
    };
}
