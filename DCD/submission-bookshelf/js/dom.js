const isComplete = document.getElementById("isComplete");
const searchTitle = document.getElementById("searchTitle");

const UNCOMPLETE_BOOK = "uncompleteBook";
const COMPLETE_BOOK = "completeBook";
const BOOK_ITEMID = "bookId";


isComplete.addEventListener("click", () => {
  if (isComplete.checked) {
    document.querySelector("#bookSubmit > span").innerText = "Sudah selesai dibaca";
  } else {
    document.querySelector("#bookSubmit > span").innerHTML = "Belum selesai dibaca";
  }
})

const addBook = () => {
  const uncompletedBook = document.getElementById(UNCOMPLETE_BOOK);
  const completeBook = document.getElementById(COMPLETE_BOOK);
  const bookTitle = document.getElementById("bookTitle").value;
  const bookAuthor = document.getElementById("bookAuthor").value;
  const bookYear = document.getElementById("bookYear").value;
  const isCompleted = (isComplete.checked) ? true : false;

  if (isCompleted) {
    const book = inputBook(bookTitle, `Penulis: ${bookAuthor}`, `Tahun: ${bookYear}`, true);
    const bookObject = composeBookObject(bookTitle, bookAuthor, bookYear, true)

    book[BOOK_ITEMID] = bookObject.id;
    books.push(bookObject);
    completeBook.append(book);
    updateDataToStorage();
  } else {
    const book = inputBook(bookTitle, `Penulis: ${bookAuthor}`, `Tahun: ${bookYear}`, false);
    const bookObject = composeBookObject(bookTitle, bookAuthor, bookYear, false)

    book[BOOK_ITEMID] = bookObject.id;
    books.push(bookObject);
    uncompletedBook.append(book);
    updateDataToStorage();
  }
}

const inputBook = (bookTitles, bookAuthors, bookYears, isComplete = false) => {
  // Membuat Keterangan Buku
  const bookTitle = document.createElement("h3");
  bookTitle.innerText = bookTitles;

  const bookAuthor = document.createElement("p");
  bookAuthor.classList.add("author");
  bookAuthor.innerText = bookAuthors;

  const bookYear = document.createElement("p");
  bookYear.classList.add("year");
  bookYear.innerText = bookYears;

  const ketContainer = document.createElement("div");
  ketContainer.classList.add("keterangan");
  ketContainer.append(bookTitle, bookAuthor, bookYear);

  const actContainer = document.createElement("div");
  actContainer.classList.add("action");
  if (isComplete) {
    actContainer.append(undoButton(), trashButton());
  } else {
    actContainer.append(completeButton(), trashButton());
  }

  // Container dua diatas
  const bookList = document.createElement("div");
  bookList.classList.add("bookList");
  bookList.append(ketContainer, actContainer);

  return bookList;
}

const searchBook = () => {
  const searchValue = searchTitle.value.toLowerCase();
  const bookList = document.querySelectorAll(".bookList");
  for (let i = 0; i < bookList.length; i++) {
    titleValue = bookList[i].textContent || bookList[i].innerText;
    if (titleValue.toLowerCase().indexOf(searchValue) > -1) {
      bookList[i].style.display = "";
    } else {
      bookList[i].style.display = "none";
    }
  }
}

const createButton = (buttonClass, eventListener, message) => {
  const button = document.createElement("button");
  button.classList.add(buttonClass);
  button.addEventListener("click", (event) => {
    eventListener(event);
  });
  button.innerText = message;
  return button;
}

// Membuat complete button
const addBookComplete = (bookElement) => {
  const bookTitle = bookElement.querySelector(".keterangan > h3").innerText;
  const bookAuthor = bookElement.querySelector(".keterangan > .author").innerText;
  const bookYear = bookElement.querySelector(".keterangan > .year").innerText;

  const newBook = inputBook(bookTitle, bookAuthor, bookYear, true);
  const completeBook = document.getElementById(COMPLETE_BOOK);
  const book = findBook(bookElement[BOOK_ITEMID]);
  // Change to isCompleted
  book.isCompleted = true;
  newBook[BOOK_ITEMID] = book.id;

  completeBook.append(newBook);
  bookElement.remove();
  updateDataToStorage();
}

const completeButton = () => {
  return createButton("green", function (event) {
    addBookComplete(event.target.parentElement.parentElement);
  }, "Selesai dibaca");
}

const removeBookComplete = (bookElement) => {
  const isDelete = window.confirm("Apakah anda yakin untuk hapus buku ini?");
  if (isDelete) {
    const bookPosition = findBookIndex(bookElement[BOOK_ITEMID]);
    books.splice(bookPosition, 1);

    bookElement.remove();
    updateDataToStorage();
    window.alert("Buku sukses dihapus!");
  } else {
    window.alert("Buku gagal dihapus!");
  }
}

const trashButton = () => {
  return createButton("red", function (event) {
    removeBookComplete(event.target.parentElement.parentElement);
  }, "Hapus buku");
}

function undoBookComplete(bookElement) {
  const uncompleteBook = document.getElementById(UNCOMPLETE_BOOK);
  const bookTitle = bookElement.querySelector(".keterangan > h3").innerText;
  const bookAuthor = bookElement.querySelector(".keterangan > .author").innerText;
  const bookYear = bookElement.querySelector(".keterangan > .year").innerText;

  const newBook = inputBook(bookTitle, bookAuthor, bookYear, false);

  const book = findBook(bookElement[BOOK_ITEMID]);
  // Change to isCompleted
  book.isCompleted = false;
  newBook[BOOK_ITEMID] = book.id;

  uncompleteBook.append(newBook);
  bookElement.remove();
  updateDataToStorage();
}

function undoButton() {
  return createButton("green", function (event) {
    undoBookComplete(event.target.parentElement.parentElement);
  }, "Undo");
}