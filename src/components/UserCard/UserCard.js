import React from "react";

//import style
import "./UserCard.css";

const UserCard = ({ user }) => {
  return (
    <div className="user-container">
      <img className="user-image" src={user.image} alt="" />
      <div className="user-info">
        <div className="user-name">
          {user.firstName} {user.lastName}
        </div>
        <div className="user-city">{user.address.city}</div>
        <div className="user-phone">{user.phone}</div>
      </div>
    </div>
  );
};

export default UserCard;
