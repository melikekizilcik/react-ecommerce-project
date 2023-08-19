import React, { useEffect, useState } from "react";

//import components
import Navbar from "../../components/navbar/Navbar";

//import functions
import { getProfile } from "../../api/getProfile";

//import packages
import { useNavigate } from "react-router-dom";
import axios from "axios";

//import style
import "./Profile.css";

const Profile = () => {
  //variables
  const navigate = useNavigate();

  //useState
  const [profile, setProfile] = useState({});
  const [userFullName, setUserFullName] = useState({});
  const [passwordType, setPasswordType] = useState("password");
  const [edit, setEdit] = useState(true);
  const [birthday, setBirthday] = useState("");

  // Actions
  const formUpdate = (key, value) => {
    if (key === "age" && value > 100) {
      return;
    }

    setProfile((prev) => ({ ...prev, [key]: value }));
  };

  const handleEdit = () => {
    setEdit(!edit);
  };

  const handleBirthday = (e) => {
    setBirthday(e.target.value);
  };

  const sendUpdates = () => {
    axios
      .put(`https://dummyjson.com/users/${profile.id}`, {
        firstName: profile.firstName,
        lastName: profile.lastName,
        address: {
          address: profile.address,
          city: profile.city,
        },
        age: profile.age,
        birthDate: birthday,
        email: profile.email,
        password: profile.password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    setEdit(true);
  };

  //useEffect
  useEffect(() => {
    const fetchProfile = async () => {
      const userProfile = await getProfile();
      setProfile(userProfile);
      setUserFullName({
        name: userProfile.firstName,
        lastName: userProfile.lastName,
      });
    };
    fetchProfile();
  }, []);

  return (
    <div>
      <Navbar />
      <h3>
        {userFullName?.firstName} {userFullName?.lastName}'s Profile
      </h3>
      <div className="user-profile">
        <img src={profile?.image} alt="" />
        <div>
          <p>
            Welcome {userFullName?.firstName} {userFullName?.lastName}
          </p>
          <button onClick={() => navigate("/products")}>
            Keep shopping see all products
          </button>
          <button onClick={() => navigate("/cart")}>Go to cart</button>
        </div>
      </div>
      <h3>User Information</h3>
      <div className="update-buttons">
        <button onClick={handleEdit}>Update profile</button>
        {edit ? (
          <div></div>
        ) : (
          <button onClick={sendUpdates} className="save-button">
            Save changes
          </button>
        )}
      </div>
      <div className="user-information">
        <div className="user-name-information">
          <div className="name">
            <p>Name</p>
            <input
              value={profile?.firstName}
              disabled={edit}
              onChange={(e) => formUpdate("firstName", e.target.value)}
            />
          </div>
          <div className="surname">
            <p>Surname</p>
            <input
              value={profile?.lastName}
              disabled={edit}
              onChange={(e) => formUpdate("lastName", e.target.value)}
            />
          </div>
        </div>
        <div className="user-age-information">
          <div>
            <p>Age</p>
            <input
              type="number"
              disabled={edit}
              value={profile?.age}
              onChange={(e) => formUpdate("age", e.target.value)}
            />
          </div>
          <div className="birthday">
            <p>Birthday</p>
            <input
              type="date"
              disabled={edit}
              value={birthday ? birthday : profile?.birthDate}
              onChange={handleBirthday}
            />
          </div>
        </div>
        <h3>Address</h3>
        <div className="user-address">
          <div className="address">
            <p>Address</p>
            <input
              value={profile?.address?.address}
              disabled={edit}
              onChange={(e) => formUpdate("address", e.target.value)}
            />
          </div>
          <div className="city">
            <p>City</p>
            <input
              value={profile?.address?.city}
              disabled={edit}
              onChange={(e) => formUpdate("city", e.target.value)}
            />
          </div>
        </div>
        <h3>Email & Password</h3>
        <div className="email-password">
          <div className="email">
            <p>E-mail</p>
            <input
              type="email"
              value={profile?.email}
              disabled={edit}
              onChange={(e) => formUpdate("email", e.target.value)}
            />
          </div>
          <div className="password">
            <p>Password</p>
            <input
              type={passwordType}
              disabled={edit}
              value={profile?.password}
              onChange={(e) => formUpdate("password", e.target.value)}
            />
            <span
              onClick={() =>
                setPasswordType(
                  passwordType === "password" ? "text" : "password"
                )
              }
            >
              {passwordType === "password" ? "Göster" : "Gizle"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
