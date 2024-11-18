type ValueType = string | number | boolean;

let value: ValueType;
const random = Math.random();
value = random < 0.33 ? 'Hello' : random < 0.66 ? 123.456 : true;

function checkValue(value: ValueType): void {
  if (typeof value === 'string') {
    console.log(value.toLowerCase());
    return;
  } else if (typeof value === 'number') {
    console.log(value.toFixed(2));
    return;
  } else {
    console.log(`boolean: ${value}`);
    return;
  }
}

// checkValue(value);
type Dog = { type: 'dog'; name: string; bark: () => void };
type Cat = { type: 'cat'; name: string; meow: () => void };
type Animal = Dog | Cat;

// function makeSound(animal: Animal): void {
//   if (animal.type === 'dog') {
//     animal.bark();
//   } else {
//     animal.meow();
//   }
// }

// function makeSound(animal: Animal): void {
//   if ('bark' in animal) {
//     animal.bark();
//   } else {
//     animal.meow();
//   }
// }

function printLength(str: string | null | undefined): void {
  if (str) {
    console.log(str.length);
  } else {
    console.log('No string provided');
  }
}

// printLength('qwerty');
// printLength('');
// printLength(null);
try {
  // throw 'some';
  // throw new Error('This is an Error');
} catch (error) {
  if (error instanceof Error) {
    console.log('Caught an Error Object: ' + error.message);
  } else {
    console.log('Caught an unknown error');
  }
}

function checkInput(input: Date | string): string {
  if (input instanceof Date) {
    return input.getFullYear().toString();
  }
  return input;
}

const year = checkInput(new Date());
const random2 = checkInput('2020-05-05');
console.log(year);
console.log(random2);
