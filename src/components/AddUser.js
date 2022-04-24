import { React, useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import AddUserSuccess from "./AddUserSuccess";
const AddUser = (props) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [trial, setTrial] = useState(false);
  const [userName, setUserName] = useState("");
  const [customer,setCustomer]=useState("placeholder");
  const [addUserStatus, setAddUserStatus] = useState(false);
  let addUserCommentComponent = addUserStatus?<AddUserSuccess/>:null;
  const [roles, setRoles] = useState({
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
    setRoles(tempRole);
    // switch (e) {
    //   case "a":
    //     tempRole.glAdmin = true;
    //     break;
    // }
  };

  const handleReset = () => {
    setEmail("");
    setFirstName("");
    setLastName("");
    setUserName("");
    setCustomer("placeholder");
    setTrial(false);
    setRoles({
      glAdmin: false,
      user: false,
      custAdmin: false,
      glRSM: false,
      glIntSale: false,
      glEng: false,
    });
  };

  const handleSubmit = (e) => {
    let tempRoles = [];
    Object.keys(roles).forEach((key) => {
      if (roles[key]) tempRoles.push(key);
    });
    let oData = {
      customer: customer,
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
        setAddUserStatus(!addUserStatus);
        console.log(res);
      })
      .catch(function (res) {
        console.log(res);
      });
  };

  const handleCustomerChange=(e)=>{
    setCustomer(e.target.value)
  }

  const handleTrialChange=(e)=>{
    setTrial(!trial);
  }
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
                className="form-control" value={customer}
                onChange={handleCustomerChange}>
                <option value="placeholder" selected disabled>
                  Select Customer
                </option>
                <option value="Google">Google</option>
                <option value="Meta">Meta</option>
                <option value="Microsoft">Microsoft</option>
                <option value="Netflix">Netflix</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
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
                value={lastName}
                onChange={handleLastChange}
                placeholder="Enter Last Name"
              />
            </div>
            <div className="mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                checked={trial}
                onChange={handleTrialChange}
              />
              <label className="form-check-label">
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
                value={userName}
                onChange={handleUsernameChange}
                placeholder="Enter Username"
              />
            </div>
            <div>
              <label className="form-check-label">
                Roles
              </label>
              <div className="mb-3">
                <input
                  className="form-check-input"
                  onChange={handleRoleChange}
                  type="checkbox"
                  checked={roles.glAdmin}
                  value="glAdmin"
                />
                <label className="form-check-label">
                  Global Gleason Admin
                </label>
              </div>
              <div className="mb-3">
                <input
                  className="form-check-input"
                  onChange={handleRoleChange}
                  type="checkbox"
                  checked={roles.user}
                  value="user"
                />
                <label className="form-check-label" >
                  User
                </label>
              </div>
              <div className="mb-3">
                <input
                  className="form-check-input"
                  onChange={handleRoleChange}
                  type="checkbox"
                  checked={roles.custAdmin}
                  value="custAdmin"
                />
                <label className="form-check-label">
                  Customer Admin
                </label>
              </div>
              <div className="mb-3">
                <input
                  className="form-check-input"
                  onChange={handleRoleChange}
                  type="checkbox"
                  checked={roles.glRSM}
                  value="glRSM"
                />
                <label className="form-check-label" >
                  Gleason Regional Sales Manager(RSM)
                </label>
              </div>
              <div className="mb-3">
                <input
                  className="form-check-input"
                  onChange={handleRoleChange}
                  type="checkbox"
                  value="glIntSale"
                  checked={roles.glIntSale} />
                <label className="form-check-label">
                  Gleason Internal Sales
                </label>
              </div>
              <div className="mb-3">
                <input
                  className="form-check-input"
                  onChange={handleRoleChange}
                  type="checkbox"
                  checked={roles.glEng}
                  value="glEng"
                />
                <label className="form-check-label" >
                  Gleason Engineer/Service Engineer
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="btn-group button-section" >
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={handleReset}
          >
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
      {addUserCommentComponent}
    </div>
  );
};

export default AddUser;