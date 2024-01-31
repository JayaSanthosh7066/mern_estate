import React from "react";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Signin from "./pages/Signin.jsx";
import Signup from "./pages/Signup.jsx";
import About from "./pages/About.jsx";
import Header from "./components/Header.jsx";
import Profile from "./pages/Profile.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import CreateListing from "./pages/CreateListing.jsx";
import UpdatedListing from "./pages/UpdatedListing.jsx";
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/About" element={<About />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-listing" element={<CreateListing />} />
          <Route
            path="/update-listing/:listingid"
            element={<UpdatedListing />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
