function Book(number, name, author, year){
    this.number = number;
    this.name = name;
    this.author = author;
    this.year = year;
    
    console.log('Book ' + this.number + ': ' + this.name + ' by ' 
                     + this.author + ' (' + this.year + ')');
}

var book1 = new Book(1, 'The Road Ahead', 'Bill Gates', 1995);
var book2 = new Book(2, 'Steve Jobs', 'Walter Isaacson', 2011);
var book3 = new Book(3, 'Mockingjay', 'Suzanne Collins', 2010);