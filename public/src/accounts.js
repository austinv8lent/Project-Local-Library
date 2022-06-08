const { expect } = require("chai");

function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  const sortByLastName = accounts.sort((accountA, accountB) => {
    return accountA.name.last < accountB.name.last ? -1 : 1;
  });
  return sortByLastName;
}

function getTotalNumberOfBorrows(account, books) {
  let result = 0;
  for (let i = 0; i < books.length; i++) {
    const borrower = books[i].borrows;
    for (let j = 0; j < borrower.length; j++) {
      if (borrower[j].id === account.id) result += 1;
    }
  }
  return result;
}

function getBooksPossessedByAccount(account, books, authors) {
 return books.filter((book) => 
    book.borrows[0].id === account.id && book.borrows[0].returned === false
  ).map((book) => {
book.author = authors.find((author) => author.id === book.authorId)
console.log(books)
return book  })
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};


