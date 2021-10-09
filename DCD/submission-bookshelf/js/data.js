const BOOK_STORAGE_KEY = "BOOK_APPS";
let books = [];

function isStorageExist() {
  if (typeof (Storage) === undefined) {
    alert("Browser kamu tidak mendukung local storage");
    return false
  }
  return true;
}

function saveData() {
  const parsed = JSON.stringify(books);
  localStorage.setItem(BOOK_STORAGE_KEY, parsed);
}

function loadDataFromStorage() {
  const serializedData = localStorage.getItem(BOOK_STORAGE_KEY);

  let data = JSON.parse(serializedData);

  if (data !== null)
    books = data;

  document.dispatchEvent(new Event("ondataloaded"));
}

function updateDataToStorage() {
  if (isStorageExist())
    saveData();
}

function composeBookObject(bookTitle, bookAuthor, bookYear, isCompleted) {
  return {
    id: +new Date(),
    bookTitle,
    bookAuthor,
    bookYear,
    isCompleted
  };
}

function findBook(bookId) {
  for (book of books) {
    if (book.id === bookId)
      return book;
  }
  return null;
}

function findBookIndex(bookId) {
  let index = 0
  for (book of books) {
    if (book.id === bookId)
      return index;

    index++;
  }

  return -1;
}

function refreshDataFromBooks() {
  const uncompleteBook = document.getElementById(UNCOMPLETE_BOOK);
  let completeBook = document.getElementById(COMPLETE_BOOK);


  for (book of books) {
    const newBook = inputBook(book.bookTitle, `Penulis: ${book.bookAuthor}`, `Tahun: ${book.bookYear}`, book.isCompleted);
    newBook[BOOK_ITEMID] = book.id;


    if (book.isCompleted) {
      completeBook.append(newBook);
    } else {
      uncompleteBook.append(newBook);
    }
  }
}