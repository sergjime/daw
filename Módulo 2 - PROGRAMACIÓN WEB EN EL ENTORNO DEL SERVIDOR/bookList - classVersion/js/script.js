class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }
    return books;
  }
  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
  }
  static displayBooks() {
    const books = Store.getBooks();
    const ui = new Ui();
    books.forEach(function (book) {
      ui.addBooktoList(book);
    });
  }
  static deleteBook(isbn) {
    const books = Store.getBooks();
    books.forEach(function (book, index) {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem("books", JSON.stringify(books));
  }
}

document.addEventListener("DOMContentLoaded", Store.displayBooks);

class Ui {
  constructor() {}
  addBooktoList(book) {
    const list = document.getElementById("book-list");
    const row = document.createElement("tr");
    row.innerHTML = `<td>${book.title}</td><td>${book.author}</td>
    <td>${book.isbn}</td><td><a href="#" class="delete">X</a></td>`;
    list.appendChild(row);
  }
  deleteBook(target) {
    target.parentElement.parentElement.remove();
  }
  clearFields() {
    (document.getElementById("title").value = ""),
      (document.getElementById("author").value = ""),
      (document.getElementById("isbn").value = "");
  }
  showAlert(msg, className) {
    const div = document.createElement("div");
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(msg));
    const contenedor = document.querySelector(".container");
    const form = document.querySelector("#book-form");
    contenedor.insertBefore(div, form);
    setTimeout(function () {
      document.querySelector(".alert").remove();
    }, 1500);
  }
}

document.getElementById("book-form").addEventListener("submit", function (e) {
  const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value;
  const ui = new Ui();
  if (title === "" || author === "" || isbn === "") {
    ui.showAlert("Revisa los campos", "error");
  } else {
    const book = new Book(title, author, isbn);
    ui.addBooktoList(book);
    Store.addBook(book);
    ui.showAlert("Libro añadido correctamente", "success");
    ui.clearFields();
  }

  e.preventDefault();
});

document.getElementById("book-list").addEventListener("click", function (e) {
  if (e.target.className === "delete") {
    const id = e.target.parentElement.previousElementSibling.textContent;
    const ui = new Ui();
    ui.deleteBook(e.target);
    Store.deleteBook(id);
    ui.showAlert("El libro se ha eliminado correctamente", "success");
  }
});
