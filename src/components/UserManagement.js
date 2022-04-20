import React, { useState } from "react";

const UserManagement = () => {
  const [data, setData] = useState([]);

  const fetchApi = () => {
    let dataFetch = fetch("http://localhost:3000/viewUsers")
      .then((response) => response.json())
      .then((userdata) => {
        console.log(userdata);
        setData(userdata);
      })
      .catch((error) => {
        // handle the error
      });
  };
  
  var listElement = data.userData
    ? data.userData.map((user) => {
        return <div className="item">{user.name}</div>;
      })
    : null;



  return (
    <div className="user-manage">
      <div className="title">User Manegement</div>
      <div>{listElement}</div>
      <button onClick={fetchApi} >Click to load data</button>
    </div>
  );
};



export default UserManagement;
