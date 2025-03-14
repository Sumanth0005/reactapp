import { useFetch } from "../React/useFetch";
import { useState } from "react";

export default function SearchTable() {
    const { data, loading, error } = useFetch<{ id: number; name: string; username: string; email: string; address: { zipcode: number;city:string }; city: string; phone: number;}[]>(
        "https://jsonplaceholder.typicode.com/users"
    );
    const [search, setSearch] = useState("");

    if (loading) return <p>Loading users...</p>;
    if (error) return <p>Error: {error}</p>;

    const filteredUsers = data?.filter(user =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  
 
    return (
      <div>
        <input
        type="text"
        placeholder="Search by Name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 mb-1 ml-6 mt-4 w-60 rounded"
      />

      <table className="border-collapse border border-gray-300 w-full mt-4">
          <thead>
              <tr className="bg-gray-200">
                  <th className="border border-gray-300 p-2">ID</th>
                  <th className="border border-gray-300 p-2">Name</th>
                  <th className="border border-gray-300 p-2">username</th>
                  <th className="border border-gray-300 p-2">email</th>
                  <th className="border border-gray-300 p-2">city</th>
                  <th className="border border-gray-300 p-2">zipcode</th>
                  <th className="border border-gray-300 p-2">phone</th>
              </tr>
          </thead>
          <tbody>
              {filteredUsers?.slice(0, 10).map((user) => (
                  <tr key={user.id} className="text-center">
                      <td className="border border-gray-300 p-2">{user.id}</td>
                      <td className="border border-gray-300 p-2">{user.name}</td>
                      <td className="border border-gray-300 p-2">{user.username}</td>
                      <td className="border border-gray-300 p-2">{user.email}</td>
                      <td className="border border-gray-300 p-2">{user.address.city}</td>
                      <td className="border border-gray-300 p-2">{user.address.zipcode}</td>
                      <td className="border border-gray-300 p-2">{user.phone}</td>
                  </tr>
              ))}
          </tbody>
      </table></div>
    );
}