// // type User = { id: number; name: string; isActive: boolean };
// // const john: User = {
// //   id: 1,
// //   name: 'john',
// //   isActive: true,
// // };
// // const susan: User = {
// //   id: 1,
// //   name: 'susan',
// //   isActive: false,
// // };

// // function createUser(user: User): User {
// //   console.log(`Hello there ${user.name.toUpperCase()} !!!`);

// //   return user;
// // }

// // type StringOrNumber = string | number;

// // let value: StringOrNumber;
// // value = 'hello';
// // value = 123;

// // type Theme = 'light' | 'dark';
// // let theme: Theme;
// // theme = 'dark';
// // theme = 'light';

// // function setTheme(t: Theme) {
// //   theme = t;
// // }

// // setTheme('light');

// type Employee = { id: number; name: string; department: string };

// type Manager = { id: number; name: string; employees: Employee[] };

// type Staff = Employee | Manager;

// function printStaffDetails(staff: Staff): void {
//   if ('employees' in staff) {
//     console.log(
//       `${staff.name} is an manager of ${staff.employees.length} employees`
//     );
//   } else {
//     console.log(`${staff.name} is an employee in the ${staff.department}`);
//   }
// }

// const alice: Employee = { id: 1, name: 'Alice', department: 'Finance' };
// const maria: Employee = { id: 1, name: 'Alice', department: 'Human Resource' };

// const bob: Manager = { id: 3, name: 'Bob', employees: [maria, alice] };

// printStaffDetails(bob);
// printStaffDetails(alice);

// type Book = { id: number; name: string; price: number };
// type DiscountedBook = Book & { discount: number };

// const book1: Book = {
//   id: 1,
//   name: 'How to train your dragon',
//   price: 200,
// };

// const book2: Book = {
//   id: 2,
//   name: 'Joke 101',
//   price: 100,
// };

// const discountedBook: DiscountedBook = {
//   id: 3,
//   name: 'Love is War',
//   price: 25,
//   discount: 0.15,
// };

const propName = 'age';

type Animal = {
  [propName]: number;
};

let tiger = { [propName]: 5 };
