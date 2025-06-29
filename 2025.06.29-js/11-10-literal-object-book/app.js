const Book = {
  author: "YossiG",
  BookName: "the drak days",
  pubkucation: "am oved",
  pages: 215,
  price: 100,
};
console.log(Book);

const price = 100;
const discountPercentage = 20;
const discountAmount = price * (discountPercentage / 100);
const finalPrice = price - discountAmount;
console.log(`price after dicount is ${finalPrice}`)