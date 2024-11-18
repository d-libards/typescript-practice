//enums
enum ServerResponseStatus {
  Success = 200,
  Error = 401,
}
// console.log(ServerResponseStatus);
// Object.values(ServerResponseStatus).forEach((value) => {
//   if (typeof value === 'number') {
//     console.log(value);
//   }
// });

interface ServerResponse {
  result: ServerResponseStatus;
  data: string[];
}

function getServerResponse(): ServerResponse {
  return {
    result: ServerResponseStatus.Success,
    data: ['first item', 'second item'],
  };
}

const response: ServerResponse = getServerResponse();
// console.log(response);

enum UserRole {
  Admin,
  Manager,
  Employee,
}
type User = {
  id: number;
  name: string;
  role: UserRole;
  contact: [string, string];
};

function createUser(user: User): User {
  return user;
}

const user: User = createUser({
  id: 1,
  name: 'John Doe',
  role: UserRole.Employee,
  contact: ['doe@email.com', '123-432-1235'],
});
console.log(user);
