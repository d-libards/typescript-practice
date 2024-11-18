class Book {
  readonly title: string;
  author: string;
  private checkout: boolean = false;

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }

  public checkOut() {
    this.checkout = this.toggleCheckedOutStatus();
  }

  public isCheckOut(): boolean {
    return this.checkout;
  }

  private toggleCheckedOutStatus() {
    return !this.checkout;
  }
}

const deepWork = new Book('Deep Work', 'Cal Newport');
deepWork.checkOut();
deepWork.checkOut();
console.log(deepWork.isCheckOut());
