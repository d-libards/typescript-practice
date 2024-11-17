// interface Person {
//   name: string;
//   getDetails(): string;
// }

// interface DogOwner {
//   dogName: string;
//   getDogDetails(): string;
// }

// interface Person {
//   age: number;
// }

// const person: Person = {
//   name: 'john',
//   age: 30,
//   getDetails() {
//     return `Name: ${this.name}, Age: ${this.age}`;
//   },
// };

// interface Employee extends Person {
//   employeeId: number;
// }

// const employee: Employee = {
//   employeeId: 3,
//   name: 'mike',
//   age: 34,
//   getDetails() {
//     return `Name: ${this.name}, Age: ${this.age}, ,EmployeeId: ${this.employeeId}`;
//   },
// };

// console.log(employee.getDetails());

// interface Manager extends Person, DogOwner {
//   managePeople(): void;
// }

// const manager: Manager = {
//   name: 'Jack',
//   age: 25,
//   dogName: 'Blackie',
//   managePeople() {
//     console.log('Managing people....');
//   },
//   getDetails() {
//     return `Name: ${this.name}, Age: ${this.age}`;
//   },
//   getDogDetails() {
//     return `Dog Name: ${this.dogName}`;
//   },
// };

// console.log(manager.getDogDetails());
// manager.managePeople();

interface People {
  name: string;
}

interface DogOwner extends People {
  dogName: string;
}

interface Manager extends People {
  managePeople(): void;
  delegateTask(): void;
}

function getEmployee(): People | DogOwner | Manager {
  const random = Math.random();
  if (random < 0.33) {
    return {
      name: 'john',
    };
  } else if (random < 0.66) {
    return {
      name: 'Roxie',
      dogName: 'Bob',
    };
  } else {
    return {
      name: 'Ferdinand',
      managePeople() {
        console.log(this.name);
      },
      delegateTask() {
        console.log('delegating task');
      },
    };
  }
}

const employee: People | DogOwner | Manager = getEmployee();

console.log(employee.name);

function isManager(obj: People | DogOwner | Manager): obj is Manager {
  return 'managePeople' in obj;
}

if (isManager(employee)) {
  employee.delegateTask();
}
