const divLibrary = document.querySelector('.divLibrary'); 
const buttonDisplayForm = document.querySelector('.btnDisplayF'); 
const buttonDisplayLibrary = document.querySelector('.btnDisplayL'); 
const form = document.querySelector('form'); 

let myLibrary = [{
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

function Book(title, author, pages, read) {
  this.title = title; 
  this.author = author; 
  this.pages = pages; 
  this.read = read; 
}

function addBookToLibrary (newBook) {
  if (!myLibrary.includes(newBook)) {
    myLibrary.push(newBook); 
  }
}

buttonDisplayLibrary.addEventListener('click', function DisplayLibrary () {
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
})

buttonDisplayForm.addEventListener('click', function(e) {
  if (form.style.display === 'flex') {
    form.style.display = 'none'; 
  } else {
    form.style.display = 'flex'; 
  }
})