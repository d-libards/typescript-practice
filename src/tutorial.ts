// function calcPrice(price: number, discount?: number): number {
//   return price - (discount || 0);
// }

// let priceAfterDiscount = calcPrice(100, 20);

// function calcScore(initialScore: number, penaltyPoints: number = 0): number {
//   return initialScore - penaltyPoints;
// }
// let scoreAfterPenalty = calcScore(100, 20);
// let scoreWithoutPenalty = calcScore(300);

// function sum(message: string, ...numbers: number[]): string {
//   const doubled = numbers.map((num) => num * 2);
//   console.log(doubled);

//   let total = numbers.reduce((previous, current) => {
//     return previous + current;
//   }, 0);
//   return `${message}${total}`;
// }
// let result = sum('The total is: ', 1, 2, 3, 4, 5);
// console.log(result);

// function logMessage(message: string): void {
//   console.log(message);
//   // return 'hello';
// }

// logMessage('Dominique');

function processInput(input: string | number) {
  if (typeof input === 'number') {
    console.log(input * 2);
  } else {
    console.log(input.toUpperCase());
  }
}

processInput(23);
processInput('Dominique');
processInput(true);
