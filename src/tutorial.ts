let person: [string, number] = ['john', 25];

let date: [number, number, number] = [12, 17, 2001];
date.push(23);
console.log(date);

function getPerson(): [string, number] {
  return ['john', 25];
}

let randomPerson = getPerson();
console.log(randomPerson[0]);
console.log(randomPerson[1]);

let susan: [string, number?] = ['susan'];
