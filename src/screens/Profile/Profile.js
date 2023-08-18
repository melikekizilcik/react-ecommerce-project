import React, { useEffect, useState } from "react";

//import components
import Navbar from "../../components/navbar/Navbar";

//import functions
import { getProfile } from "../../api/getProfile";

//import router
import { useNavigate } from "react-router-dom";

//import style
import "./Profile.css";

const Profile = () => {
  //variables
  const navigate = useNavigate();

  //useState
  const [profile, setProfile] = useState({});

  //useEffect
  useEffect(() => {
    const fetchProfile = async () => {
      const userProfile = await getProfile();
      setProfile(userProfile);
    };
    fetchProfile();
    console.log(profile);
  }, []);

  return (
    <div>
      <Navbar />
      <h3>
        {profile.firstName} {profile.lastName}'s Profile
      </h3>
      <div className="user-profile">
        <img src={profile.image} alt="" />
        <div>
          <p>
            Welcome {profile.firstName} {profile.lastName}
          </p>
          <button onClick={() => navigate("/products")}>
            Keep shopping see all products
          </button>
          <button onClick={() => navigate("/cart")}>Go to cart</button>
        </div>
      </div>
      <h3>User Information</h3>
      <div className="user-information">
        <div className="user-name-information">
          <div className="name">
            <p>Name</p>
            <input placeholder={profile.firstName} />
          </div>
          <div className="surname">
            <p>Surname</p>
            <input placeholder={profile.lastName} />
          </div>
        </div>
        <div className="user-age-information">
          <div>
            <p>Age</p>
            <input placeholder={profile.age} />
          </div>
          <div className="birthday">
            <p>Birthday</p>
            <input placeholder={profile.birthDate} />
          </div>
        </div>
        <h3>Address</h3>
        <div className="user-address">
          <div className="address">
            <p>Address</p>
            <input placeholder={profile.address.address} />
          </div>
          <div className="city">
            <p>City</p>
            <input placeholder={profile.address.city} />
          </div>
        </div>
        <h3>Email & Password</h3>
        <div className="email-password">
          <div className="email">
            <p>E-mail</p>
            <input placeholder={profile.email} />
          </div>
          <div className="password">
            <p>Password</p>
            <input placeholder={profile.password} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
