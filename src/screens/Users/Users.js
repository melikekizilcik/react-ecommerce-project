import React from "react";

//import components
import Navbar from "../../components/navbar/Navbar";
import UserCardList from "../../components/UserCard/UserCardList";
import Search from "../../components/Search/Search";

const User = () => {
  return (
    <div>
      <Navbar />

      <UserCardList />
    </div>
  );
};

export default User;
