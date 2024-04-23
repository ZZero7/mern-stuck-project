import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./user.css";
import axios from "axios";
import toast from "react-hot-toast";
import { BASE_URL } from "../../constatnts/urls";

export const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${BASE_URL}/getall`);
      setUsers(response.data);
    };
    fetchData();
  }, []);

  const deleteUser = async (userId) => {
    await axios
      .delete(`http://localhost:8000/api/delete/${userId}`)
      .then((response) => {
        setUsers((prevUsers) =>
          prevUsers.filter((user) => user._id !== userId)
        );
        console.log(response);
        toast.success(response.data.msg, { position: "top-right" });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="userTable">
      <Link to={"/add"} className="addButton">
        add user
      </Link>
      <table border={1} cellpadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>fname</th>
            <th>password</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={user._id}>
                {/* <td>{index+1}</td> */}
                <td>{user.fname}</td>
                <td>{user.password}</td>
                <td>
                  <button onClick={() => deleteUser(user._id)}>delete</button>
                </td>
                <td>
                  <Link to={`/edit/` + user._id}>Edit</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default User;
