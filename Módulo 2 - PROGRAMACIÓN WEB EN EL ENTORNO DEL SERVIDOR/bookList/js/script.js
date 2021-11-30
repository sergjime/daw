function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

function Ui() {}

Ui.prototype.addBooktoList = function (book) {
  const list = document.getElementById("book-list");
  const row = document.createElement("tr");
  row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="delete">X</a></td>
      `;
  list.appendChild(row);
};

Ui.prototype.deleteBook = function (target) {
  target.parentElement.parentElement.remove();
};

Ui.prototype.clearFields = function () {
  (document.getElementById("title").value = ""),
    (document.getElementById("author").value = ""),
    (document.getElementById("isbn").value = "");
};

Ui.prototype.showAlert = function (msg, className) {
  const div = document.createElement("div");
  div.className = `alert ${className}`;
  div.appendChild(document.createTextNode(msg));
  const contenedor = document.querySelector(".container");
  const form = document.querySelector("#book-form");
  contenedor.insertBefore(div, form);
  setTimeout(function () {
    document.querySelector(".alert").remove();
  }, 2000);
};

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
    ui.showAlert("Libro añadido correctamente", "success");
    ui.clearFields();
  }

  e.preventDefault();
});

document.getElementById("book-list").addEventListener("click", function (e) {
  if (e.target.className === "delete") {
    const ui = new Ui();
    ui.deleteBook(e.target);
    ui.showAlert("El libro se ha eliminado correctamente", "success");
  }
});
