// let array1: string[] = ['Apple', 'Banana', 'Mango'];
// let array2: number[] = [1, 2, 3];
// let array3: boolean[] = [true, false, true];

let array1: Array<string> = ['Apple', 'Banana', 'Mango'];
let array2: Array<number> = [1, 2, 3];
let array3: Array<boolean> = [true, false, true];

// function createString(arg: string): string {
//   return arg;
// }
// function createNumber(arg: number): number {
//   return arg;
// }

function genericFunction<T>(arg: T): T {
  return arg;
}

const someStringValue = genericFunction<string>('Hello World');
const someNumericValue = genericFunction<number>(2);

// console.log(someNumericValue);
// console.log(someStringValue);

interface GenericInterface<T> {
  value: T;
  getValue: () => T;
}

const genericString: GenericInterface<string> = {
  value: 'Hello World',
  getValue() {
    return this.value;
  },
};

// console.log(genericString.getValue());

async function someFunc(): Promise<number> {
  return 2333;
}

const result = someFunc();
// console.log(result);

// function createArray<T>(number: number, value: T): Array<T> {
//   let array: Array<T> = Array.from({ length: number }, () => value);
//   return array;
// }
function createArray<T>(length: number, value: T): Array<T> {
  let array: Array<T> = [];
  array = Array(length).fill(value);
  return array;
}

const arrayString = createArray<string>(5, 'hello');
// console.log(arrayString);
const arrayNumber = createArray<number>(10, 1000);
// console.log(arrayNumber);

function pair<T, U>(param1: T, param2: U): [T, U] {
  return [param1, param2];
}

// let result2 = pair<string, number>('hello', 123);
// console.log(result2);
let result3 = pair('world', 321);
// console.log(result3);

function processValue<T extends string | number>(value: T): T {
  console.log(value);
  return value;
}

// processValue('hello');
// processValue(4);
// processValue(true);

type Car = {
  brand: string;
  model: string;
};

const car: Car = {
  brand: 'ford',
  model: 'mustang',
};

type Product = {
  name: string;
  price: number;
};

const product: Product = {
  name: 'shoes',
  price: 1.99,
};

type Student = {
  name: string;
  age: number;
};

const student: Student = {
  name: 'peter',
  age: 20,
};

function printName<T extends { name: string }>(input: T): void {
  console.log(input.name);
}

// printName(student);
// printName(product);
// printName(car);

interface StoreData<T = any> {
  data: T[];
}

const storeNumbers: StoreData<number> = {
  data: [1, 2, 3, 4],
};

const randomStuff: StoreData = {
  data: ['random', 1],
};
