export class Book {
    id = Date.now();

    description = `Lorem ipsum dolor sit amet 
                    consectetur adipisicing elit. Velit
                    earum saepe fugiat!`;

    cover = 'img/Book1.jpg';

    constructor(title, author) {
      this.title = title;
      this.author = author;
    }
}

export class Library {
    booksData = JSON.parse(localStorage.getItem('booksData')) ?? [
      {
        id: 1,
        title: 'Lorem, ipsum.',
        author: 'John Doe',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit earum saepe fugiat!',
        cover: 'img/Book1.jpg',
      },
      {
        id: 2,
        title: 'Lorem, ipsum.',
        author: 'John Doe',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit earum saepe fugiat!',
        cover: 'img/Book1.jpg',
      },
      {
        id: 3,
        title: 'Lorem, ipsum.',
        author: 'John Doe',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit earum saepe fugiat!',
        cover: 'img/Book1.jpg',
      },
      {
        id: 4,
        title: 'Lorem, ipsum.',
        author: 'John Doe',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit earum saepe fugiat!',
        cover: 'img/Book1.jpg',
      },
    ];

    constructor() {}

    addBook = (book) => {
      this.booksData = [...this.booksData, book];
      localStorage.setItem('booksData', JSON.stringify(this.booksData));
    };

    removeBook = (bookId) => {
      this.booksData = this.booksData.filter(({ id }) => id !== bookId);
      localStorage.setItem('booksData', JSON.stringify(this.booksData));
    };
}
