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
	const [userFullName, setUserFullName] = useState({});
	const [passwordType, setPasswordType] = useState("password");

	// Actions
	const formUpdate = (key, value) => {
		if (key === "age" && value > 100) {
			return;
		}

		setProfile(prev => ({ ...prev, [key]: value }));
	};

	//useEffect
	useEffect(() => {
		const fetchProfile = async () => {
			const userProfile = await getProfile();
			setProfile(userProfile);
			setUserFullName({ name: userProfile.firstName, lastName: userProfile.lastName });
		};
		fetchProfile();
	}, []);

	return (
		<div>
			<Navbar />
			<h3>
				{userFullName.firstName} {userFullName.lastName}'s Profile
			</h3>
			<div className="user-profile">
				<img src={profile.image} alt="" />
				<div>
					<p>
						Welcome {userFullName.firstName} {userFullName.lastName}
					</p>
					<button onClick={() => navigate("/products")}>Keep shopping see all products</button>
					<button onClick={() => navigate("/cart")}>Go to cart</button>
				</div>
			</div>
			<h3>User Information</h3>
			<div className="user-information">
				<div className="user-name-information">
					<div className="name">
						<p>Name</p>
						<input
							value={profile.firstName}
							disabled
							onChange={e => formUpdate("firstName", e.target.value)}
						/>
					</div>
					<div className="surname">
						<p>Surname</p>
						<input
							value={profile.lastName}
							onChange={e => formUpdate("lastName", e.target.value)}
						/>
					</div>
				</div>
				<div className="user-age-information">
					<div>
						<p>Age</p>
						<input
							type="number"
							value={profile.age}
							onChange={e => formUpdate("age", e.target.value)}
						/>
					</div>
					<div className="birthday">
						<p>Birthday</p>
						<input type="date" value={profile.birthDate} />
					</div>
				</div>
				<h3>Address</h3>
				<div className="user-address">
					<div className="address">
						<p>Address</p>
						<input value={profile?.address?.address} />
					</div>
					<div className="city">
						<p>City</p>
						<input value={profile?.address?.city} />
					</div>
				</div>
				<h3>Email & Password</h3>
				<div className="email-password">
					<div className="email">
						<p>E-mail</p>
						<input type="email" value={profile.email} />
					</div>
					<div className="password">
						<p>Password</p>
						<input
							type={passwordType}
							value={profile.password}
							onChange={e => formUpdate("password", e.target.value)}
						/>
						<span
							onClick={() => setPasswordType(passwordType === "password" ? "text" : "password")}
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
