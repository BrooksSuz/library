let divLibrary = document.querySelector('.divLibrary'); 

let myLibrary = ['Moby Dick', 'The Great Gatsby', '1984']; 

function Book(title, author, pages, read) {
  this.title = title; 
  this.author = author; 
  this.pages = pages; 
  this.read = read; 
}

function addBookToLibrary (newBook) {
  if (!myLibrary.includes(newBook)) {
    myLibrary.push(newbook); 
  }
}

function DisplayLibrary () {
  myLibrary.forEach(book => {
    textBook = document.createTextNode(`${book}`); 
    divLibrary.appendChild(textBook); 
  }); 
}