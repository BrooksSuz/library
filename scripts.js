let divLibrary = document.querySelector('.divLibrary'); 
const buttonForm = document.querySelector('button'); 

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
    pBook = document.createElement('p'); 
    pBook.textContent = `${book}`; 
    divLibrary.appendChild(pBook); 
  }); 
}

buttonForm.addEventListener('click', function(e) {
  form = document.createElement('form'); 
  
})