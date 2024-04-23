import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Edit = () => {
  const users = {
    fname: "",
    password: "",
  };

  const { id } = useParams();
  const [user, setUser] = useState(users);

  const navigate = useNavigate();

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/getone/${id}`)
      .then((response) => {
        // Assuming response.data contains the user object
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const submitform = async (e) => {
    e.preventDefault();
    await axios
      .put(`http://localhost:8000/api/update/${id}`, user)
      .then((response) => {
        toast.success("User edit successfully", { position: "top-right" });
        console.log("successs");
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="adduser">
      <Link to={"/"}>Back</Link>
      <h3>Update User</h3>
      <form onSubmit={submitform}>
        <div className="inputGroup">
          <label htmlFor="fname">First name</label>
          <input
            type="text"
            value={user.fname}
            onChange={inputChangeHandler}
            id="fname"
            name="fname"
            autoComplete="off"
            placeholder="First name"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            value={user.password}
            onChange={inputChangeHandler}
            id="password"
            name="password"
            autoComplete="off"
            placeholder="Password"
          />
        </div>
        <div className="inputGroup">
          <button type="submit">Update User</button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
