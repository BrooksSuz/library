const myLibrary = [{
  title: 'Moby Dick', 
  author: 'Herman Melville', 
  pages: '150', 
  read: 'no'
}, {
  title: 'The Great Gatsby', 
  author: 'F. Scott Fitzgerald', 
  pages: '200', 
  read: 'yes'
}, {
  title: '1984', 
  author: 'George Orwell', 
  pages: '120', 
  read: 'yes'
}]; 


const btnSubmit = document.querySelector('.btnSubmit'); 
const inputTitle = document.getElementById('title'); 
const inputAuthor = document.getElementById('author'); 
const inputPages = document.getElementById('pages'); 
const inputRead = document.getElementById('read'); 

function Book(title, author, pages, read) {
  this.title = title; 
  this.author = author; 
  this.pages = pages; 
  this.read = read; 
  this.displayNewBook = function() {
    console.log(`${title} by ${author}, ${pages} pages, ${read}`); 
  }
}

const newBook = new Book(inputTitle.value, inputAuthor.value, inputPages.value, inputRead.value); 

function addBookToLibrary () {

}


btnSubmit.addEventListener('click', function(e) {
  addBookToLibrary(); 
});


const divLibrary = document.querySelector('.divLibrary'); 
const btnDisplayLibrary = document.querySelector('.btnDisplayL'); 

btnDisplayLibrary.addEventListener('click', function DisplayLibrary () {
  myLibrary.forEach(book => {
    //create book card
    pBook = document.createElement('p');
    pBook.textContent = `${book.title}`; 
    divLibrary.appendChild(pBook); 

    //create book removal button
    btnRm = document.createElement('button'); 
    btnRm.textContent = 'Remove Book'; 
    btnRm.classList.add('btnRm'); 
    divLibrary.appendChild(btnRm); 
  }); 
}); 

const form = document.querySelector('form'); 
const btnDisplayForm = document.querySelector('.btnDisplayF'); 

btnDisplayForm.addEventListener('click', function(e) {
  if (form.style.display === 'flex') {
    form.style.display = 'none'; 
  } else {
    form.style.display = 'flex'; 
  }
}); 