let someValues: any = 'this is a string';

let strLength: number = (someValues as string).length;

type Bird = {
  name: string;
};

let birdString = '{"name": "Eagle"}';
let dogString = '{"breed": "Poodle"}';

let birdObject = JSON.parse(birdString);
let dogObject = JSON.parse(dogString);

let bird = birdObject as Bird;
let dog = dogObject as Bird;

// console.log(bird.name);
// console.log(dog.name);

enum Status {
  Pending = 'pending',
  Declined = 'declined',
}

type User = {
  name: string;
  status: Status;
};

// save Status.Pending in the DB as a string
// retrieve string from the DB
const statusValue = 'pending';

const user: User = { name: 'john', status: statusValue as Status };
// console.log(user);

let unknownValue: unknown;

unknownValue = 'hello world';
unknownValue = [1, 2, 3, 4, 5, 6];
unknownValue = 23.32213;

// unknownValue.toFixed(2);

if (typeof unknownValue === 'number') {
  unknownValue.toFixed(2);
}

function runSomeCode() {
  const random = Math.random();
  if (random < 0.5) {
    throw new Error('there was an error....');
  } else {
    throw 'some error';
  }
}

try {
  // runSomeCode();
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  } else {
    console.log(error);
  }
}
