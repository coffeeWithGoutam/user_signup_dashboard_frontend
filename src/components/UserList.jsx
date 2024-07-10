import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { UserContext } from "../context/UserContext";

const UserList = () => {
  const [query, setQuery] = useState("");
  const { users, setUsers } = useContext(UserContext);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/v1/users`
        );
        // console.log("Fetched Users:", response.data);
        setUsers(response.data);
      } catch (error) {
        // console.error("Error fetching users", error);
      }
    };
    fetchUsers();
  }, [setUsers]);

  const filteredUsers = users.filter((user) =>
    user.fullName.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search by full name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {filteredUsers.length > 0 ? (
        <ul>
          {filteredUsers.map((user, index) => (
            <li key={index}>
              {user.fullName} ({user.email})
            </li>
          ))}
        </ul>
      ) : (
        <p>No data found</p>
      )}
    </div>
  );
};

export default UserList;
