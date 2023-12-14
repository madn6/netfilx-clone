import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";

import { AuthContextProvider } from "./context/AuthContext";

export default function App() {
	return (
		<>
			{/* <AuthContextProvider> */}
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/profile" element={<Profile />} />
				</Routes>
			{/* </AuthContextProvider> */}
		</>
	);
}
