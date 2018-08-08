// const s1 = 'Hello';
// console.log(typeof s1);

// const s2 = new String('Hello')
// console.log(typeof s2);

// Object Literal
const book1 = {
  title: 'Book One',
  author: 'John Doe',
  year: 2013,
  getSummary: function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
}

//console.log(book1.getSummary())
// console.log(Object.values(book1));
// console.log(Object.keys(book1));

// Constructor
function Book(title, author, year){
  this.title = title;
  this.author = author;
  this.year = year;
};

// getSummary
Book.prototype.getSummary = function(){
  return `${this.title} was written by ${this.author} in ${this.year}`;
}

// getAge
Book.prototype.getAge = function(){
  const years = new Date().getFullYear() - this.year;
  return `${this.title} is ${years} years old`
}

const book_1 = new Book('Book 1', 'Bris Mon', 1991);
const book_2 = new Book('Book 2', 'Jane Mary', 2017);

console.log(book_2.getSummary());
console.log(book_2.getAge());