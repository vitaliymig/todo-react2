export async function getUsers() {
    const usersFromServer = await fetch("https://jsonplaceholder.typicode.com/users").then((r) => r.json());
    return usersFromServer
  }