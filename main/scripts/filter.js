const userSearch = "tech"
const book = ["tech","medtech","finance","business"];

const validateSearch = book.filter(filterBook);

function filterBook(researchBook){
  return researchBook === userSearch
}

if (validateSearch.length > 0) {
  console.log(`Find ${validateSearch}`)
} else {
  console.log(`No found research`)
}


