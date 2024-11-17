interface Book {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
  //method
  printAuthor(): void;
  printTitle(message: string): string;
  printSomething: (someValue: number) => number;
}

const deepWork: Book = {
  isbn: 123456,
  title: 'deep work',
  author: 'Cal Newport',
  genre: 'Self-help',
  // printAuthor() {
  //   console.log(this.author);
  // },
  printTitle(message) {
    return `${message} ${this.title}`;
  },
  //first option
  printSomething: function (someValue) {
    return someValue;
  },
  //second op
  // printSomething: (someValue) => {
  //   // console.log(this);
  //   console.log(deepWork.author);
  //   return someValue;
  // },
  //third op
  // printSomething(someValue) {
  //   return someValue;
  // },
  printAuthor: () => {
    console.log(deepWork.author);
  },
};

// console.log(deepWork.printSomething(34));
// deepWork.printAuthor();

interface Computer {
  readonly id: number;
  brand: string;
  ram: number;
  storage?: number;
  upgradeRam: (upgrade: number) => number;
}

const computer1: Computer = {
  id: 1,
  brand: 'lenovo',
  ram: 16,
  upgradeRam: function (amount) {
    this.ram += amount;
    return this.ram;
  },
};

computer1.storage = 256;
// computer1.id = 3;
console.log(computer1.upgradeRam(4));
console.log(computer1);
