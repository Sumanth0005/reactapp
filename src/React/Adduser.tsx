import { useEffect, useState } from "react";

const AddTable: React.FC = () => {
  interface User {
    id: number;
    name: string;
    email: string;
    username: string;
    address: {
      city: string;
    };
    phone: string;
  }

  const [users, setUsers] = useState<User[]>([]);
  const [newUser, setNewUser] = useState<User>({
    id: 0,
    name: "",
    email: "",
    username: "",
    address: { city: "" },
    phone: "",
  });
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const handleAddUser = () => {
    if (!newUser.name || !newUser.email || !newUser.username || !newUser.address.city || !newUser.phone) {
      alert("Please fill in all fields.");
      return;
    }
    setUsers([...users, { ...newUser, id: users.length + 1 }]);
    setNewUser({ id: 0, name: "", email: "", username: "", address: { city: "" }, phone: "" });
    setShowForm(false);
  };

  return (
    <div className="p-4">
      <h2 className="pb-2 mb-4 text-3xl font-extrabold text-center text-gray-800">
        Add User List
      </h2>
      
      <div className="flex justify-end">
        <button 
          className="p-2 bg-blue-500 text-white rounded mb-4"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Close Form" : "Add User"}
        </button>
      </div>

      {showForm && (
        <div className="mb-4 p-4 border rounded bg-gray-100 text-align-center">
          <h3 className="text-xl font-bold mb-2">Add New User</h3>
          <input 
            className="border p-2 m-1" 
            type="text" 
            placeholder="Name" 
            value={newUser.name} 
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} 
          /><br></br>
          <input 
            className="border p-2 m-1" 
            type="text" 
            placeholder="Username" 
            value={newUser.username} 
            onChange={(e) => setNewUser({ ...newUser, username: e.target.value })} 
          /><br></br>
          <input 
            className="border p-2 m-1" 
            type="email" 
            placeholder="Email" 
            value={newUser.email} 
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} 
          /><br></br>
          <input 
            className="border p-2 m-1" 
            type="text" 
            placeholder="City" 
            value={newUser.address.city} 
            onChange={(e) => setNewUser({ ...newUser, address: { city: e.target.value } })} 
          /><br></br>
          <input 
            className="border p-2 m-1" 
            type="number" 
            placeholder="Phone" 
            value={newUser.phone} 
            onChange={(e) => setNewUser({ ...newUser, phone: e.target.value})} 
          /><br></br>
          <button 
            className="p-2 bg-green-500 text-white rounded ml-2" 
            onClick={handleAddUser}
          >
            Submit
          </button>
        </div>
      )}
      
      <table className="w-full mt-4 border border-collapse border-gray-500">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border border-gray-500">Name</th>
            <th className="p-2 border border-gray-500">Username</th>
            <th className="p-2 border border-gray-500">Email</th>
            <th className="p-2 border border-gray-500">City</th>
            <th className="p-2 border border-gray-500">Phone</th>
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

export default AddTable;