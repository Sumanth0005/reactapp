import { useEffect, useState } from "react";

const EditTable: React.FC = () => {
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
  const [editingUserId, setEditingUserId] = useState<number | null>(null);
  const [editedUser, setEditedUser] = useState<Partial<User>>({});

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const handleEditClick = (user: User) => {
    setEditingUserId(user.id);
    setEditedUser({ ...user, address: { city: user.address.city } });
  };

  const handleSaveClick = (id: number) => {
    setUsers(users.map((user) => (user.id === id ? { ...user, ...editedUser } : user)));
    setEditingUserId(null);
  };

  return (
    <div className="p-4">
      <h2 className="pb-2 mb-4 text-3xl font-extrabold text-center text-gray-800">
        User List
      </h2>

      <table className="w-full mt-4 border border-collapse border-gray-500">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border border-gray-500">Name</th>
            <th className="p-2 border border-gray-500">Username</th>
            <th className="p-2 border border-gray-500">Email</th>
            <th className="p-2 border border-gray-500">City</th>
            <th className="p-2 border border-gray-500">Phone</th>
            <th className="p-2 border border-gray-500">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border border-gray-500">
              {editingUserId === user.id ? (
                <>
                  <td className="p-2 border border-gray-500">
                    <input
                      type="text"
                      value={editedUser.name || ""}
                      onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })}
                      className="border p-1"
                    />
                  </td>
                  <td className="p-2 border border-gray-500">
                    <input
                      type="text"
                      value={editedUser.username || ""}
                      onChange={(e) => setEditedUser({ ...editedUser, username: e.target.value })}
                      className="border p-1"
                    />
                  </td>
                  <td className="p-2 border border-gray-500">
                    <input
                      type="email"
                      value={editedUser.email || ""}
                      onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })}
                      className="border p-1"
                    />
                  </td>
                  <td className="p-2 border border-gray-500">
                    <input
                      type="text"
                      value={editedUser.address?.city || ""}
                      onChange={(e) => setEditedUser({ ...editedUser, address: { city: e.target.value } })}
                      className="border p-1"
                    />
                  </td>
                  <td className="p-2 border border-gray-500">
                    <input
                      type="number"
                      value={editedUser.phone || ""}
                      onChange={(e) => setEditedUser({ ...editedUser, phone: Number(e.target.value) })}
                      className="border p-1"
                    />
                  </td>
                  <td className="p-2 border border-gray-500">
                    <button className="p-1 bg-green-500 text-white rounded" onClick={() => handleSaveClick(user.id)}>Save</button>
                  </td>
                </>
              ) : (
                <>
                  <td className="p-2 border border-gray-500">{user.name}</td>
                  <td className="p-2 border border-gray-500">{user.username}</td>
                  <td className="p-2 border border-gray-500">{user.email}</td>
                  <td className="p-2 border border-gray-500">{user.address.city}</td>
                  <td className="p-2 border border-gray-500">{user.phone}</td>
                  <td className="p-2 border border-gray-500">
                    <button className="p-1 bg-yellow-500 text-white rounded" onClick={() => handleEditClick(user)}>🖊Edit</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EditTable;