import React, { useContext, useEffect, useState } from "react";
import { getAllUsers, deleteUser, deleteUserByAmind } from "../../services/authService";
import { UserContext } from "../../context/userContext";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [filterRole, setFilterRole] = useState("all");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getUserDetails = async () => {
    try {
      setLoading(true);
      const res = await getAllUsers();
      if (res.data.success) {
        setUsers(res.data.users);
      }
    } catch (error) {
      setError("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  // 🔥 DELETE USER
  const handleDelete = async (id) => {

    try {
      await deleteUserByAmind(id);
      setUsers((prev) => prev.filter((user) => user._id !== id));
    } catch (error) {
      alert("Delete failed");
    }
  };

  // 🔍 SEARCH + 🎯 FILTER
  const filteredUsers = users
    .filter((u) =>
      u.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((u) =>
      filterRole === "all" ? true : u.role === filterRole
    );

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Users</h2>

      {/* 🔍 Search + Filter */}
      <div className="flex gap-3 mb-4">
        <input
          type="text"
          placeholder="Search user..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded w-full"
        />

        <select
          value={filterRole}
          onChange={(e) => setFilterRole(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="all">All</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
      </div>

      {/* ⏳ Loading */}
      {loading && <p>Loading users...</p>}

      {/* ❌ Error */}
      {error && <p className="text-red-500">{error}</p>}

      {/* 👥 Users List */}
      {!loading && filteredUsers.length === 0 && (
        <p className="text-gray-500">No users found</p>
      )}

      {filteredUsers.map((u) => (
        <div
          key={u._id}
          className="flex justify-between items-center bg-white p-3 mb-2 rounded shadow"
        >
          <div>
            <p className="font-medium">{u.name}</p>
            <p className="text-sm text-gray-500">{u.role}</p>
          </div>

          <div className="flex gap-2">
            {/* ✏️ Edit (UI only for now) */}
            <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
              Edit
            </button>

            {/* 🗑 Delete */}
            <button
              onClick={() => handleDelete(u._id)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;