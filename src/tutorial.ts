// function sayHi(name: string) {
//   console.log(`Hello, ${name.toUpperCase()}`);
// }

// sayHi('Dominique');
// // sayHi(23);

// function calculateDiscount(price: number) {
//   const hasDiscount = true;
//   if (hasDiscount) {
//     return price.toFixed();
//     // return 'Discount Applied';
//   }

//   return price * 0.9;
// }

// const finalPrice = calculateDiscount(200);

const names = ['John', 'Dave', 'Micheal'];

function checkName(name: string): boolean {
  {
    return names.includes(name);
    // for (let arrNames of names) {
    //   if (arrNames === name) {
    //     return true;
    //     break;
    //   }
    // }
    // return false;
  }
}

console.log(checkName('John'));
console.log(checkName('Martha'));

let name = 'John';

console.log(`${name} is ${!checkName(name) ? 'not ' : ''}in the list.`);

if (checkName(name)) {
  console.log(`${name} is ${!checkName(name) ? 'not ' : ''}in the list.`);
}
