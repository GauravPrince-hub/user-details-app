import React from "react";

export default function AddUser() {
  return (
    <div className="container">
    <form>
    <div className="row">
      <div className="col-6">
        <div className="mb-3">
          <label htmlFor="customer" className="form-label">
            Customer
          </label>
          <select className="form-control" placeholder="Select Customer" id="customer">
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
            placeholder="Enter Last Name"
          />
        </div>
        <div className="mb-3">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
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
            placeholder="Enter Username"
          />
        </div>
        <div>
        <label class="form-check-label" for="flexCheckDefault">
            Roles
          </label>
        <div className="mb-3">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            Global Gleason Admin
          </label>
        </div>
        <div className="mb-3">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            User
          </label>
        </div>
        <div className="mb-3">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            Customer Admin
          </label>
        </div>

        <div className="mb-3">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            Global Gleason Admin
          </label>
        </div>
        <div className="mb-3">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            Gleason Regional Sales Manager(RSM)
          </label>
        </div>
        <div className="mb-3">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            Gleason Internal Sales
          </label>
        </div>
        <div className="mb-3">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            Gleason Engineer/Service Engineer
          </label>
        </div>
      </div>
      </div>
      </div>
      </form>
    </div>
  );
}
