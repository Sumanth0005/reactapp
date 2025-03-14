import { useEffect, useState } from "react";

const UserTable: React.FC = () => {
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
  const [sortKey, setSortKey] = useState<keyof User | "city">("name");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const handleSort = (key: keyof User | "city") => {
    const order = sortKey === key && sortOrder === "asc" ? "desc" : "asc";
    setSortKey(key);
    setSortOrder(order);
    
    const sortedUsers = [...users].sort((a, b) => {
      const valueA = key === "city" ? a.address.city : a[key];
      const valueB = key === "city" ? b.address.city : b[key];
      
      if (typeof valueA === "number" && typeof valueB === "number") {
        return order === "asc" ? valueA - valueB : valueB - valueA;
      }
      return order === "asc"
        ? String(valueA).localeCompare(String(valueB))
        : String(valueB).localeCompare(String(valueA));
    });
    
    setUsers(sortedUsers);
  };

  return (
    <div className="p-4">
      <h2 className="pb-2 mb-4 text-3xl font-extrabold text-center text-gray-800">
        User List
      </h2>

      <table className="w-full mt-4 border border-collapse border-gray-500">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border border-gray-500 cursor-pointer " onClick={() => handleSort("name")}>Name {sortKey === "name" && (sortOrder === "asc" ? "↑" : "↓")}</th>
            <th className="p-2 border border-gray-500 cursor-pointer" onClick={() => handleSort("username")}>Username {sortKey === "username" && (sortOrder === "asc" ? "↑" : "↓")}</th>
            <th className="p-2 border border-gray-500 cursor-pointer" onClick={() => handleSort("email")}>Email {sortKey === "email" && (sortOrder === "asc" ? "↑" : "↓")}</th>
            <th className="p-2 border border-gray-500 cursor-pointer" onClick={() => handleSort("city")}>City {sortKey === "city" && (sortOrder === "asc" ? "↑" : "↓")}</th>
            <th className="p-2 border border-gray-500 cursor-pointer" onClick={() => handleSort("phone")}>Phone {sortKey === "phone" && (sortOrder === "asc" ? "↑" : "↓")}</th>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;