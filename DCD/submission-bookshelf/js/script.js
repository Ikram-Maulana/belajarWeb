document.addEventListener("DOMContentLoaded", function () {

  const bookForm = document.getElementById("bookForm");
  const bookSearch = document.getElementById("searchBook");

  bookForm.addEventListener("submit", function (event) {
    event.preventDefault();
    addBook();
  });

  if (isStorageExist()) {
    loadDataFromStorage();
  }

  bookSearch.addEventListener("submit", (event) => {
    event.preventDefault();
    searchBook();
  })

  bookSearch.addEventListener("keyup", (event) => {
    event.preventDefault();
    searchBook();
  })
});

document.addEventListener("ondataloaded", () => {
  refreshDataFromBooks();
});