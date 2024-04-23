import React, { useState } from "react";
import toast from "react-hot-toast";
import "./adduser.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Adduser = () => {
  const users = {
    fname: "",
    password: "",
  };
  const [user, setUser] = useState(users);
  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(user);
  };
  const submitForm = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8000/api/create", user)
      .then((response) => {
        toast.success("User added successfully", { position: "top-right" });
        console.log("successs");
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="adduser">
      {/* Corrected className */}
      <Link to={"/"}>Back</Link>
      <h3>Add new user</h3>
      <form onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="fname">First name</label> {/* Corrected htmlFor */}
          <input
            type="text"
            onChange={inputHandler}
            id="fname"
            name="fname"
            autoComplete="off"
            placeholder="First name"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="password">Password</label> {/* Corrected htmlFor */}
          <input
            type="text"
            onChange={inputHandler}
            id="password"
            name="password"
            autoComplete="off"
            placeholder="Password"
          />
        </div>
        <div className="inputGroup">
          <button type="submit">ADD USER</button>
        </div>
      </form>
    </div>
  );
};

export default Adduser;
