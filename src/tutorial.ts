// function createEmployee({ id }: { id: number }): {
//   id: number;
//   isActive: boolean;
// } {
//   return { id, isActive: id % 2 === 0 };
// }

// const first = createEmployee({ id: 1 });
// const second = createEmployee({ id: 2 });

// console.log(first, second);

//alternative
// function createStudent(student: { id: number; name: string }): void {
//   console.log(`Welcome to the course ${student.name.toUpperCase()}`);
// }

// const newStudent = {
//   id: 5,
//   name: 'anna',
//   email: 'anna@gmail.com',
// };

// createStudent(newStudent);
// createStudent({ id: 6, name: 'bob', email: 'bobo@gmail.com' });

function processData(
  input: string | number,
  config: { reverse: boolean } = { reverse: false }
): string | number {
  if (typeof input === 'number') {
    return input * input;
  } else {
    return config.reverse
      ? input.split('').reverse().join('').toUpperCase()
      : input.toUpperCase();
  }
}

console.log(processData('Hello'));
console.log(processData('Dominique', { reverse: true }));
console.log(processData(10));
