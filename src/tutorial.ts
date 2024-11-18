import newStudent, { sayHello, person, type Student } from './actions';

sayHello('TypeScript');
console.log(newStudent);
console.log(person);

const anotherStudent: Student = {
  name: 'Mark',
  age: 17,
};
