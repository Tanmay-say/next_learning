async function getUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    return res.json();
  }
  
  export default async function UsersPage() {
    const users = await getUsers();
  
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Users List</h1>
        <ul>
          {users.map((user: any) => (
            <li key={user.id} className="p-2 border-b">{user.name}</li>
          ))}
        </ul>
      </div>
    );
  }
  