import{ React, useState } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const AddUser = (props) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [roles, setRole] = useState({
    glAdmin: false,
    user: false,
    custAdmin: false,
    glRSM: false,
    glIntSale: false,
    glEng: false,
  });

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFirstChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastChange = (e) => {
    setLastName(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleRoleChange = (e) => {
    let tempRole = {
      glAdmin: roles.glAdmin,
      user: roles.user,
      custAdmin: roles.custAdmin,
      glRSM: roles.glRSM,
      glIntSale: roles.glIntSale,
      glEng: roles.glEng,
    };
    tempRole[e.target.value] = !roles[e.target.value];
    setRole(tempRole);
    // switch (e) {
    //   case "a":
    //     tempRole.glAdmin = true;
    //     break;
    // }
  };

  const handleSubmit = (e) => {
    let tempRoles = [];
    Object.keys(roles).forEach((key) => {
      if (roles[key]) tempRoles.push(key);
    });
    let oData = {
      customer: "Gleason",
      username: userName,
      email: email,
      firstName: firstName,
      lastName: lastName,
      roles: tempRoles,
      isTrial: "Y",
    };
    console.log(oData);
    fetch("http://localhost:3000/addUser", {
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(oData),
    })
      .then(function (res) {
        console.log(res);
      })
      .catch(function (res) {
        console.log(res);
      });
  };

  return (
    <div className="container">
      <form>
        <div className="row">
          <div className="col-6">
            <div className="mb-3">
              <label htmlFor="customer" className="form-label">
                Customer
              </label>
              <select
                className="form-control"
                placeholder="Select Customer"
                id="customer"
              >
                <option selected disabled>
                  Select Customer
                </option>
                <option>Google</option>
                <option>Meta</option>
                <option>Microsoft</option>
                <option>Netflix</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter Email address"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="firstname" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="firstname"
                value={firstName}
                onChange={handleFirstChange}
                placeholder="Enter First Name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastname" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="lastname"
                value={lastName}
                onChange={handleLastChange}
                placeholder="Enter Last Name"
              />
            </div>
            <div className="mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" for="flexCheckDefault">
                Trial User
              </label>
            </div>
          </div>
          <div className="col-5">
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={userName}
                onChange={handleUsernameChange}
                placeholder="Enter Username"
              />
            </div>
            <div>
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Roles
              </label>
              <div className="mb-3">
                <input
                  className="form-check-input"
                  onChange={handleRoleChange}
                  type="checkbox"
                  value="glAdmin"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Global Gleason Admin
                </label>
              </div>
              <div className="mb-3">
                <input
                  className="form-check-input"
                  onChange={handleRoleChange}
                  type="checkbox"
                  value="user"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  User
                </label>
              </div>
              <div className="mb-3">
                <input
                  className="form-check-input"
                  onChange={handleRoleChange}
                  type="checkbox"
                  value="custAdmin"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Customer Admin
                </label>
              </div>
              <div className="mb-3">
                <input
                  className="form-check-input"
                  onChange={handleRoleChange}
                  type="checkbox"
                  value="glRSM"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Gleason Regional Sales Manager(RSM)
                </label>
              </div>
              <div className="mb-3">
                <input
                  className="form-check-input"
                  onChange={handleRoleChange}
                  type="checkbox"
                  value="glIntSale"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Gleason Internal Sales
                </label>
              </div>
              <div className="mb-3">
                <input
                  className="form-check-input"
                  onChange={handleRoleChange}
                  type="checkbox"
                  value="glEng"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Gleason Engineer/Service Engineer
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="btn-group button-section" id="reset">
        <button type="button" className="btn btn-outline-danger" >
            Reset
          </button>
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={handleSubmit}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
