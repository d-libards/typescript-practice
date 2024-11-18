export function sayHello(name: string): void {
  console.log(`Hello, ${name}`);
}

export let person = 'susan';

export type Student = {
  name: string;
  age: number;
};

const newStudent = {
  name: 'peter',
  age: 23,
};

export default newStudent;
