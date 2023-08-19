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
  const [query, setQuery] = useState({ search: "", sort: null });
  const [buttonTitle, setButtonTitle] = useState("A to Z");

  // Variables
  const getData = () => {
    let data = [...users];

    data = data.filter((user) => {
      return (
        user.firstName
          .toLocaleLowerCase()
          .includes(query.search.toLocaleLowerCase()) ||
        user.lastName
          .toLocaleLowerCase()
          .includes(query.search.toLocaleLowerCase())
      );
    });

    if (query.sort === "ASC") {
      data = data.sort((a, b) => a.firstName.localeCompare(b.firstName));
    }

    if (query.sort === "DESC") {
      data = data.sort((a, b) => b.firstName.localeCompare(a.firstName));
    }

    return data;
  };

  const changeSort = () => {
    if (query.sort === null) {
      setQuery((prev) => ({ ...prev, sort: "ASC" }));
      setButtonTitle("Z to A");
    }

    if (query.sort === "ASC") {
      setQuery((prev) => ({ ...prev, sort: "DESC" }));
      setButtonTitle("Default");
    }

    if (query.sort === "DESC") {
      setQuery((prev) => ({ ...prev, sort: null }));
      setButtonTitle("A to Z");
    }
  };

  //useEffect
  useEffect(() => {
    const fetchUsersList = async () => {
      const userList = await getUsers();
      setUsers(userList);
    };
    fetchUsersList();
  }, []);

  return (
    <>
      <div className="search">
        <input
          className="search-input"
          placeholder="Search..."
          value={query.search}
          onChange={(e) => setQuery({ ...query, search: e.target.value })}
        />
        <button className="sort-button" onClick={changeSort}>
          {buttonTitle}
        </button>
      </div>
      <div className="user-list">
        {getData()?.map((item, index) => {
          return <UserCard key={index} user={item} />;
        })}
      </div>
    </>
  );
};

export default UserCardList;
