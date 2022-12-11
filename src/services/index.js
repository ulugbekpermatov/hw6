class BookStoreService {
  #books = [
    {
      id: 1,
      title: "Proudction-Readi Microservices",
      author: "Susan J. Fowler",
      price: 36,
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg",
    },

    {
      id: 2,
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J. K. Rowling",
      price: 52,
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BMzkyZGFlOWQtZjFlMi00N2YwLWE2OWQtYTgxY2NkNmM1NjMwXkEyXkFqcGdeQXVyNjY1NTM1MzA@._V1_.jpg",
    },

    {
      id: 3,
      title: "All Good Perople Here: A Novel",
      author: "J. K. Rowling",
      price: 22,
      imgUrl:
        "https://crimejunkiepodcast.com/wp-content/uploads/2022/08/All-Good-People-Here-Book.jpg",
    },

    {
      id: 4,
      title: "The Seawolf",
      author: "Jack London",
      price: 22,
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/f/f0/Sea-wolf_cover.jpg",
    },
  ];

  getBooks = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.#books);
      }, 2000);
    });
  };

  getBook = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(this.#books.find((el) => el.id === id))
        }, 1500);
    });
  };
}


export default BookStoreService

