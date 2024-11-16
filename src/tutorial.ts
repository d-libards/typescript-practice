let tax: number | string = 10;
tax = 100;
tax = '$100';
// console.log(tax);

let requestStatus: 'pending' | 'success' | 'error' = 'pending';
requestStatus = 'error';
requestStatus = 'success';
// requestStatus = 'random';

let notSure: any = 4;
notSure = ' maybe a string instead';
notSure = false;

const books = ['1984', 'Brave New World', 'Celsius 45'];

let foundBook: string | undefined;

for (let book of books) {
  if (book === '1983') {
    foundBook = book;
    foundBook = foundBook.toUpperCase();
    break;
  }
}
// foundBook = 10;
console.log(foundBook);
console.log(foundBook?.length);

let orderStatus: 'processing' | 'shipped' | 'delivered' = 'processing';
orderStatus = 'shipped';
orderStatus = 'delivered';
// orderStatus = 'cancelled';

let discount: string | number = 20;
discount = '20%';
// discount = true;
