import React, { useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Dinesh", role: "user" },
    { id: 2, name: "Rahul", role: "admin" },
  ]);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Users</h2>

      {users.map((u) => (
        <div key={u.id} className="flex justify-between bg-white p-3 mb-2 rounded shadow">
          <p>{u.name}</p>
          <p>{u.role}</p>
        </div>
      ))}
    </div>
  );
};

export default Users;