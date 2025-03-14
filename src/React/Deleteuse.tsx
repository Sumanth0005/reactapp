
import { useEffect, useState } from "react";

const DeleteTable: React.FC = () => {
  interface User {
    id: number;
    name: string;
    email: string;
    username: string;
    address: {
      city: string;
    };
    phone: number;
  }

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const handleDelete = (id: number) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="p-4">
      <h2 className="pb-2 mb-4 text-3xl font-extrabold text-center text-gray-800">
        Delete User
      </h2>

      <table className="w-full mt-4 border border-collapse border-gray-500">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border border-gray-500">Name</th>
            <th className="p-2 border border-gray-500">Username</th>
            <th className="p-2 border border-gray-500">Email</th>
            <th className="p-2 border border-gray-500">City</th>
            <th className="p-2 border border-gray-500">Phone</th>
            <th className="">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border border-gray-500">
              <td className="p-2 border border-gray-500">{user.name}</td>
              <td className="p-2 border border-gray-500">{user.username}</td>
              <td className="p-2 border border-gray-500">{user.email}</td>
              <td className="p-2 border border-gray-500">{user.address.city}</td>
              <td className="p-2 border border-gray-500">{user.phone}</td>
              <td className="p-2 border border-gray-500 text-center">
                <button 
                  className="" 
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DeleteTable;