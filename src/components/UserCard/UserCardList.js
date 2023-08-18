import React, { useState, useEffect } from "react";

//import components
import UserCard from "./UserCard";

//import functions
import { getUsers } from "../../api/getUsers";

//import style
import "./UserCardList.css";

const UserCardList = () => {
  //useState
  const [users, setUsers] = useState([]);
  const [sortedUsers, setSortedUsers] = useState([]);
  const [query, setQuery] = useState("");

  //variables
  const filteredUsers = users.filter((user) => {
    return (
      user.firstName.toLowerCase().includes(query.toLowerCase()) ||
      user.lastName.toLowerCase().includes(query.toLowerCase())
    );
  });

  //function
  const sortUsers = () => {
    setSortedUsers(
      users.sort(function (a, b) {
        if (a.firstName < b.firstName) {
          return -1;
        }
        if (a.firstName > b.firstName) {
          return 1;
        }
        return 0;
      })
    );
  };

  //useEffect
  useEffect(() => {
    const fetchUsersList = async () => {
      const userList = await getUsers();
      setUsers(userList);
    };
    fetchUsersList();
    console.log(users);
  }, []);

  return (
    <>
      <div className="search">
        <input
          className="search-input"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={sortUsers}>A - Z</button>
      </div>
      <div className="user-list">
        {filteredUsers?.map((item, index) => {
          return <UserCard key={index} user={item} />;
        })}
      </div>
    </>
  );
};

export default UserCardList;
