let myLibrary = []; 

const btnSubmit = document.querySelector('.btnSubmit'); 
const inputTitle = document.getElementById('title'); 
const inputAuthor = document.getElementById('author'); 
const inputPages = document.getElementById('pages'); 
const inputRead = document.getElementById('read'); 

class Book {

  constructor(title, author, pages, read) {
    this.title = title; 
    this.author = author; 
    this.pages = pages; 
    this.read = read; 
  }

  changeReadStatus() {
    if (this.read === 'has been read') {
      this.read = 'has not been read'; 
    } else {
      this.read = 'has been read'; 
    }
  }

}

btnSubmit.addEventListener('click', function addBookToLibrary() {
  let newBook = new Book(inputTitle.value, inputAuthor.value, inputPages.value, inputRead.value);
  myLibrary.push(newBook); 
});

const divLibrary = document.querySelector('.divLibrary'); 
const btnDisplayLibrary = document.querySelector('.btnDisplayL'); 

btnDisplayLibrary.addEventListener('click', function displayLibrary() {
  for (let i = 0; i < myLibrary.length; i++) {

    //create book card
    pBook = document.createElement('p');
    pBook.textContent = `
    ${myLibrary[i].title} by 
    ${myLibrary[i].author}, 
    ${myLibrary[i].pages} pages, 
    ${myLibrary[i].read}`; 
    pBook.setAttribute('id', `book-${i}`);
    divLibrary.appendChild(pBook);

    //create book removal button
    const btnRm = document.createElement('button'); 
    const currentBook = document.getElementById(`book-${i}`); 
    
    btnRm.addEventListener('click', function removeBook() {
      myLibrary.splice(i, 1); 
      currentBook.remove(); 
      btnReadStatus.remove(); 
      btnRm.remove(); 
    }); 

    btnRm.textContent = 'Remove Book'; 
    btnRm.classList.add('btnRm'); 
    divLibrary.appendChild(btnRm); 

    //create read status button
    const btnReadStatus = document.createElement('button'); 
    btnReadStatus.addEventListener('click', myLibrary[i].changeReadStatus()); 
    btnReadStatus.textContent = 'Change Read Status';
    btnReadStatus.classList.add('btnReadStatus');  
    divLibrary.appendChild(btnReadStatus); 
  }
}); 

const form = document.querySelector('form'); 
const btnDisplayForm = document.querySelector('.btnDisplayF'); 

btnDisplayForm.addEventListener('click', function() {
  if (form.style.display === 'flex') {
    form.style.display = 'none'; 
  } else {
    form.style.display = 'flex'; 
  }
}); 