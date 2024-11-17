interface Book {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
  //method
  printAuthor(): void;
  printTitle(message: string): string;
}

const deepWork: Book = {
  isbn: 123456,
  title: 'deep work',
  author: 'Cal Newport',
  genre: 'Self-help',
  printAuthor() {
    console.log(this.author);
  },
  printTitle(message) {
    return `${message} ${this.title}`;
  },
};

deepWork.printAuthor();
console.log(deepWork.printTitle('The title is'));
