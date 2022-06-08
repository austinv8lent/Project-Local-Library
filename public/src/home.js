function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}



function getBooksBorrowedCount(books) {
 let result = books
 .reduce((total, books) => {
   return total + books.borrows.filter(notReturned => notReturned.returned === false).length
 }, 0)
 return result
 }



function getMostCommonGenres(books) {
let genresObjCount = {};
for(let i = 0; i < books.length; i++) {
//console.log (books[i].genre)
const genre = books[i].genre
if (genresObjCount[genre]) {
  genresObjCount[genre] += 1;
  } else {
  genresObjCount[genre] = 1;
  }
}
let objectsArray = [];
for (let genre in genresObjCount) {
objectsArray.push({name:genre, count: genresObjCount[genre]})
}
objectsArray.sort((a,b) => b.count - a.count)
return objectsArray.splice(0,5)
}

function getMostPopularBooks(books) {
 let order = books
 .sort ((a, b) => b.borrows.length - a.borrows.length)
 .slice(0,5)
 .map((book) => {
 (book.name = book.title), (book.count = book.borrows.length)
 return {name: book.name, count: book.count}
});
return order;
}


function getMostPopularAuthors(books, authors) { 
  let returnArr = [];
   authors.some(author => {
      let returnAuthor = { name: `${author.name.first} ${author.name.last}`, count: 0 }
       books.forEach(book => 
        { if (book.authorId === author.id) { returnAuthor.count += book.borrows.length } })
         returnArr.push(returnAuthor) }) 
         return returnArr.sort((a,b) => b.count - a.count).slice(0, 5) }




module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};


