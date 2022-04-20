import user from '../images/user.png';

const SideNav = () => {
  return (
    <div>
      <div className="nav-title">Gleason</div>
      <div className="nav-user">
      <img src={user} className="image"/>
      <div className="nav-user-text">
      User name
      </div>

      </div>
      <div className="nav-items-container">
          <div className="nav-item">Dashboard</div>
          <div className="nav-item">Applications</div>
          <div className="nav-item">Data Centers</div>
          <div className="nav-item">Customers</div>
          <div className="nav-item">User Management</div>
          <div className="nav-item">Vendors</div>
          <div className="nav-item">Application catalog</div>
          <div className="nav-item">Modules</div>
          <div className="nav-item">Packages</div>
      </div>
    </div>
  );
};

export default SideNav;
